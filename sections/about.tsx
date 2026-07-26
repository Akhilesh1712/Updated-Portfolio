import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="content-section section-shell" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="01" eyebrow="PROFILE" title="Professional Profile." />

      <div className="about-grid">
        <div className="about-portrait" data-reveal>
          <Image
            src="/akhilesh-profile.png"
            alt="Akhilesh Kumar, software engineer and AI engineer"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div className="about-portrait__hud mono-label" aria-hidden="true">
            <span><i /> AVAILABLE / 2026</span>
            <span>PORTRAIT / 01</span>
          </div>
          <div className="about-portrait__label mono-label">
            <span>SUBJECT / AK.1712</span>
            <span>AI + SOFTWARE ENGINEER</span>
          </div>
        </div>

        <div className="about-copy" data-reveal>
          <p className="about-lede">{portfolio.person.about}</p>
          <div className="about-details">
            <p>
              From LLM orchestration and Java services to spatial systems, computer vision, and
              React interfaces, I like owning the difficult space where disciplines meet.
            </p>
            <dl>
              <div><dt>BASED</dt><dd>{portfolio.person.location}</dd></div>
              <div><dt>FOCUS</dt><dd>Enterprise AI / Agentic systems</dd></div>
              <div><dt>TRACK</dt><dd>6× hackathon winner / finalist</dd></div>
            </dl>
          </div>
          <a className="round-link" href="#experience" aria-label="Continue to experience" data-magnetic data-cursor="link">
            <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
