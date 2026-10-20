import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import ArrowRight from "@/components/ArrowRight";

export const metadata: Metadata = { title: "Work – EthanTruong" };

const projects = [
  {
    tag: "Strategic Open Brief Case Study | Gen MZ in Economic Downturn",
    title: "LEGO – THE MINDFUL PLAY FOR BURNOUTS",
    image: "lego.jpg",
  },
  {
    tag: "Strategic Case Study | Sanitary Brand Entry into Vietnam",
    title: "MOLPED – COMPASSION FOR EVERY PERIOD",
    image: "molped-scaled.jpg",
  },
  {
    tag: "Strategic Open Brief Case Study | Singapore Market Tourism Repositioning",
    title: "SINGAPORE – THE MULTI-AWEE GETAWAY",
    image: "singapore-tourism-board-logo-png_seeklogo-352768.png",
  },
  {
    tag: "Strategic Open Brief Case Study | Gen MZ Gap Year Mindset in Vietnam",
    title: "MILITARY – STRATEGIC MOVE TO YOUR EDGE",
    image: "quan-doi.png",
  },
  {
    tag: "Strategic Open Brief Case Study | Reframing Ritual for Vietnam’s Legacy Redefiners",
    title: "CREMATION – A PRESENT FAREWELL THAT LINGERS",
    image: "cremation-1.jpg",
  },
  {
    tag: "Strategic Campaign | When Unlived Possibilities Demand to Be Lived",
    title: "SAMSUNG FLAGSHIPS – UNFOLD THE UNLIVED",
    image: "Z-Flip-7.jpg",
  },
  {
    tag: "Strategic Campaign | When Everyday Fragments Shape Who We Are",
    title: "SAMSUNG FLAGSHIPS – UNFOLD WHERE HIDDEN LIFE MATTERS",
    image: "flip-3.webp",
  },
  {
    tag: "Communication Strategy | Reframing a Restaurant as a Cross-Cultural Culinary Channel",
    title: "ORYZ SAIGON – BRIDGING CULTURES THROUGH FOOD",
    image: "ORYZ-Saigon-Khuc-du-ca-am-thuc-giua-long-Sai-Thanh-hoa-le-5.jpg",
  },
  {
    tag: "Strategic Platform | Turning Fundraising into shared culture experience",
    title: "CULTURE-LED FUNDRAISING – WHEN MUSIC BECOMES MEANING",
    image: "471254211_122097779582700319_5324624433101130500_n-1536x1536.jpg",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-section work-section">
          <div className="container page-stack">
            <Reveal as="h1" animation="fadeIn" trigger="load" duration={2} delay={0.2} className="work-title">
              My work spans end to end strategy, from audience research to strategic story system
            </Reveal>

            <div className="work-block">
              <h2 className="work-heading">All projects</h2>
              <div className="project-grid">
                {projects.map((p) => (
                  <Reveal key={p.title} animation="fadeInUp" trigger="load" className="project-item">
                    <Link href="#" className="project-image">
                      <Image src={`/images/work/${p.image}`} alt="" fill sizes="(max-width: 478px) 100vw, 50vw" />
                    </Link>
                    <div className="project-meta">
                      <div className="dim">{p.tag}</div>
                      <h3>{p.title}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Testimonials variant="carousel" />

            <div className="row block-row">
              <div className="side-label">Services</div>
              <div className="side-body cta-row">
                <div className="lead">With a focus on strategy and usability, I help clients turn complex challenges into effective solutions.</div>
                <Link className="btn btn-secondary" href="/services">
                  See what I offer
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
