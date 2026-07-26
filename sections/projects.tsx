"use client";

import type { CSSProperties, PointerEvent } from "react";
import { ArrowUpRight, Award, Code2, ExternalLink } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import type { Project } from "@/lib/portfolio-data";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePortfolioStore } from "@/store/use-portfolio-store";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const setActiveProjectId = usePortfolioStore((state) => state.setActiveProjectId);

  const handleTilt = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget.closest<HTMLElement>(".project-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${y * -3.5}deg`);
    card.style.setProperty("--tilt-y", `${x * 4}deg`);
    card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const resetTilt = (event: PointerEvent<HTMLButtonElement>) => {
    const card = event.currentTarget.closest<HTMLElement>(".project-card");
    card?.style.setProperty("--tilt-x", "0deg");
    card?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      className={`project-card project-card--${index + 1}`}
      data-project={project.id}
      data-reveal
      style={{ "--tilt-x": "0deg", "--tilt-y": "0deg" } as CSSProperties}
    >
      <button
        className="project-card__button"
        type="button"
        onClick={() => setActiveProjectId(project.id)}
        onPointerMove={handleTilt}
        onPointerLeave={resetTilt}
        data-cursor="view"
        aria-label={`Open case study for ${project.title}`}
      />
      <div className="project-card__visual">
        <ProjectVisual projectId={project.id} />
        {project.award && (
          <span className="project-card__award mono-label">
            <Award aria-hidden="true" /> {project.award}
          </span>
        )}
        <span className="project-card__open"><ArrowUpRight aria-hidden="true" /></span>
      </div>
      <div className="project-card__meta mono-label">
        <span>{project.eyebrow}</span>
        <span>{project.period}</span>
      </div>
      <div className="project-card__copy">
        <div>
          <span className="project-card__number mono-label">CASE / {project.number}</span>
          <h3>{project.title}</h3>
        </div>
        <div>
          <p>{project.description}</p>
          <ul className="project-card__stack" aria-label={`${project.title} technology stack`}>
            {project.stack.slice(0, index === 0 ? 5 : 3).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectModal() {
  const activeProjectId = usePortfolioStore((state) => state.activeProjectId);
  const setActiveProjectId = usePortfolioStore((state) => state.setActiveProjectId);
  const project = portfolio.projects.find((item) => item.id === activeProjectId) as Project | undefined;

  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && setActiveProjectId(null)}>
      {project && (
        <DialogContent className="project-modal" showCloseButton>
          <div className="project-modal__visual">
            <ProjectVisual projectId={project.id} modal />
          </div>
          <div className="project-modal__content">
            <DialogHeader>
              <span className="mono-label">CASE STUDY / {project.number}</span>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.longDescription}</DialogDescription>
            </DialogHeader>
            <div className="project-modal__grid">
              <div>
                <span className="mono-label">CORE FEATURES</span>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
              <div>
                <span className="mono-label">STACK</span>
                <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <div className="project-modal__actions">
              <a href={project.github} target="_blank" rel="noreferrer" data-cursor="link">
                <Code2 aria-hidden="true" /> Source
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" data-cursor="link">
                  <ExternalLink aria-hidden="true" /> Project preview
                </a>
              )}
              {project.certificate && (
                <a href={project.certificate} target="_blank" rel="noreferrer" data-cursor="link">
                  <Award aria-hidden="true" /> Award certificate
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="projects" className="content-section section-shell projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" index="03" eyebrow="CASE STUDIES" title="Selected Projects." />
      <p className="projects-intro" data-reveal>
        Four product systems spanning agent discovery, financial intelligence, accessible computer vision, and personalized social feeds.
      </p>
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <ProjectModal />
    </section>
  );
}
