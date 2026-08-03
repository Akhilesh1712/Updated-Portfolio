"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  const cloudRef = useRef<HTMLDivElement>(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);
  const [interactionIndex, setInteractionIndex] = useState<number | null>(null);
  const activeIndex = interactionIndex ?? scrollActiveIndex;

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveGroup = () => {
      const cloud = cloudRef.current;
      if (!cloud) return;

      const rect = cloud.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startLine = viewportHeight * 0.85;
      const endLine = viewportHeight * 0.15;
      const travel = Math.max(1, rect.height + startLine - endLine);
      const progress = Math.min(1, Math.max(0, (startLine - rect.top) / travel));
      const nextIndex = Math.min(
        portfolio.skillGroups.length - 1,
        Math.floor(progress * portfolio.skillGroups.length),
      );

      setScrollActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveGroup);
    };

    updateActiveGroup();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="content-section section-shell skills" aria-labelledby="skills-title">
      <SectionHeading index="04" eyebrow="CAPABILITIES" title="Technical Expertise." />
      <div className="skills-layout" id="skills-title">
        <p className="skills-statement" data-reveal>
          I work across AI, backend, data, GIS, and the browser because production problems rarely respect discipline boundaries.
        </p>
        <div className="skill-cloud" ref={cloudRef} data-reveal>
          {portfolio.skillGroups.map((group, groupIndex) => (
            <article
              className={`skill-orb skill-orb--${groupIndex + 1}`}
              key={group.label}
              tabIndex={0}
              data-active={activeIndex === groupIndex ? "true" : "false"}
              aria-current={activeIndex === groupIndex ? "true" : undefined}
              onMouseEnter={() => setInteractionIndex(groupIndex)}
              onMouseLeave={() => setInteractionIndex(null)}
              onFocus={() => setInteractionIndex(groupIndex)}
              onBlur={() => setInteractionIndex(null)}
            >
              <span className="mono-label">0{groupIndex + 1}</span>
              <h3>{group.label}</h3>
              <ul aria-hidden={activeIndex !== groupIndex}>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
