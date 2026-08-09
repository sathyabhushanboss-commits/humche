import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import LeafDivider from "@/components/LeafDivider";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hamche Culture connects people with the heritage of the Siddi Community, nature, and sustainable living through immersive cultural and educational experiences.",
};

const values = [
  {
    label: "Experience",
    text: "We don't lecture — we walk, sit, cook, and listen alongside the community and the forest.",
  },
  {
    label: "Learn",
    text: "Every visit is built around real knowledge: native ecology, sustainable farming, and living culture.",
  },
  {
    label: "Connect with Nature",
    text: "The forest is not a backdrop. It's a teacher, and we move through it on its terms.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Hamche Culture"
        title={
          <>
            Way back to <span className="italic text-forest">real life.</span>
          </>
        }
        lede="Hamche Culture offers immersive cultural and educational experiences that connect people with the rich heritage of the Siddi Community, nature, and sustainable living."
      />

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[1.1rem] leading-[1.9] text-ink/85">
            Tucked into the forests of Karnataka, the Siddi community carries a
            heritage that blends African roots with generations of Indian rural
            life — a culture of music, farming, and forest knowledge that rarely
            reaches the outside world. Hamche Culture exists to open that door
            responsibly: bringing students, researchers, and travellers into
            direct, respectful contact with a community and a landscape that
            still live close to the ground.
          </p>
          <p className="mt-6 text-[1.1rem] leading-[1.9] text-ink/85">
            Every programme is built around three things — experience, learning,
            and nature — so that what people take home is not a photograph, but
            a shift in how they see culture, land, and community.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-brown/15 border hairline rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 80}>
              <div className="bg-cream-soft h-full p-8">
                <p className="font-mono text-xs text-clay">{`0${i + 1}`}</p>
                <h3 className="mt-3 font-display text-xl text-brown-deep font-semibold">
                  {v.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <LeafDivider from="#F5EBD7" to="#2E7D32" />

      <section className="bg-leaf text-cream-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="eyebrow text-cream-soft/70 mb-3">Who We Welcome</p>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold max-w-2xl">
              Anyone ready to learn on the ground, not just from a screen.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <div className="h-full border border-cream-soft/25 rounded-xl p-6">
                  <p className="font-display text-lg leading-snug">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeafDivider flip from="#F5EBD7" to="#2E7D32" />

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24 text-center">
        <Reveal>
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-brown-deep">
            &ldquo;Reconnect with nature, culture, and community. Discover a way
            of life that inspires respect for people, forests, and the
            environment.&rdquo;
          </p>
        </Reveal>
      </section>
    </>
  );
}
