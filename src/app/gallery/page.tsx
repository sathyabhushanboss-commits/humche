import type { Metadata } from "next";
import {
  TreePine,
  Sprout,
  Music,
  Wheat,
  Users,
  Home as HomeIcon,
  Compass,
  Leaf,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "A field journal of moments from Hamche Culture — forest walks, farming, music, and community life with the Siddi community.",
};

const notes = [
  { icon: TreePine, tag: "Forest Trail", caption: "Reading the canopy at first light", tone: "forest", rotate: "-rotate-2" },
  { icon: Users, tag: "Cultural Exchange", caption: "An afternoon shared with the Siddi elders", tone: "brown", rotate: "rotate-1" },
  { icon: Wheat, tag: "Farming", caption: "Hands in the soil, learning the old way", tone: "leaf", rotate: "rotate-2" },
  { icon: Music, tag: "Storytelling", caption: "Drums, dance, and stories after sundown", tone: "forest", rotate: "-rotate-1" },
  { icon: Sprout, tag: "Biodiversity", caption: "Medicinal plants along the eastern ridge", tone: "leaf", rotate: "rotate-1" },
  { icon: HomeIcon, tag: "Village Life", caption: "A morning in a Siddi household", tone: "brown", rotate: "-rotate-2" },
  { icon: Compass, tag: "Eco-Tourism", caption: "Low-impact trails, high-impact memories", tone: "forest", rotate: "rotate-2" },
  { icon: Leaf, tag: "Nature Walk", caption: "Naming trees the community has always known", tone: "leaf", rotate: "-rotate-1" },
] as const;

const toneMap: Record<string, string> = {
  forest: "bg-forest text-cream-soft",
  leaf: "bg-leaf text-cream-soft",
  brown: "bg-brown-deep text-cream-soft",
};

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="From the Field Journal"
        title="Notes from the trail."
        lede="A running journal of the moments a visit is made of — not staged photography, but the texture of what you'll actually experience."
      />

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {notes.map((n, i) => (
            <Reveal key={n.caption} delay={(i % 4) * 70}>
              <div
                className={`bg-white p-3 pb-5 rounded-sm shadow-[0_10px_30px_-12px_rgba(36,26,18,0.35)] ${n.rotate} hover:rotate-0 transition-transform duration-300`}
              >
                <div
                  className={`aspect-[4/5] rounded-[2px] flex items-center justify-center relative overflow-hidden ${toneMap[n.tone]}`}
                >
                  <svg
                    className="absolute inset-0 opacity-25"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 140 Q60 40 100 100 T180 60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                    />
                  </svg>
                  <n.icon size={44} strokeWidth={1.4} className="relative" />
                </div>
                <div className="pt-4 px-1">
                  <p className="eyebrow text-clay">{n.tag}</p>
                  <p className="font-display italic text-brown-deep mt-1.5 leading-snug">
                    {n.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-center text-sm text-ink/55 font-mono">
            More field notes are added after every visit.
          </p>
        </Reveal>
      </section>
    </>
  );
}
