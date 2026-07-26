"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePortfolioStore } from "@/store/use-portfolio-store";

export function CinematicLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const setIntroComplete = usePortfolioStore((state) => state.setIntroComplete);

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 760px)").matches;

    // Phones should reach the portfolio immediately, even when the browser is
    // throttling animation frames or hydration is slow.
    if (compactViewport) {
      const compactTimer = window.setTimeout(() => {
        setVisible(false);
        setIntroComplete(true);
        delete document.documentElement.dataset.loading;
      }, 0);
      return () => window.clearTimeout(compactTimer);
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 250 : 1900;
    const start = performance.now();
    let frame = 0;
    let exitTimer = 0;
    let completed = false;

    document.documentElement.dataset.loading = "true";

    const completeIntro = () => {
      if (completed) return;
      completed = true;
      setVisible(false);
      setIntroComplete(true);
      delete document.documentElement.dataset.loading;
    };

    const safetyTimer = window.setTimeout(completeIntro, 3600);

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      exitTimer = window.setTimeout(completeIntro, reducedMotion ? 50 : 320);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(safetyTimer);
      delete document.documentElement.dataset.loading;
    };
  }, [setIntroComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-8%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-label={`Loading portfolio, ${progress}%`}
          role="status"
        >
          <div className="loader__grain" />
          <div className="loader__top mono-label">
            <span>AK / INTELLIGENT SYSTEMS</span>
            <span>INIT SEQUENCE</span>
          </div>

          <motion.div
            className="loader__mark"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            A<span>K</span>
          </motion.div>

          <div className="loader__bottom">
            <div className="loader__readout">
              <span className="mono-label">CALIBRATING NEURAL FIELD</span>
              <span className="loader__percent">{progress.toString().padStart(3, "0")}</span>
            </div>
            <div className="loader__track" aria-hidden="true">
              <motion.div className="loader__progress" animate={{ scaleX: progress / 100 }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
