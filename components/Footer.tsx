import Link from "next/link";
import { LINKEDIN_URL, NAV_LINKS } from "@/lib/nav";
import ArrowRight from "./ArrowRight";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-cta">
            <div>Contact</div>
            <h2>Want to build fantastic things together?</h2>
            <Link className="btn btn-secondary" href="/contact">
              Let’s talk
              <ArrowRight />
            </Link>
          </div>

          <div className="footer-nav">
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <ul>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 448 512" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copy">© 2025 EthanTruong. All rights reserved.</div>
      </div>
    </footer>
  );
}
