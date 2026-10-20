import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { ChatIcon, GlobeIcon, HeartHandIcon, RocketIcon } from "@/components/ServiceIcons";

export const metadata: Metadata = { title: "Services – EthanTruong" };

const offers = [
  {
    title: "01. Brand & Communication Strategy",
    text: "I help teams craft high-impact brand and communication strategies by aligning audience needs with business goals through research, analysis, and strategic planning.",
    image: "/images/services/z7410393809723_0e57b1ef70f750803cc07a01129e14d0.jpg",
    w: 1074,
    h: 806,
  },
  {
    title: "02. User Research & Testing",
    text: "I validate assumptions and uncover genuine audience needs through discovery research and audience testing, ensuring we are solving the right problems.",
    image: "/images/services/z7410401400363_2672ebde163c89e37022efb48056d860-1.jpg",
    w: 1170,
    h: 462,
  },
  {
    title: "03. Strategic Storytelling & Conceptulization",
    text: "I humanize brands through cohesive storytelling and creative concepts, rooted in strategic insight, emotionally resonant, and tailored to every audience touchpoint.",
    image: "/images/services/z7410403900217_01d8713cbe96de69a4eccb32536d73c1.jpg",
    w: 1170,
    h: 780,
  },
];

const how = [
  {
    icon: <RocketIcon />,
    title: "I move fast",
    text: "Years of experience working on the agency side have made me agile and flexible across different types of briefs, with the ability to manage effective thinking under tight timelines. I am quick to spot direction and turn conversations into prototypes before the meeting is even over.",
    delay: 0,
  },
  {
    icon: <ChatIcon />,
    title: "I speak Creative",
    text: "With roots in creative concepting and a shift into strategy, I bridge both worlds—crafting storytelling directions and briefs that inspire creatives and drive stronger outcomes",
    delay: 0.2,
  },
  {
    icon: <HeartHandIcon />,
    title: "I craft with target",
    text: "Targeting is embedded into my campaigns from day one, because a good campaign should have a clear target. This principle guides every decision I make.",
    delay: 0.5,
  },
  {
    icon: <GlobeIcon />,
    title: "I lead & lift others",
    text: "I direct project vision while creating space for others to do their best work. In internal discussions, I facilitate conversations that give everyone a real chance to contribute and grow.",
    delay: 0.5,
  },
];

const logos = [
  "Samsung_Galaxy_logo.svg",
  "tai-xuong-2.png",
  "image-1.png",
  "tai-xuong-3.png",
  "Website_logo_vikki-2.png",
  "tai-xuong.jpg",
  "tai-xuong-1.png",
  "logo.svg",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-section">
          <div className="container page-stack">
            <Reveal as="h1" animation="fadeIn" trigger="load" duration={2} delay={0.2}>
              I lead end-to-end campaign, coordinate across teams and deliver with impacts.
            </Reveal>

            <div className="row block-row">
              <div className="side-label">What I offer</div>
              <div className="side-body offers">
                {offers.map((o, i) => (
                  <Reveal key={o.title} animation="fadeInUp" trigger="load" delay={i * 0.2} className="offer">
                    <div className="offer-content">
                      <h3>{o.title}</h3>
                      <p>{o.text}</p>
                    </div>
                    <div className="offer-image">
                      <Image src={o.image} alt="" width={o.w} height={o.h} sizes="(max-width: 767px) 100vw, 280px" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="row block-row">
              <div className="side-label">How I do it</div>
              <div className="side-body how-grid">
                {how.map((h) => (
                  <Reveal key={h.title} animation="fadeInUp" delay={h.delay} className="icon-box">
                    <div className="icon">{h.icon}</div>
                    <div className="content">
                      <h4>{h.title}</h4>
                      <p>{h.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="row block-row">
              <div className="side-label">Who I’ve worked with</div>
              <Reveal animation="fadeInUp" delay={0.2} className="side-body">
                <ul className="logo-grid">
                  {logos.map((l) => (
                    <li key={l}>
                      <div className="logo-box">
                        <Image src={`/images/logos/${l}`} alt="" fill sizes="200px" unoptimized />
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="row block-row">
              <div className="side-label">Testimonials</div>
              <Reveal animation="fadeInUp" delay={0.2} className="side-body">
                <Testimonials variant="stacked" />
              </Reveal>
            </div>

            <Reveal animation="fadeInUp" delay={0.2} className="row block-row">
              <div className="side-label">About</div>
              <div className="side-body">
                <div className="lead">Take a look at my background, campaign process, and experience as a strategic planner</div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
