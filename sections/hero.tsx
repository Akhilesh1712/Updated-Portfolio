"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { usePortfolioStore } from "@/store/use-portfolio-store";

const roles = ["GENERATIVE AI", "JAVA BACKEND SYSTEMS", "FULL-STACK PRODUCTS", "GIS INTELLIGENCE"];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let character = 0;
    let deleting = false;
    let timer = 0;

    const type = () => {
      const role = roles[roleIndex];
      character += deleting ? -1 : 1;
      setText(role.slice(0, character));

      if (!deleting && character === role.length) {
        deleting = true;
        timer = window.setTimeout(type, 1450);
      } else if (deleting && character === 0) {
        deleting = false;
        setRoleIndex((current) => (current + 1) % roles.length);
        timer = window.setTimeout(type, 300);
      } else {
        timer = window.setTimeout(type, deleting ? 32 : 62);
      }
    };

    timer = window.setTimeout(type, 450);
    return () => window.clearTimeout(timer);
  }, [roleIndex]);

  return (
    <span className="typing-role" aria-label={roles[roleIndex]}>
      {text}<span aria-hidden="true">_</span>
    </span>
  );
}

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const introComplete = usePortfolioStore((state) => state.introComplete);

  useGSAP(
    () => {
      if (!introComplete || !scope.current) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const split = new SplitType(scope.current.querySelector(".hero-title") as HTMLElement, {
        types: "lines,words",
        tagName: "span",
      });

      if (reduced) {
        gsap.set([split.words, ".hero-kicker", ".hero-copy", ".hero-actions", ".hero-credentials", ".hero-rail"], {
          autoAlpha: 1,
          y: 0,
        });
      } else {
        const timeline = gsap.timeline();
        timeline
          .fromTo(".hero-kicker", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 })
          .fromTo(
            split.words,
            { yPercent: 115, rotate: 3 },
            { yPercent: 0, rotate: 0, duration: 1.15, stagger: 0.055, ease: "power4.out" },
            "-=.3",
          )
          .fromTo(
            [".hero-copy", ".hero-actions", ".hero-credentials", ".hero-rail"],
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out" },
            "-=.55",
          );
      }

      return () => split.revert();
    },
    { scope, dependencies: [introComplete], revertOnUpdate: true },
  );

  return (
    <section id="home" ref={scope} className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-kicker mono-label">
        <span className="status-dot" />
        {portfolio.person.availability}
      </div>

      <div className="hero-grid">
        <div>
          <h1 id="hero-title" className="hero-title">
            Akhilesh<br /><em>Kumar.</em>
          </h1>
        </div>

        <div className="hero-side">
          <span className="hero-role mono-label">{portfolio.person.headline}</span>
          <p className="hero-copy">{portfolio.person.intro}</p>
          <TypingRole />
          <div className="hero-actions">
            <a className="button-primary" href="#projects" data-magnetic data-cursor="link">
              Explore work <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact" data-cursor="link">Start a conversation</a>
          </div>
        </div>
      </div>

      <div className="hero-credentials" aria-label="Career highlights">
        <div>
          <strong>2+</strong>
          <span className="mono-label">Years of engineering experience</span>
        </div>
        <div>
          <strong>6×</strong>
          <span className="mono-label">Hackathon winner / finalist</span>
        </div>
        <div>
          <strong>@</strong>
          <span className="mono-label">Software Engineer · Amantya Technologies</span>
        </div>
      </div>

      <div className="hero-rail">
        <a href="#about" aria-label="Scroll to about section" data-cursor="link">
          <ArrowDown aria-hidden="true" />
          <span className="mono-label">Scroll to decode</span>
        </a>
        <span className="mono-label hero-coordinates">12.9716° N<br />77.5946° E</span>
        <span className="mono-label hero-index">AKHILESH / 2026</span>
      </div>
    </section>
  );
}
