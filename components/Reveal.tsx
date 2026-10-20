"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type Animation = "fadeIn" | "fadeInLeft" | "fadeInRight" | "fadeInUp";

type RevealProps = {
  as?: ElementType;
  animation: Animation;
  /** "load" plays on mount, "scroll" plays when the element enters the viewport (once). */
  trigger?: "load" | "scroll";
  duration?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  animation,
  trigger = "scroll",
  duration = 1.2,
  delay = 0,
  className = "",
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      const frame = requestAnimationFrame(() => setPlayed(true));
      return () => cancelAnimationFrame(frame);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${played ? `reveal-in anim-${animation}` : ""} ${className}`}
      style={{ ...style, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
