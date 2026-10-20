"use client";

import { useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/nav";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Message from ${name || email}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your full name" />
      </div>
      <div className="form-group">
        <label htmlFor="cf-email">Email address</label>
        <input id="cf-email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" placeholder="Write your message here..." />
      </div>
      <button type="submit" className="btn form-submit">
        Send message
      </button>
      {sent && <p className="form-note">Opening your email app… thank you for reaching out!</p>}
    </form>
  );
}
