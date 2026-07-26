import Image from "next/image";
import { Award, Trophy } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { AchievementMedia } from "@/components/achievement-media";

export function Achievements() {
  const rankedAchievements = [...portfolio.achievements].sort((a, b) => a.rank - b.rank);

  return (
    <section id="achievements" className="achievement-journey section-shell" aria-labelledby="achievement-title">
      <header className="achievement-journey__header" data-reveal>
        <div>
          <span className="mono-label">05 / HACKATHONS & AWARDS</span>
          <p>A chronological record of national competitions, technical leadership, placements, and prizes.</p>
        </div>
        <h2 id="achievement-title">Hackathons<br /><em>& Awards.</em></h2>
      </header>

      <div className="achievement-impact" aria-label="Achievement summary">
        {portfolio.impact.map((item, index) => (
          <div key={item.label} data-reveal>
            <span className="mono-label">0{index + 1}</span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="journey-list">
        {rankedAchievements.map((achievement) => (
          <article
            className="journey-card"
            data-featured={achievement.featured ? "true" : "false"}
            data-rank={achievement.rank.toString().padStart(2, "0")}
            key={achievement.id}
            data-reveal
          >
            {achievement.media[0]?.src && (
              <div className="journey-card__ambient" aria-hidden="true">
                <Image src={achievement.media[0].src} alt="" fill sizes="100vw" />
              </div>
            )}
            <div className="journey-card__rail">
              <span className="mono-label">{achievement.rank.toString().padStart(2, "0")}</span>
              <i aria-hidden="true" />
              {achievement.result.includes("1ST") || achievement.result.includes("2ND") || achievement.result.includes("3RD") ? (
                <Trophy aria-hidden="true" />
              ) : (
                <Award aria-hidden="true" />
              )}
            </div>

            <div className="journey-card__content">
              <span className="journey-card__watermark" aria-hidden="true">
                {achievement.rank.toString().padStart(2, "0")}
              </span>
              <div className="journey-card__top">
                <div className="journey-card__identity">
                  <span className="mono-label">{achievement.year} / {achievement.organizer}</span>
                  <h3>{achievement.title}</h3>
                </div>
                <div className="journey-card__result">
                  <strong>{achievement.result}</strong>
                  {achievement.prize && <span className="mono-label">{achievement.prize}</span>}
                </div>
              </div>

              <div className="journey-card__story">
                <p>{achievement.summary}</p>
                <div>
                  <span className="mono-label">WHAT WE BUILT</span>
                  <p>{achievement.build}</p>
                </div>
              </div>

              <ul className="journey-card__stack" aria-label={`${achievement.title} technology stack`}>
                {achievement.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <div className="journey-media" data-count={achievement.media.length}>
                {achievement.media.map((media) => (
                  <AchievementMedia
                    key={`${achievement.id}-${media.fileName}`}
                    media={media}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="achievement-journey__footer" data-reveal>
        <span className="mono-label">MUMBAI / DTU / IIT DELHI / UIET / NSUT</span>
        <p>Each result reflects technical execution, leadership, and the ability to deliver under pressure.</p>
      </footer>
    </section>
  );
}
