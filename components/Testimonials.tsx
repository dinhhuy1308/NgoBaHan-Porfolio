"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/nav";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="testimonial">
      <blockquote>
        {t.quote.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      <div className="t-name">{t.name}</div>
      <div className="t-title">{t.title}</div>
    </div>
  );
}

/** stacked: all cards listed (Services). carousel: one card at a time with pagination (Work). */
export default function Testimonials({ variant = "stacked" }: { variant?: "stacked" | "carousel" }) {
  const [index, setIndex] = useState(0);

  if (variant === "stacked") {
    return (
      <div className="t-stack">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} t={t} />
        ))}
      </div>
    );
  }

  return (
    <div className="t-carousel">
      <Card t={TESTIMONIALS[index]} />
      <div className="t-dots">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
