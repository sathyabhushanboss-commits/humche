"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Home as HomeIcon,
  MapPin,
  Music,
  Sprout,
  TreePine,
  Users,
  Utensils,
} from "lucide-react";

/* ================================================================
   HAMCHE CULTURE — HOME PAGE
   Clean replacement for src/app/page.tsx

   Images expected in:
   public/images/
     hero_section.jpeg
     hero_section_2.jpeg
     hero_section_3.jpeg
     hero_section_4.jpeg
     hero_section_5.jpeg
     n1.jpeg
     n2.jpeg
     n3.jpeg
     n4.jpeg
     n5.jpeg
     n6.jpeg
================================================================ */

const heroImages = [
  "/images/hero_section.jpeg",
  "/images/hero_section_2.jpeg",
  "/images/hero_section_3.jpeg",
  "/images/hero_section_4.jpeg",
  "/images/hero_section_5.jpeg",
];

const galleryImages = [
  "/images/n1.jpeg",
  "/images/n2.jpeg",
  "/images/n3.jpeg",
  "/images/n4.jpeg",
  "/images/n5.jpeg",
  "/images/n6.jpeg",
];

const featuredExperiences = [
  {
    icon: Users,
    tag: "Cultural Exchange",
    title: "Sit at the table first.",
    detail:
      "Meals with Siddi families, where history is passed hand to hand — not printed in a guidebook.",
    size: "large",
  },
  {
    icon: TreePine,
    tag: "Forest Walks",
    title: "Follow paths that already know your name.",
    detail:
      "Walk the forest with someone who reads it like a second language, generations deep.",
    size: "medium",
  },
  {
    icon: Sprout,
    tag: "Sustainable Farming",
    title: "Get soil under your nails.",
    detail:
      "Traditional and sustainable agriculture, learned by doing, not by watching.",
    size: "medium",
  },
  {
    icon: Music,
    tag: "Music & Storytelling",
    title: "Songs kept for kinship, not for cameras.",
    detail:
      "Traditional Siddi rhythm, dance and story — performed because it belongs, not because you asked.",
    size: "large",
  },
  {
    icon: Utensils,
    tag: "Traditional Food",
    title: "Taste what the land actually gives.",
    detail:
      "Recipes carried through generations, cooked the way they always have been.",
    size: "small",
  },
  {
    icon: HomeIcon,
    tag: "Village Life",
    title: "A morning that isn't staged for you.",
    detail:
      "The ordinary rhythm of a village day — which is the whole point.",
    size: "small",
  },
  {
    icon: BookOpen,
    tag: "Community Learning",
    title: "Knowledge that travels by voice.",
    detail:
      "Understand how a community teaches, remembers and passes forward what it knows.",
    size: "medium",
  },
  {
    icon: GraduationCap,
    tag: "Educational Visits",
    title: "Built for people who take notes.",
    detail:
      "Structured field visits for students and researchers, grounded in real community life.",
    size: "small",
  },
];

const dayWithHamche = [
  ["ARRIVE", "Leave the usual itinerary behind."],
  ["MEET", "Begin with people, not places."],
  ["WALK", "Follow the forest paths with someone who knows them."],
  ["LEARN", "Sit with knowledge that has never needed a classroom."],
  ["EAT", "Food becomes another way of sharing memory."],
  ["LISTEN", "Stories reveal what photographs cannot."],
  ["SHARE", "Give something back to the conversation — your own."],
  ["RETURN", "Leave with more than photographs."],
];

const curiousMinds = [
  "School & College Students",
  "MSW Students",
  "Agriculture & Environmental Science Students",
  "Researchers & Academicians",
  "NGOs & Community Groups",
  "Cultural & Educational Groups",
];

const marqueeWords = [
  "Siddi Heritage",
  "Forest Living",
  "Sustainable Farming",
  "Cultural Immersion",
  "Native Ecology",
  "Community Connection",
];

const impactStats = [
  ["12", "+", "Years rooted in the community"],
  ["40", "+", "Villages engaged"],
  ["2000", "+", "Visitors welcomed"],
  ["100", "%", "Community-led programming"],
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 800ms ease ${delay}ms, transform 800ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Counter({
  value,
  suffix,
}: {
  value: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const target = Number(value);
    if (!Number.isFinite(target)) {
      setCurrent(0);
      return;
    }

    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;
        const start = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(target * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}

function Marquee({
  tone = "clay",
}: {
  tone?: "clay" | "forest";
}) {
  const background =
    tone === "forest" ? "bg-[#14532D]" : "bg-[#C46A3B]";

  return (
    <div
      className={`overflow-hidden ${background} text-[#F7F0E2] py-4 -rotate-1 shadow-xl`}
    >
      <div className="flex w-max whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[...marqueeWords, ...marqueeWords, ...marqueeWords].map(
          (word, index) => (
            <span
              key={`${word}-${index}`}
              className="mx-6 flex items-center gap-6 font-serif text-lg md:text-xl uppercase tracking-wide"
            >
              {word}
              <span className="text-[#F7F0E2]/50">✦</span>
            </span>
          )
        )}
      </div>
    </div>
  );
}

function StackLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % 3);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const cards = [
    {
      number: "01",
      title: "Experience",
      copy:
        "Come close enough to participate — in food, music, farming, stories and everyday village life.",
      icon: Users,
    },
    {
      number: "02",
      title: "Learn",
      copy:
        "Move beyond observation. Learn the knowledge carried through generations, from agriculture and food to community and craft.",
      icon: BookOpen,
    },
    {
      number: "03",
      title: "Connect with Nature",
      copy:
        "Walk the forest, understand the land, and see how nature shapes everyday life here.",
      icon: TreePine,
    },
  ];

  return (
    <div className="rounded-[28px] bg-[#F0E6D2] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1040px] items-center gap-12 md:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[.16em] text-[#14532D]">
            A THREE-PART VISIT
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#2E2016] md:text-5xl">
            Come for one.
            <br />
            Stay for all three.
          </h2>

          <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-[#2E2016]/75 md:text-lg">
            Every visit moves through the same arc — hands-on participation,
            knowledge passed down, and the forest itself as teacher.
          </p>

          <div className="mt-9 flex gap-3">
            {cards.map((card, index) => (
              <button
                key={card.number}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${card.title}`}
                aria-current={active === index}
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-all ${
                  active === index
                    ? "border-[#14532D] bg-[#14532D] text-[#F7F0E2]"
                    : "border-[#2E2016]/25 text-[#5B4632]"
                }`}
              >
                {card.number}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[330px] sm:h-[350px]">
          {cards.map((card, index) => {
            const depth = (index - active + cards.length) % cards.length;
            const Icon = card.icon;

            const transform =
              depth === 0
                ? "translate3d(0,0,0) scale(1) rotate(0deg)"
                : depth === 1
                  ? "translate3d(24px,16px,-60px) scale(.93) rotate(2deg)"
                  : "translate3d(46px,30px,-120px) scale(.87) rotate(4deg)";

            return (
              <button
                key={card.number}
                type="button"
                onClick={() => setActive(index)}
                className="absolute inset-0 w-full rounded-[24px] text-left"
                style={{
                  transform,
                  zIndex: cards.length - depth,
                  opacity: depth === 0 ? 1 : depth === 1 ? 0.9 : 0.65,
                  transition:
                    "transform 700ms cubic-bezier(.22,1,.36,1), opacity 700ms ease",
                  background:
                    depth === 0
                      ? "linear-gradient(155deg,#14532D,#0B3A1F)"
                      : "#5B4632",
                  boxShadow:
                    depth === 0
                      ? "0 30px 60px -20px rgba(11,58,31,.45)"
                      : "0 14px 30px -14px rgba(46,32,22,.35)",
                }}
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] p-7 md:p-9">
                  <span className="pointer-events-none absolute -right-2 -top-7 font-sans text-[8rem] font-bold leading-none text-white/[.06]">
                    {card.number}
                  </span>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[.12] text-[#F7F0E2]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className="font-mono text-xs tracking-[.14em] text-[#F7F0E2]/55">
                      {card.number} / 03
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-3xl font-semibold text-[#F7F0E2]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[27rem] text-sm leading-relaxed text-[#F7F0E2]/80 md:text-base">
                      {card.copy}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PictureScroll() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % galleryImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[#0B3A1F] py-16 md:py-24">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="relative h-[58vh] min-h-[420px] max-h-[760px]">
          {galleryImages.map((src, index) => {
            const distance =
              (index - active + galleryImages.length) %
              galleryImages.length;

            let transform = "translateX(120%) scale(.82)";
            let opacity = 0;
            let zIndex = 1;

            if (distance === 0) {
              transform = "translateX(0) scale(1)";
              opacity = 1;
              zIndex = 10;
            } else if (distance === 1) {
              transform = "translateX(72%) scale(.86)";
              opacity = 0.45;
              zIndex = 5;
            } else if (distance === galleryImages.length - 1) {
              transform = "translateX(-72%) scale(.86)";
              opacity = 0.45;
              zIndex = 5;
            }

            return (
              <div
                key={src}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity,
                  transform,
                  zIndex,
                  transition:
                    "transform 900ms cubic-bezier(.22,1,.36,1), opacity 700ms ease",
                }}
              >
                <div className="h-full w-full overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-[0_35px_100px_rgba(0,0,0,.35)]">
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {galleryImages.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show gallery image ${index + 1}`}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: active === index ? 34 : 8,
                background:
                  active === index
                    ? "#F7F0E2"
                    : "rgba(247,240,226,.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    document.title =
      "Hamche Culture — Way Back to Real Life | Siddi Cultural Immersion";
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F0E2] text-[#2E2016]">
      {/* ============================================================
          1. HERO — LARGE RESPONSIVE TV DISPLAY
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F0E2]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#14532D]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-24 h-96 w-96 rounded-full bg-[#C46A3B]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1550px] items-center gap-10 px-5 pb-16 pt-12 sm:px-7 sm:pb-20 sm:pt-16 lg:grid-cols-[.62fr_1.38fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[.17em] text-[#14532D]">
              Hamche Culture — Field Notes from the Siddi Heartland
            </p>

            <h1 className="mt-6 font-serif font-semibold leading-[.98] tracking-tight text-[#2E2016]">
              <span
                className="block"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                WAY BACK TO
              </span>
              <span
                className="block italic font-medium text-[#14532D]"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                real life.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#2E2016]/75 sm:text-lg">
              Step beyond the itinerary and into a living culture — where
              stories are shared over food, knowledge travels through
              generations, and the forest is not a backdrop, but part of
              everyday life.
            </p>

            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[.12em] text-[#5B4632]">
              Experience. Learn. Connect with Nature.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#14532D] px-6 py-3.5 font-semibold text-[#F7F0E2] transition hover:bg-[#0B3A1F]"
              >
                Plan Your Visit
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 font-semibold text-[#2E2016]"
              >
                Explore Experiences
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Large TV */}
          <div className="relative w-full">
            <div className="pointer-events-none absolute -inset-5 rounded-[32px] bg-black/10 blur-2xl sm:-inset-7 lg:-inset-9" />

            <div className="relative rounded-[24px] bg-[#151515] p-[6px] shadow-[0_40px_90px_rgba(0,0,0,.30)] sm:rounded-[30px] sm:p-2 lg:rounded-[36px] lg:p-[11px]">
              <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/10 sm:rounded-[30px] lg:rounded-[36px]" />

              <div className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-black sm:rounded-[22px] lg:rounded-[27px]">
                {heroImages.map((src, index) => {
                  const active = heroSlide === index;

                  return (
                    <div
                      key={src}
                      className="absolute inset-0"
                      style={{
                        opacity: active ? 1 : 0,
                        transform: active ? "scale(1)" : "scale(1.08)",
                        transition:
                          "opacity 1000ms ease, transform 5000ms ease",
                        zIndex: active ? 5 : 1,
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        draggable={false}
                        className="h-full w-full select-none object-cover"
                      />
                    </div>
                  );
                })}

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/25 via-transparent to-white/[.04]" />
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[.10] via-transparent to-transparent" />

                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
                  {heroImages.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      aria-label={`Show hero image ${index + 1}`}
                      onClick={() => setHeroSlide(index)}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: heroSlide === index ? 32 : 7,
                        background:
                          heroSlide === index
                            ? "#F7F0E2"
                            : "rgba(247,240,226,.5)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex h-5 items-center justify-center sm:h-6">
                <div className="h-1 w-12 rounded-full bg-white/10 sm:w-16" />
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="h-5 w-24 rounded-b-xl bg-[#202020] shadow-lg sm:h-6 sm:w-32" />
            </div>

            <div className="mx-auto h-2 w-40 rounded-full bg-black/20 blur-sm sm:w-56" />

          </div>
        </div>
      </section>

      <Marquee tone="clay" />

      {/* ============================================================
          2. BRAND STATEMENT
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0B3A1F] text-[#F7F0E2]">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 md:py-28">
          <Reveal>
            <p
              className="font-serif italic leading-[1.15]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Some places are visited.
              <br />
              Some places are lived.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#F7F0E2]/80 sm:text-lg">
              Hamche Culture creates opportunities to enter that second kind
              of place — to meet people, participate in everyday life, listen
              to stories, learn traditional knowledge, and understand the
              relationship between{" "}
              <span className="font-semibold text-[#8CC7A0]">community</span>,{" "}
              <span className="font-semibold text-[#8CC7A0]">land</span> and{" "}
              <span className="font-semibold text-[#8CC7A0]">forest</span>.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[.2em] text-[#F7F0E2]/50">
              <span>People</span>
              <span>Place</span>
              <span>Knowledge</span>
              <span>Nature</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          3. FOUNDER
      ============================================================ */}
      <section className="bg-[#F7F0E2]">
        <div className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[#14532D]">
              Founder &amp; Origin
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#2E2016] md:text-6xl">
              Ramnath Siddi
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#2E2016]/75 sm:text-lg md:text-xl">
              Hamche Culture grew from a desire to build a genuine bridge
              between the Siddi community and people who want to understand
              its living heritage — not as spectators, but as guests. Ramnath
              Siddi built it from inside that community, not outside looking
              in.
            </p>

            <blockquote className="mt-8 max-w-3xl border-l-2 border-[#14532D] pl-5">
              <p className="font-serif text-xl italic leading-relaxed text-[#2E2016] md:text-2xl">
                “Culture stays alive when it is lived, shared and passed
                forward.”
              </p>
              <cite className="mt-3 block font-mono text-xs uppercase tracking-[.12em] text-[#5B4632] not-italic">
                — Ramnath Siddi
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          4. EXPERIENCE / LEARN / CONNECT
      ============================================================ */}
      <section className="border-t border-[#2E2016]/10 bg-[#F0E6D2]">
        <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 md:py-14">
          <Reveal>
            <StackLoop />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          5. FEATURED EXPERIENCES
          Desktop: 3 x 3 card grid
          Mobile: 1 column
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F0E2]">
        {/* Decorative background geometry */}
        <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full border-[32px] border-[#14532D]/[.035]" />
        <div className="pointer-events-none absolute right-[-80px] top-1/3 h-72 w-72 rotate-45 border border-[#C46A3B]/10" />
        <div className="pointer-events-none absolute bottom-[-80px] left-1/3 h-44 w-44 rounded-full border-[18px] border-[#14532D]/[.035]" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <div className="mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#14532D]">
                  Featured Experiences
                </p>

                <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-[#2E2016] sm:text-5xl md:text-6xl">
                  Not a list of services.
                  <br />
                  <span className="italic text-[#14532D]">
                    A life to step into.
                  </span>
                </h2>
              </div>

              <Link
                href="/experiences"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#2E2016]/15 px-5 py-3 text-sm font-semibold text-[#2E2016] transition-all duration-300 hover:border-[#14532D] hover:bg-[#14532D] hover:text-[#F7F0E2]"
              >
                View all experiences
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/* 3 x 3 desktop / 1 column mobile */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredExperiences.map((experience, index) => {
              const Icon = experience.icon;

              const geometricShapes = [
                "rounded-full",
                "rotate-45 rounded-[10px]",
                "rounded-full",
                "rotate-12 rounded-[8px]",
                "rounded-full",
                "rotate-45 rounded-full",
                "rounded-[8px]",
                "rounded-full",
              ];

              const shapeColors = [
                "bg-[#C46A3B]",
                "bg-[#8CC7A0]",
                "bg-[#F7F0E2]",
                "bg-[#C46A3B]",
                "bg-[#8CC7A0]",
                "bg-[#F7F0E2]",
                "bg-[#C46A3B]",
                "bg-[#8CC7A0]",
              ];

              return (
                <Reveal
                  key={experience.title}
                  delay={index * 55}
                  className="h-full"
                >
                  <article className="group relative h-full min-h-[390px] overflow-hidden rounded-[26px] border border-[#2E2016]/10 bg-[#F0E6D2] p-7 shadow-[0_12px_35px_rgba(46,32,22,.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(46,32,22,.13)] sm:min-h-[410px] sm:p-8">
                    {/* Geometric decorations */}
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 ${geometricShapes[index]} ${shapeColors[index]} opacity-20 transition-all duration-700 group-hover:scale-125 group-hover:rotate-[70deg]`}
                    />

                    <div
                      className={`pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 border-[14px] border-[#14532D]/10 ${index % 2 === 0 ? "rounded-full" : "rotate-45 rounded-[8px]"} transition-transform duration-700 group-hover:rotate-[65deg] group-hover:scale-110`}
                    />

                    <div className="pointer-events-none absolute right-7 top-24 grid grid-cols-2 gap-1 opacity-20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    </div>

                    {/* Card number */}
                    <div className="relative z-10 flex items-start justify-between">
                      <span className="font-mono text-[11px] font-bold tracking-[.18em] text-[#C46A3B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2E2016]/10 bg-[#F7F0E2] text-[#14532D] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#14532D] group-hover:text-[#F7F0E2]">
                        <Icon size={19} strokeWidth={1.7} />
                      </span>
                    </div>

                    <div className="relative z-10 mt-16">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[.17em] text-[#14532D]">
                        {experience.tag}
                      </span>

                      <h3 className="mt-3 max-w-sm font-serif text-2xl font-semibold leading-[1.08] text-[#2E2016] sm:text-[1.75rem]">
                        {experience.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-[#2E2016]/65">
                        {experience.detail}
                      </p>
                    </div>

                    <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-[#2E2016]/10 pt-4">
                      <span className="font-mono text-[9px] uppercase tracking-[.15em] text-[#2E2016]/35">
                        Hamche Culture
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2E2016]/10 text-[#2E2016]/45 transition-all duration-300 group-hover:border-[#14532D] group-hover:bg-[#14532D] group-hover:text-[#F7F0E2]">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. A DAY WITH HAMCHE
      ============================================================ */}
      <section className="bg-[#0B3A1F] text-[#F7F0E2]">
        <div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <p className="text-center font-mono text-xs font-semibold uppercase tracking-[.16em] text-[#8CC7A0]">
              A Day With Hamche
            </p>

            <h2 className="mt-3 text-center font-serif text-4xl font-semibold md:text-5xl">
              What a visit actually feels like.
            </h2>
          </Reveal>

          <div className="mt-14 border-l-2 border-[#F7F0E2]/15">
            {dayWithHamche.map(([step, line], index) => (
              <Reveal key={step} delay={index * 45}>
                <div className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[6px] top-1 h-2.5 w-2.5 rounded-full bg-[#8CC7A0]" />

                  <span className="font-mono text-xs uppercase tracking-[.18em] text-[#F7F0E2]/45">
                    {String(index + 1).padStart(2, "0")} — {step}
                  </span>

                  <p className="mt-1.5 max-w-2xl font-serif text-lg leading-snug text-[#F7F0E2] sm:text-xl">
                    {line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. IMPACT STATS
      ============================================================ */}
      <section className="bg-[#2E2016] text-[#F7F0E2]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 px-5 py-14 text-center sm:px-8 md:grid-cols-4">
          {impactStats.map(([value, suffix, label], index) => (
            <Reveal key={label} delay={index * 60}>
              <p className="font-serif text-4xl font-semibold text-[#C46A3B] md:text-5xl">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-sm text-[#F7F0E2]/65">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================
          8. WHO CAN JOIN
      ============================================================ */}
      <section className="bg-[#F7F0E2]">
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[#14532D]">
              Who Can Join
            </p>

            <h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold text-[#2E2016] md:text-5xl">
              Made for curious minds.
            </h2>
          </Reveal>

          <div className="mt-12 grid overflow-hidden rounded-[22px] border border-[#2E2016]/10 bg-[#2E2016]/10 sm:grid-cols-2 lg:grid-cols-3">
            {curiousMinds.map((item, index) => (
              <Reveal key={item} delay={index * 45}>
                <div className="h-full bg-[#F0E6D2] p-7 transition hover:bg-[#14532D]/5">
                  <span className="font-mono text-xs text-[#C46A3B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-serif text-lg leading-snug text-[#2E2016]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          9. N1-N6 PICTURE SCROLL
      ============================================================ */}
      <PictureScroll />

      <Marquee tone="forest" />

      {/* ============================================================
          10. UPCOMING
      ============================================================ */}
      <section className="bg-[#F7F0E2]">
        <div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[#14532D]">
              Upcoming
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold text-[#2E2016] md:text-5xl">
              What’s happening next.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 rounded-[22px] border border-[#2E2016]/10 bg-[#F0E6D2] p-10 text-center md:p-14">
              <CalendarDays
                size={28}
                className="mx-auto text-[#14532D]"
                strokeWidth={1.5}
              />

              <p className="mt-5 font-serif text-xl italic text-[#2E2016]">
                Nothing on the calendar just yet.
              </p>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#2E2016]/60">
                New dates are added as they’re confirmed with the community.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#14532D]"
              >
                Get notified
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          11. FINAL CTA
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#2E2016] text-[#F7F0E2]">
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#14532D]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[800px] px-5 py-20 text-center sm:px-8 md:py-28">
          <Reveal>
            <p className="font-serif text-4xl font-semibold md:text-6xl">
              Come closer.
            </p>

            <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#F7F0E2]/80 md:text-xl">
              Not as a tourist.
              <br />
              As a guest. As a learner.
              <br />
              As someone willing to listen.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#8CC7A0] px-7 py-4 font-semibold text-[#2E2016] transition hover:bg-[#F7F0E2]"
              >
                Plan Your Visit
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 font-semibold text-[#F7F0E2]"
              >
                Explore Experiences
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          FOOTER SPACING
      ============================================================ */}
      <div className="h-2 bg-[#14532D]" />

      {/* ============================================================
          FLOATING WHATSAPP + CALL BUTTONS
      ============================================================ */}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        {/* Call */}
        <a
          href="tel:+917349016519"
          aria-label="Call Hamche Culture"
          className="group relative flex items-center gap-3"
        >
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#2E2016] px-4 py-2 text-xs font-semibold text-[#F7F0E2] shadow-xl sm:block opacity-0 translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Call Us
          </span>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F0E2] text-[#14532D] shadow-[0_10px_35px_rgba(46,32,22,.22)] ring-1 ring-[#14532D]/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#14532D] group-hover:text-[#F7F0E2]">
            <span className="absolute inset-0 rounded-full border border-[#14532D]/20 animate-ping opacity-20" />
            <svg
              viewBox="0 0 24 24"
              className="relative h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917349016519?text=Hello%20Hamche%20Culture%2C%20I%20would%20like%20to%20know%20more%20about%20your%20experiences."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Hamche Culture on WhatsApp"
          className="group relative flex items-center gap-3"
        >
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#2E2016] px-4 py-2 text-xs font-semibold text-[#F7F0E2] shadow-xl sm:block opacity-0 translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            WhatsApp Us
          </span>

          <span className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,.35)] ring-4 ring-[#F7F0E2] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
            <span className="absolute inset-[-5px] rounded-full border-2 border-[#25D366]/40 animate-ping opacity-30" />

            <svg
              viewBox="0 0 24 24"
              className="relative h-8 w-8"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.08 0C5.53 0 .2 5.32.2 11.87c0 2.09.55 4.13 1.59 5.92L.1 24l6.35-1.66a11.86 11.86 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.45-8.41ZM12.09 21.74h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.23C2.2 6.44 6.63 2 12.09 2c2.64 0 5.12 1.03 6.98 2.9a9.84 9.84 0 0 1 2.9 7c0 5.44-4.43 9.84-9.88 9.84Zm5.41-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </span>
        </a>
      </div>
    </main>
  );
}
