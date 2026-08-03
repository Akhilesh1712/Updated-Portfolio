import { ArrowDownRight } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="content-section section-shell" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="01" eyebrow="PROFILE" title="Professional Profile." />

      <div className="about-grid about-grid--editorial">
        <div className="about-copy" data-reveal>
          <div className="about-profile__signal mono-label" aria-label="Engineering focus">
            <span><i /> ENGINEERING PROFILE / AK.1712</span>
            <span>AI SYSTEMS / BACKEND / GIS</span>
          </div>
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
