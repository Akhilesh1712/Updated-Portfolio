import { Plus } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { AchievementMedia } from "@/components/achievement-media";

export function Experience() {
  return (
    <section id="experience" className="content-section section-shell" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" index="02" eyebrow="CAREER" title="Professional Experience." />

      <div className="experience-list">
        {portfolio.experience.map((item, index) => (
          <details className="experience-item" key={item.company} data-reveal open={index === 0}>
            <summary data-cursor="link">
              <span className="experience-item__number mono-label">0{index + 1}</span>
              <span className="experience-item__company">{item.company}</span>
              <span className="experience-item__role">{item.role}</span>
              <span className="experience-item__period mono-label">{item.period}<small>{item.location}</small></span>
              <span className="experience-item__icon"><Plus aria-hidden="true" /></span>
            </summary>
            <div className="experience-item__body">
              <p>{item.description}</p>
              <div>
                <span className="mono-label">SIGNAL</span>
                <strong>{item.achievement}</strong>
              </div>
              <ul aria-label="Technologies used">
                {item.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            {item.recognition.length > 0 && (
              <section className="experience-recognition" aria-label={`${item.company} leadership and recognition`}>
                <header>
                  <span className="mono-label">LEADERSHIP & RECOGNITION</span>
                  <h3>Contributions beyond project delivery</h3>
                </header>
                <div className="experience-recognition__grid">
                  {item.recognition.map((recognition) => (
                    <article key={recognition.title}>
                      <div className="experience-recognition__copy">
                        <span className="mono-label">{recognition.type}</span>
                        <h4>{recognition.title}</h4>
                        <p>{recognition.description}</p>
                      </div>
                      <AchievementMedia media={recognition.media} />
                    </article>
                  ))}
                </div>
              </section>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
