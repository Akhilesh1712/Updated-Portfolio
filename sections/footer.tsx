import { ArrowUp } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer__line" aria-hidden="true" />
      <div className="footer__top">
        <span className="footer__mark">{portfolio.person.shortName}</span>
        <p>Building production AI<br />that survives reality.</p>
        <a href="#home" aria-label="Back to top" data-magnetic data-cursor="link"><ArrowUp /></a>
      </div>
      <div className="footer__bottom mono-label">
        <span>© 2026 {portfolio.person.name}</span>
        <span>DESIGNED + ENGINEERED WITH INTENT</span>
        <span>ALL SYSTEMS NOMINAL</span>
      </div>
    </footer>
  );
}
