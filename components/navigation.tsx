"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll.current && current > 140 && !menuOpen);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-nav" data-hidden={hidden ? "true" : "false"}>
        <a className="site-nav__brand" href="#home" aria-label="Go to home" data-cursor="link">
          <span>{portfolio.person.shortName}</span>
          <span className="site-nav__brand-divider" />
          <span className="mono-label">AI SYSTEMS<br />MMXXVI</span>
        </a>

        <nav className="site-nav__links" aria-label="Main navigation">
          {portfolio.nav.map((item) => (
            <a key={item.href} href={item.href} data-cursor="link">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="site-nav__resume"
          href={portfolio.links.resume}
          title="Open résumé"
          target="_blank"
          rel="noreferrer"
          data-magnetic
          data-cursor="link"
        >
          Résumé <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="site-nav__menu"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          data-cursor="link"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {portfolio.nav.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  <span className="mono-label">0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="mobile-menu__resume"
              href={portfolio.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              View résumé <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="mobile-menu__footer mono-label">
              <span>{portfolio.person.location}</span>
              <span>{portfolio.person.availability}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
