import type { Metadata } from "next";
import { Footprints, BookOpen, TreePine } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import LeafDivider from "@/components/LeafDivider";
import { audiences } from "@/lib/site";
import styles from "./values.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hamche Culture connects people with the heritage of the Siddi Community, nature, and sustainable living through immersive cultural and educational experiences.",
};

const GOLD = "#B08D57";

const values = [
  {
    numeral: "I",
    label: "Experience",
    text: "We don't lecture — we walk, sit, cook, and listen alongside the community and the forest.",
    icon: Footprints,
  },
  {
    numeral: "II",
    label: "Learn",
    text: "Every visit is built around real knowledge: native ecology, sustainable farming, and living culture.",
    icon: BookOpen,
  },
  {
    numeral: "III",
    label: "Connect with Nature",
    text: "The forest is not a backdrop. It's a teacher, and we move through it on its terms.",
    icon: TreePine,
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

        <Reveal delay={80}>
          <p className="mt-20 mb-10 font-display italic text-lg text-brown-deep/70 flex items-center gap-3">
            <span className={styles.kickerDot} />
            The Hamche way
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.label} delay={i * 120}>
                <div
                  className={`${styles.valueCard} group relative h-full bg-cream-soft overflow-hidden`}
                  style={{ padding: "3rem 2.25rem 2.75rem" }}
                >
                  <span
                    className={`${styles.ghostNumeral} font-display`}
                    style={{ animationDelay: `${i * 0.9}s` }}
                  >
                    {v.numeral}
                  </span>

                  <span className={styles.particle} style={{ left: 20, animationDelay: `${i * 0.7}s` }} />
                  <span className={styles.particle} style={{ left: 42, animationDelay: `${i * 0.7 + 1.4}s` }} />
                  <span className={styles.particle} style={{ left: 64, animationDelay: `${i * 0.7 + 2.6}s` }} />

                  <span
                    className={`${styles.bracket} ${styles.bracketTl}`}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <span
                    className={`${styles.bracket} ${styles.bracketBr}`}
                    style={{ animationDelay: `${i * 0.4 + 1.5}s` }}
                  />

                  <div
                    className={styles.iconWrap}
                    style={{ width: 46, height: 46, animationDelay: `${i * 0.5}s` }}
                  >
                    <span className={`${styles.ring} ${styles.ringOuter}`} style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className={`${styles.ring} ${styles.ringInner}`} style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className={styles.iconCore} style={{ animationDelay: `${i * 0.5}s` }}>
                      <Icon size={18} strokeWidth={1.25} style={{ color: GOLD }} />
                    </span>
                  </div>

                  <h3 className="relative mt-8 font-display text-2xl text-brown-deep font-semibold">
                    {v.label}
                  </h3>

                  <span className={styles.goldRule} style={{ animationDelay: `${i * 0.4}s` }}>
                    <span className={styles.goldRuleShine} />
                  </span>

                  <p className="relative text-[0.95rem] leading-[1.8] text-ink/65">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
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