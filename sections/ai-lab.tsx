"use client";

import { useEffect, useRef } from "react";
import { Cpu, Network, Sparkles } from "lucide-react";

type Node = { x: number; y: number; ox: number; oy: number; phase: number };

export function AiLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const pointer = { x: -1000, y: -1000 };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let time = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.max(8, Math.floor(width / 90));
      const rows = Math.max(5, Math.floor(height / 82));
      nodes = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = ((column + 0.5) / columns) * width;
        const y = ((row + 0.5) / rows) * height;
        return { x, y, ox: x, oy: y, phase: index * 0.73 };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      time += reducedMotion ? 0 : 0.012;

      nodes.forEach((node) => {
        const dx = pointer.x - node.ox;
        const dy = pointer.y - node.oy;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / 230);
        node.x += (node.ox + Math.sin(time + node.phase) * 8 + dx * influence * 0.08 - node.x) * 0.08;
        node.y += (node.oy + Math.cos(time * 0.8 + node.phase) * 6 + dy * influence * 0.08 - node.y) * 0.08;
      });

      for (let a = 0; a < nodes.length; a += 1) {
        for (let b = a + 1; b < nodes.length; b += 1) {
          const distance = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
          if (distance < 118) {
            context.beginPath();
            context.moveTo(nodes[a].x, nodes[a].y);
            context.lineTo(nodes[b].x, nodes[b].y);
            context.strokeStyle = `rgba(238, 232, 220, ${0.12 * (1 - distance / 118)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const distance = Math.hypot(pointer.x - node.x, pointer.y - node.y);
        context.beginPath();
        context.arc(node.x, node.y, distance < 160 ? 2.2 : 1.2, 0, Math.PI * 2);
        context.fillStyle = distance < 160 ? "rgba(225, 109, 58, .9)" : "rgba(238, 232, 220, .48)";
        context.fill();
      });

      if (!reducedMotion) frameRef.current = requestAnimationFrame(draw);
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const resetPointer = () => { pointer.x = -1000; pointer.y = -1000; };

    const observer = new ResizeObserver(() => { resize(); draw(); });
    observer.observe(canvas);
    canvas.addEventListener("pointermove", handlePointer);
    canvas.addEventListener("pointerleave", resetPointer);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      canvas.removeEventListener("pointermove", handlePointer);
      canvas.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <section className="ai-lab section-shell" aria-labelledby="ai-lab-title">
      <div className="ai-lab__frame" data-reveal>
        <canvas ref={canvasRef} aria-hidden="true" />
        <div className="ai-lab__noise" />
        <div className="ai-lab__top mono-label">
          <span>INTERACTIVE FIELD / LIVE</span>
          <span><i /> MOVE TO INFLUENCE</span>
        </div>
        <div className="ai-lab__center">
          <span className="mono-label">ENGINEERING APPROACH</span>
          <h2 id="ai-lab-title">AI engineering,<br /><em>end to end.</em></h2>
          <p>Move through the field. My engineering process begins by turning invisible technical complexity into a clear, useful product.</p>
        </div>
        <div className="ai-lab__cards" aria-label="AI system principles">
          <article><Cpu /><span className="mono-label">01 / REASON</span><strong>Model-native systems</strong></article>
          <article><Network /><span className="mono-label">02 / ORCHESTRATE</span><strong>Resilient infrastructure</strong></article>
          <article><Sparkles /><span className="mono-label">03 / EXPRESS</span><strong>Human interfaces</strong></article>
        </div>
      </div>
    </section>
  );
}
