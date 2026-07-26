import { Navigation } from "@/components/navigation";
import { ExperienceRuntime } from "@/components/effects/experience-runtime";
import { CinematicLoader } from "@/components/loader/cinematic-loader";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { AiLab } from "@/sections/ai-lab";
import { Skills } from "@/sections/skills";
import { Achievements } from "@/sections/achievements";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { portfolio } from "@/lib/portfolio-data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.person.name,
    jobTitle: portfolio.person.role,
    email: portfolio.person.email,
    telephone: portfolio.person.phone,
    address: { "@type": "PostalAddress", addressLocality: portfolio.person.location },
    alumniOf: portfolio.education.school,
    sameAs: portfolio.socials.map((social) => social.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <CinematicLoader />
      <ExperienceRuntime />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AiLab />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
