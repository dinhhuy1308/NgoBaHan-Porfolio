import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const experience = [
  { period: "2024 - Present", role: "Strategic Planner", place: "Ho Chi Minh City, Cheil Vietnam" },
  { period: "2023 - Present", role: "Communication Specialist", place: "Remote and Ho Chi Minh City, Vietnam" },
  { period: "2023 - 2024", role: "Content Strategist", place: "Ho Chi Minh City, UStudio, Unilever Vietnam" },
  { period: "2022 - 2023", role: "Junior Strategic Planner", place: "Ho Chi Minh City, Circus Digital, Vietnam" },
];

const education = [
  {
    period: "2018 - 2022",
    role: "Bachelor’s in International Business Economics",
    place: "Ho Chi Minh City, Vietnam",
  },
];

function TimelineItem({ period, role, place }: { period: string; role: string; place: string }) {
  return (
    <div className="tl-item">
      <div className="tl-left dim">{period}</div>
      <div className="tl-right">
        <div>{role}</div>
        <div className="dim">{place}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-container">
            <Reveal as="h1" animation="fadeIn" trigger="load" duration={2} delay={0.2}>
              I shape strategy rooted in human truths and carried by purposeful creativity.
            </Reveal>

            <div className="row hero-row">
              <Reveal animation="fadeInLeft" trigger="load" duration={2} className="hero-text">
                <div className="text-lg">
                  <p>
                    As a communication strategist, I see advertising not just as messaging, but as a way to make
                    people feel seen, understood, and inspired to move toward something meaningful.
                  </p>
                  <p>
                    I was drawn to this field by storytelling’s power to reclaim unheard voices, captivated by
                    campaigns like Dove’s redefinition of beauty and Axe’s bold take on masculinity that helped
                    people see themselves anew.
                  </p>
                  <p>
                    As a planner, I’m driven by curiosity to observe, listen and decode the patterns behind
                    decisions. For me, creative strategy is a way of life: blending empathy and purpose to move
                    people closer to their goals through impactful storytelling.
                  </p>
                </div>
              </Reveal>

              <Reveal animation="fadeInRight" trigger="load" duration={2} className="hero-photo">
                <Image src="/images/portrait.jpg" alt="" width={800} height={800} sizes="(max-width: 767px) 100vw, 368px" priority />
              </Reveal>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <Reveal className="row about-row" animation="fadeInUp">
              <div className="side-label">My approach</div>
              <div className="side-body">
                <div className="lead">I design story-driven strategy, balancing instinct with structure.</div>
                <div className="text-lg">
                  <p>
                    When navigating complex briefs, I ground myself in fundamentals: category dynamics, cultural
                    patterns, and audience needs. I uncover existing narratives, identify gaps, and spot where new
                    meaning can emerge.
                  </p>
                  <p>
                    My strength lies in intuitively bridging the disconnect between what brands say and what
                    audiences truly feel: crafting emotionally intelligent, strategically precise work that drives
                    real business impact.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="row about-row" animation="fadeInUp" delay={0.2}>
              <div className="side-label">My Belief</div>
              <div className="side-body">
                <div className="text-lg">
                  <p>To me, creative outcomes are creativity at play in the field of time.&nbsp;</p>
                  <p>I see my work as soul spaces to explore and experiment with.&nbsp;</p>
                  <p>
                    This isn’t bounded to work alone. It comes from me living with intention, showing up
                    consistently, and staying true so that every creative act aligns with the core truth of what’s
                    meant to be built.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="row about-row" animation="fadeInUp" delay={0.4}>
              <div className="side-label">Timeline</div>
              <div className="side-body timeline">
                <div>
                  <p className="tl-heading">Work Experience</p>
                  <div className="tl-list">
                    {experience.map((e) => (
                      <TimelineItem key={e.role} {...e} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="tl-heading">Education</p>
                  <div className="tl-list">
                    {education.map((e) => (
                      <TimelineItem key={e.role} {...e} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
