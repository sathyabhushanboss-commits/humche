import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  TreePine,
  Sprout,
  Wheat,
  Home as HomeIcon,
  Music,
  HeartHandshake,
  Compass,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Cultural exchange, forest walks, sustainable farming, and more — the experiences Hamche Culture offers with the Siddi community.",
};

const offerings = [
  {
    icon: Users,
    title: "Cultural Exchange",
    detail:
      "Sit down with Siddi families, share a meal, and hear the histories and traditions carried through generations — told firsthand, not from a guidebook.",
  },
  {
    icon: TreePine,
    title: "Forest & Nature Walks",
    detail:
      "Slow, guided walks through living forest with local trackers who read the canopy, the calls, and the trails the way their families always have.",
  },
  {
    icon: Sprout,
    title: "Native Trees, Medicinal Plants & Biodiversity",
    detail:
      "Learn to identify native trees and medicinal plants, and understand the biodiversity that sustains the Western Ghats region.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Sustainable Farming",
    detail:
      "Hands-on time in the fields — traditional and sustainable farming methods explained and practised alongside local farmers.",
  },
  {
    icon: HomeIcon,
    title: "Rural Lifestyle & Community Interaction",
    detail:
      "An honest look at everyday rural life: homes, routines, and the community bonds that hold a village together.",
  },
  {
    icon: Music,
    title: "Traditional Music, Dance & Storytelling",
    detail:
      "Siddi music, dance, food, and oral storytelling — performed as living culture, shared with visitors as guests, not spectators.",
  },
  {
    icon: HeartHandshake,
    title: "Social Work & Community Development Exposure",
    detail:
      "Built for MSW and social work students — direct exposure to ongoing community development work and the people driving it.",
  },
  {
    icon: Compass,
    title: "Eco-Tourism & Responsible Travel",
    detail:
      "Low-impact, community-led travel that gives back to the people and forest it moves through, instead of extracting from them.",
  },
];

export default function Experiences() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Eight ways to reconnect."
        lede="Every programme at Hamche Culture is built around three threads — experience, learning, and nature — and can be shaped around your group's time, size, and focus."
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={(i % 4) * 60}>
              <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 py-9 border-b hairline items-start">
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                  <span className="font-mono text-2xl text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-forest/10 text-forest">
                    <o.icon size={20} strokeWidth={1.8} />
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-brown-deep font-semibold">
                    {o.title}
                  </h2>
                  <p className="mt-2.5 max-w-2xl text-[1.02rem] leading-relaxed text-ink/75">
                    {o.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl bg-forest text-cream-soft p-9 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="eyebrow text-cream-soft/70 mb-3">Custom Itineraries</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold max-w-md">
                Tell us your group, and we&rsquo;ll shape the days around it.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cream text-brown-deep px-7 py-4 rounded-full font-semibold hover:bg-white transition-colors shrink-0"
            >
              Start Planning <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
