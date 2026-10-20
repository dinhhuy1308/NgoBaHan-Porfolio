import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ArrowRight from "@/components/ArrowRight";
import { EMAIL, LINKEDIN_URL } from "@/lib/nav";

export const metadata: Metadata = { title: "Contact – EthanTruong" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-section">
          <div className="container page-stack">
            <Reveal as="h1" animation="fadeInUp" trigger="load">
              Let’s connect
            </Reveal>
            <Reveal animation="fadeInUp" trigger="load" className="contact-intro">
              <p>
                Whether you’re starting a new project or need communication support for an existing one, I’d love to
                hear what you’re working on.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <Reveal animation="fadeInLeft" trigger="load" duration={2} className="card">
                <h3>Send me a message</h3>
                <ContactForm />
              </Reveal>

              <Reveal animation="fadeInRight" trigger="load" duration={2} className="contact-side">
                <div className="card">
                  <h3>Connect on LinkedIn</h3>
                  <p>Want to learn more about my background and experience? Check out my LinkedIn profile and let’s connect.</p>
                  <a className="btn btn-secondary" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    Find me on LinkedIn
                    <ArrowRight />
                  </a>
                </div>
                <div className="card">
                  <h3>Prefer to email?</h3>
                  <p>No problem! For a more detailed intro or proposal, feel free to reach out directly.</p>
                  <a className="btn btn-secondary" href={`mailto:${EMAIL}`}>
                    Send me an email
                    <ArrowRight />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
