import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  TreePine,
  Sprout,
  Users,
  Music,
} from "lucide-react";
import Stamp from "@/components/Stamp";
import LeafDivider from "@/components/LeafDivider";
import Reveal from "@/components/Reveal";
import { audiences } from "@/lib/site";

const featuredOfferings = [
  {
    icon: Users,
    title: "Cultural Exchange",
    detail: "Share a meal and a story with the Siddi community — history you won't find in a textbook.",
  },
  {
    icon: TreePine,
    title: "Forest Walks",
    detail: "Guided walks that teach you to read a living canopy the way locals have for generations.",
  },
  {
    icon: Sprout,
    title: "Sustainable Farming",
    detail: "Hands in the soil, learning traditional and sustainable agriculture from those who practice it.",
  },
  {
    icon: Music,
    title: "Music & Storytelling",
    detail: "Traditional Siddi music, dance, and food — performed for kinship, not for a camera.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="ruled relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-[1.3fr_auto] gap-12 items-start">
          <div>
            <p className="eyebrow text-forest mb-6">
              Hamche Culture — Field Notes from the Siddi Heartland
            </p>
            <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.6rem] md:text-[4.4rem] font-semibold text-brown-deep tracking-tight">
              Way back to
              <br />
              <span className="italic text-forest font-medium">real life.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ink/80">
              Hamche Culture offers immersive cultural and educational experiences
              that connect people with the rich heritage of the Siddi Community,
              nature, and sustainable living — one village, one forest trail, one
              shared meal at a time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-forest-deep transition-colors"
              >
                Plan Your Visit <ArrowRight size={17} />
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-brown-deep font-semibold underline-grow"
              >
                See what we offer <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center gap-4 pt-4">
            <Stamp size={148} tone="forest" />
            <p className="eyebrow text-brown text-center max-w-[9rem] leading-relaxed">
              Experience · Learn
              <br />
              Connect with Nature
            </p>
          </div>
        </div>
      </section>

      <LeafDivider from="#F5EBD7" to="#1B5E20" />

      {/* MISSION BAND */}
      <section className="bg-forest text-cream-soft">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed">
              &ldquo;A place isn&rsquo;t just seen — it&rsquo;s shared. Our work is to
              open an honest door between visitors, the Siddi community, and the
              forest that holds them both.&rdquo;
            </p>
            <p className="eyebrow mt-8 text-cream-soft/70">
              Nagaraj Siddi, Founder
            </p>
          </Reveal>
        </div>
      </section>

      <LeafDivider flip from="#F5EBD7" to="#1B5E20" />

      {/* WHO IS IT FOR */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-forest mb-3">01 — Who It&rsquo;s For</p>
          <h2 className="font-display text-3xl md:text-[2.6rem] text-brown-deep font-semibold max-w-2xl">
            Built for people who learn best by being there.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brown/15 border hairline rounded-2xl overflow-hidden">
          {audiences.map((a, i) => (
            <Reveal key={a} delay={i * 60}>
              <div className="bg-cream-soft h-full p-7">
                <span className="font-mono text-xs text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg text-brown-deep leading-snug">
                  {a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER PREVIEW */}
      <section className="bg-cream-soft border-t hairline">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow text-forest mb-3">02 — What We Offer</p>
                <h2 className="font-display text-3xl md:text-[2.6rem] text-brown-deep font-semibold max-w-xl">
                  Eight ways to reconnect.
                </h2>
              </div>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 font-semibold text-forest underline-grow shrink-0"
              >
                View all experiences <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredOfferings.map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <div className="h-full bg-cream rounded-2xl border hairline p-7 hover:border-forest/50 hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-forest/10 text-forest">
                    <o.icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-brown-deep font-semibold">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {o.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep text-cream-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="eyebrow text-cream-soft/60 mb-3">Rebuild the connection</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-lg">
              Discover a way of life worth reconnecting with.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream text-brown-deep px-7 py-4 rounded-full font-semibold hover:bg-white transition-colors shrink-0"
          >
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
