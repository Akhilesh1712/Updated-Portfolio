import { portfolio } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="content-section section-shell skills" aria-labelledby="skills-title">
      <SectionHeading index="04" eyebrow="CAPABILITIES" title="Technical Expertise." />
      <div className="skills-layout" id="skills-title">
        <p className="skills-statement" data-reveal>
          I work across AI, backend, data, GIS, and the browser because production problems rarely respect discipline boundaries.
        </p>
        <div className="skill-cloud" data-reveal>
          {portfolio.skillGroups.map((group, groupIndex) => (
            <article className={`skill-orb skill-orb--${groupIndex + 1}`} key={group.label} tabIndex={0}>
              <span className="mono-label">0{groupIndex + 1}</span>
              <h3>{group.label}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
