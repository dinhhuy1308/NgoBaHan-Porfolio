"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import ArrowRight from "./ArrowRight";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolling ? "scrolling" : ""}`}>
      <div className="header-inner">
        <Link className="logo" href="/">
          Ngô Bá Hân
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul className="nav-menu">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className={isCurrent(l.href) ? "current" : ""}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar bar-top" />
          <span className="bar bar-center" />
          <span className="bar bar-bottom" />
        </button>

        <div className="header-cta">
          <ThemeToggle />
          <Link className="btn" href="/contact">
            Contact me
            <ArrowRight />
          </Link>
        </div>
      </div>

      <nav className={`nav-mobile ${open ? "is-open" : ""}`} aria-label="Mobile">
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.label} className={isCurrent(l.href) ? "current" : ""}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`nav-overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
    </header>
  );
}
