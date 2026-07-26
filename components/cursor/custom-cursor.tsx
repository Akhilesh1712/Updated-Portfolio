"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...position };
    let frame = 0;

    const render = () => {
      position.x += (target.x - position.x) * 0.16;
      position.y += (target.y - position.y) * 0.16;
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      );
      dotRef.current?.style.setProperty(
        "transform",
        `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`,
      );
      frame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;

      const hovered = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      setInteractive(Boolean(hovered));
      setLabel(hovered?.dataset.cursor === "view" ? "VIEW" : "");
    };

    const magneticElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const cleanups = magneticElements.map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        gsap.to(element, {
          x: (event.clientX - rect.left - rect.width / 2) * 0.18,
          y: (event.clientY - rect.top - rect.height / 2) * 0.18,
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const leave = () =>
        gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, .35)" });
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      };
    });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={cursorRef}
        className="cursor-ring"
        data-active={interactive ? "true" : "false"}
        data-label={label ? "true" : "false"}
      >
        {label}
      </div>
    </div>
  );
}

