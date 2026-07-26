"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      return;
    }

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 54 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallaxItems.forEach((element) => {
      const speed = Number(element.dataset.parallax ?? 12);
      gsap.fromTo(
        element,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}

