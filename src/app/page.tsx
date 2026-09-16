"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  TreePine,
  Sprout,
  Users,
  Music,
  Utensils,
  Home as HomeIcon,
  BookOpen,
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Stamp from "@/components/Stamp";
import LeafDivider from "@/components/LeafDivider";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ */
/* INLINE FX HELPERS (marquee / parallax / counter)                    */
/* ------------------------------------------------------------------ */

function Marquee({ items, tone = "clay" }: { items: string[]; tone?: "clay" | "forest" }) {
  const bg = tone === "forest" ? "bg-forest" : "bg-clay";
  return (
    <div className={`relative overflow-hidden ${bg} text-cream-soft py-4 -rotate-1 shadow-xl`}>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-display text-lg md:text-xl uppercase tracking-wide">
            {item}
            <span className="text-cream-soft/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ParallaxBlob({ speed = 0.15, className = "" }: { speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerDelta = rect.top - window.innerHeight / 2;
      setOffset(centerDelta * speed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={`pointer-events-none absolute rounded-full blur-3xl will-change-transform ${className}`}
    />
  );
}

function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* STACK LOOP — animated "Experience / Learn / Connect" card stack     */
/* ------------------------------------------------------------------ */

const stackPalette = {
  cream: "#F7F0E2",
  creamSoft: "#F0E6D2",
  brownDeep: "#2E2016",
  brown: "#5B4632",
  forest: "#14532D",
  forestDeep: "#0B3A1F",
  forestLight: "#4F9A6B",
  clay: "#C46A3B",
  ink: "#2E2016",
};

const stackSteps = [
  {
    num: "01",
    title: "Experience",
    copy: "Come close enough to participate — in food, music, farming, stories and everyday village life.",
    Icon: Users,
  },
  {
    num: "02",
    title: "Learn",
    copy: "Move beyond observation. Learn the knowledge carried through generations, from agriculture and food to community and craft.",
    Icon: BookOpen,
  },
  {
    num: "03",
    title: "Connect with Nature",
    copy: "Walk the forest, understand the land, and see how nature shapes everyday life here.",
    Icon: TreePine,
  },
];

const STACK_DURATION = 4200; // ms per slide
const STACK_TOTAL = stackSteps.length;

function StackLoop() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", fn);
    return () => mq.removeEventListener?.("change", fn);
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const advance = useCallback(() => {
    setActive((a) => (a + 1) % STACK_TOTAL);
    setProgress(0);
    startRef.current = null;
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const tick = (t: number) => {
      if (pausedRef.current) {
        startRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const pct = Math.min((elapsed / STACK_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        advance();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [advance, reduceMotion]);

  const goTo = (i: number) => {
    setActive(i);
    setProgress(0);
    startRef.current = null;
  };

  return (
    <div
      style={{ background: stackPalette.creamSoft, fontFamily: "'Georgia','Times New Roman',serif" }}
      className="w-full py-20 px-5 md:px-8 rounded-2xl"
    >
      <div className="mx-auto" style={{ maxWidth: "1040px" }}>
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          {/* ---------------- LEFT: intro copy ---------------- */}
          <div>
            <p
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                letterSpacing: "0.16em",
                color: stackPalette.forest,
                fontSize: "0.72rem",
                fontWeight: 600,
              }}
            >
              A THREE-PART VISIT
            </p>
            <h2
              style={{ color: stackPalette.brownDeep, fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", lineHeight: 1.08 }}
              className="mt-4 font-semibold"
            >
              Come for one. Stay for all three.
            </h2>
            <p style={{ color: stackPalette.ink, opacity: 0.75 }} className="mt-5 text-[1.02rem] leading-relaxed max-w-[30rem]">
              Every visit moves through the same arc — hands-on participation,
              knowledge passed down, and the forest itself as teacher.
            </p>

            {/* nav / index */}
            <div className="mt-10 flex items-center gap-3">
              {stackSteps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => goTo(i)}
                  aria-label={`Show ${s.title}`}
                  aria-current={active === i}
                  className="relative flex items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    width: active === i ? "2.5rem" : "2.1rem",
                    height: active === i ? "2.5rem" : "2.1rem",
                    border: `1px solid ${active === i ? stackPalette.forest : "rgba(46,32,22,0.25)"}`,
                    background: active === i ? stackPalette.forest : "transparent",
                    color: active === i ? stackPalette.cream : stackPalette.brown,
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: "0.72rem",
                  }}
                >
                  {s.num}
                  {active === i && !reduceMotion && (
                    <svg
                      viewBox="0 0 44 44"
                      className="absolute -inset-[3px] pointer-events-none"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <circle
                        cx="22"
                        cy="22"
                        r="20"
                        fill="none"
                        stroke={stackPalette.clay}
                        strokeWidth="1.5"
                        strokeDasharray={`${2 * Math.PI * 20}`}
                        strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
                        style={{ transition: "stroke-dashoffset 60ms linear" }}
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ---------------- RIGHT: the stack ---------------- */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative"
            style={{ height: "340px", perspective: "1400px" }}
          >
            {stackSteps.map((s, i) => {
              const depth = (i - active + STACK_TOTAL) % STACK_TOTAL;
              const isFront = depth === 0;
              const { Icon } = s;

              const transforms = [
                "translate3d(0px, 0px, 0px) scale(1) rotate(0deg)",
                "translate3d(26px, 16px, -60px) scale(0.93) rotate(2.2deg)",
                "translate3d(48px, 30px, -120px) scale(0.87) rotate(4deg)",
              ][depth];

              return (
                <div
                  key={s.num}
                  onClick={() => !isFront && goTo(i)}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    transform: transforms,
                    zIndex: STACK_TOTAL - depth,
                    cursor: isFront ? "default" : "pointer",
                    transition: reduceMotion
                      ? "none"
                      : "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms ease, box-shadow 700ms ease",
                    background:
                      depth === 0
                        ? `linear-gradient(155deg, ${stackPalette.forest} 0%, ${stackPalette.forestDeep} 100%)`
                        : stackPalette.brown,
                    opacity: depth === 0 ? 1 : depth === 1 ? 0.9 : 0.65,
                    boxShadow:
                      depth === 0
                        ? "0 30px 60px -20px rgba(11,58,31,0.45), 0 2px 0 rgba(255,255,255,0.06) inset"
                        : "0 14px 30px -14px rgba(46,32,22,0.35)",
                    border: `1px solid ${depth === 0 ? "rgba(247,240,226,0.14)" : "rgba(247,240,226,0.08)"}`,
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col justify-between">
                    {/* faint background numeral */}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        right: "0.4rem",
                        top: "-1.4rem",
                        fontSize: "9rem",
                        fontWeight: 700,
                        color: "rgba(247,240,226,0.06)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {s.num}
                    </span>

                    <div className="relative z-10 flex items-center justify-between">
                      <span
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: "2.6rem",
                          height: "2.6rem",
                          background: "rgba(247,240,226,0.12)",
                          color: stackPalette.cream,
                        }}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <span
                        style={{
                          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                          fontSize: "0.7rem",
                          letterSpacing: "0.14em",
                          color: "rgba(247,240,226,0.55)",
                        }}
                      >
                        {s.num} / 0{STACK_TOTAL}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 style={{ color: stackPalette.cream, fontSize: "1.7rem" }} className="font-semibold leading-snug">
                        {s.title}
                      </h3>
                      <p
                        style={{ color: "rgba(247,240,226,0.8)" }}
                        className="mt-3 text-[0.95rem] leading-relaxed max-w-[26rem]"
                      >
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* LOCAL DATA                                                          */
/* ------------------------------------------------------------------ */

const featuredExperiences = [
  {
    icon: Users,
    tag: "Cultural Exchange",
    title: "Sit at the table first.",
    detail: "Meals with Siddi families, where history is passed hand to hand — not printed in a guidebook.",
    size: "lg",
  },
  {
    icon: TreePine,
    tag: "Forest Walks",
    title: "Follow paths that already know your name.",
    detail: "Walk the forest with someone who reads it like a second language, generations deep.",
    size: "md",
  },
  {
    icon: Sprout,
    tag: "Sustainable Farming",
    title: "Get soil under your nails.",
    detail: "Traditional and sustainable agriculture, learned by doing, not by watching.",
    size: "md",
  },
  {
    icon: Music,
    tag: "Music & Storytelling",
    title: "Songs kept for kinship, not for cameras.",
    detail: "Traditional Siddi rhythm, dance and story — performed because it belongs, not because you asked.",
    size: "lg",
  },
  {
    icon: Utensils,
    tag: "Traditional Food",
    title: "Taste what the land actually gives.",
    detail: "Recipes carried through generations, cooked the way they always have been.",
    size: "sm",
  },
  {
    icon: HomeIcon,
    tag: "Village Life",
    title: "A morning that isn't staged for you.",
    detail: "The ordinary rhythm of a village day — which is the whole point.",
    size: "sm",
  },
  {
    icon: BookOpen,
    tag: "Community Learning",
    title: "Knowledge that travels by voice.",
    detail: "Understand how a community teaches, remembers and passes forward what it knows.",
    size: "md",
  },
  {
    icon: GraduationCap,
    tag: "Educational Visits",
    title: "Built for people who take notes.",
    detail: "Structured field visits for students and researchers, grounded in real community life.",
    size: "sm",
  },
];

const dayWithHamche = [
  { step: "ARRIVE", line: "Leave the usual itinerary behind." },
  { step: "MEET", line: "Begin with people, not places." },
  { step: "WALK", line: "Follow the forest paths with someone who knows them." },
  { step: "LEARN", line: "Sit with knowledge that has never needed a classroom." },
  { step: "EAT", line: "Food becomes another way of sharing memory." },
  { step: "LISTEN", line: "Stories reveal what photographs cannot." },
  { step: "SHARE", line: "Give something back to the conversation — your own." },
  { step: "RETURN", line: "Leave with more than photographs." },
];

const curiousMinds = [
  { label: "School & College Students" },
  { label: "MSW Students" },
  { label: "Agriculture & Environmental Science Students" },
  { label: "Researchers & Academicians" },
  { label: "NGOs & Community Groups" },
  { label: "Cultural & Educational Groups" },
];

const galleryItems = [
  { caption: "Morning on the forest trail", size: "lg" },
  { caption: "Preparing the day's meal", size: "sm" },
  { caption: "Hands in the soil", size: "sm" },
  { caption: "An evening of music", size: "md" },
  { caption: "Listening to the elders", size: "sm" },
  { caption: "Field notes, taken slowly", size: "sm" },
];

const impactStats = [
  { to: 12, suffix: "+", label: "Years rooted in the community" },
  { to: 40, suffix: "+", label: "Villages engaged" },
  { to: 2000, suffix: "+", label: "Visitors welcomed" },
  { to: 100, suffix: "%", label: "Community-led programming" },
];

const marqueeWords = [
  "Siddi Heritage",
  "Forest Living",
  "Sustainable Farming",
  "Cultural Immersion",
  "Native Ecology",
  "Community Connection",
];

// No confirmed events yet — component renders a proper empty state
// rather than inventing dates. Add real events here as they're confirmed:
// { date: "12 Dec 2026", name: "...", location: "...", description: "..." }
const upcomingEvents: Array<{
  date: string;
  name: string;
  location: string;
  description: string;
}> = [];

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  useEffect(() => {
    document.title = "Hamche Culture — Way Back to Real Life | Siddi Cultural Immersion";
  }, []);

  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO                                                       */}
      {/* ============================================================ */}
      <section className="ruled relative overflow-hidden bg-cream">
        <ParallaxBlob speed={0.12} className="h-72 w-72 bg-forest/15 -top-10 -left-10" />
        <ParallaxBlob speed={-0.08} className="h-96 w-96 bg-clay/10 top-20 right-0" />
        <div
          className="relative mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
          style={{ maxWidth: "1180px" }}
        >
          <div>
            <p className="eyebrow text-forest mb-6">
              Hamche Culture — Field Notes from the Siddi Heartland
            </p>
            <h1 className="font-display font-semibold text-brown-deep tracking-tight leading-[1.02]">
              <span className="block" style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}>
                WAY BACK TO
              </span>
              <span className="block italic text-forest font-medium" style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}>
                real life.
              </span>
            </h1>
            <p className="mt-7 text-[1.05rem] leading-relaxed text-ink/80" style={{ maxWidth: "34rem" }}>
              Step beyond the itinerary and into a living culture — where stories
              are shared over food, knowledge travels through generations, and
              the forest is not a backdrop, but part of everyday life.
            </p>
            <p className="mt-5 eyebrow text-brown font-semibold tracking-wide">
              Experience. Learn. Connect with Nature.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-forest-deep transition-colors"
              >
                Plan Your Visit <ArrowRight size={17} />
              </Link>
              <Link href="/experiences" className="inline-flex items-center gap-2 text-brown-deep font-semibold underline-grow">
                Explore Experiences <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block" style={{ height: "460px" }}>
            <div
              className="absolute rounded-2xl bg-forest-deep/90 overflow-hidden shadow-xl"
              style={{ top: 0, left: "10%", width: "78%", height: "72%" }}
            >
              <div className="w-full h-full flex items-end p-5">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-cream-soft/70">
                  Field photograph — village, morning
                </span>
              </div>
            </div>
            <div
              className="absolute rounded-2xl bg-clay/80 overflow-hidden shadow-lg border-4 border-cream"
              style={{ bottom: 0, right: "6%", width: "48%", height: "42%" }}
            >
              <div className="w-full h-full flex items-end p-4">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-cream/80">
                  Forest trail
                </span>
              </div>
            </div>
            <div className="absolute -top-2 left-0">
              <Stamp size={104} tone="forest" />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeWords} tone="clay" />

      <LeafDivider from="#F7F0E2" to="#14532D" />

      {/* ============================================================ */}
      {/* 2. BRAND STATEMENT                                            */}
      {/* ============================================================ */}
      <section className="relative bg-forest-deep text-cream-soft overflow-hidden">
        <ParallaxBlob speed={0.1} className="h-64 w-64 bg-cream-soft/10 top-0 right-1/2 translate-x-1/2" />
        <div className="relative mx-auto px-5 md:px-8 py-20 md:py-28 text-center" style={{ maxWidth: "880px" }}>
          <Reveal>
            <p className="font-display italic leading-[1.15]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Some places are visited.
              <br />
              Some places are lived.
            </p>
            <p className="mt-8 text-[1.05rem] leading-relaxed text-cream-soft/85">
              Hamche Culture creates opportunities to enter that second kind of
              place — to meet people, participate in everyday life, listen to
              stories, learn traditional knowledge, and understand the
              relationship between{" "}
              <span className="text-forest-light font-semibold">community</span>,{" "}
              <span className="text-forest-light font-semibold">land</span> and{" "}
              <span className="text-forest-light font-semibold">forest</span>.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-xs tracking-[0.2em] uppercase text-cream-soft/60">
              <span>People</span>
              <span>Place</span>
              <span>Knowledge</span>
              <span>Nature</span>
            </div>
          </Reveal>
        </div>
      </section>

      <LeafDivider flip from="#F7F0E2" to="#14532D" />

      {/* ============================================================ */}
      {/* 3. FOUNDER / ORIGIN                                           */}
      {/* ============================================================ */}
      <section className="bg-cream">
        <div
          className="mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center"
          style={{ maxWidth: "1100px" }}
        >
          <Reveal>
            <div className="rounded-2xl bg-brown/90 overflow-hidden relative shadow-lg" style={{ aspectRatio: "4 / 5" }}>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-cream-soft/70">
                  Portrait — Ramnath Siddi
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-forest mb-3">Founder &amp; Origin</p>
            <h2 className="font-display font-semibold text-brown-deep" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Ramnath Siddi
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/80" style={{ maxWidth: "34rem" }}>
              Hamche Culture grew from a desire to build a genuine bridge
              between the Siddi community and people who want to understand
              its living heritage — not as spectators, but as guests.
              Ramnath Siddi built it from inside that community, not outside
              looking in.
            </p>
            <blockquote className="mt-7 border-l-2 border-forest pl-5">
              <p className="font-display italic text-lg text-brown-deep leading-relaxed">
                &ldquo;Culture stays alive when it is lived, shared and passed forward.&rdquo;
              </p>
              <cite className="mt-3 block eyebrow text-brown not-italic">— Ramnath Siddi</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXPERIENCE / LEARN / CONNECT — interactive stack loop      */}
      {/* ============================================================ */}
      <section className="bg-cream-soft border-t hairline">
        <div className="mx-auto px-5 md:px-8" style={{ maxWidth: "1180px" }}>
          <Reveal>
            <StackLoop />
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FEATURED EXPERIENCES — asymmetric editorial grid           */}
      {/* ============================================================ */}
      <section className="bg-cream">
        <div className="mx-auto px-5 md:px-8 py-20 md:py-28" style={{ maxWidth: "1180px" }}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow text-forest mb-3">Featured Experiences</p>
                <h2
                  className="font-display font-semibold text-brown-deep"
                  style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", maxWidth: "32rem" }}
                >
                  Not a list of services. A life to step into.
                </h2>
              </div>
              <Link href="/experiences" className="inline-flex items-center gap-2 font-semibold text-forest underline-grow shrink-0">
                View all experiences <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
            {featuredExperiences.map((exp, i) => {
              const spanClass =
                exp.size === "lg" ? "lg:col-span-2 lg:row-span-2" : exp.size === "md" ? "lg:row-span-2" : "";
              return (
                <Reveal key={exp.title} delay={i * 60}>
                  <div
                    className={`group relative h-full rounded-2xl overflow-hidden border hairline bg-brown-deep/95 hover:-translate-y-1 transition-all duration-300 ${spanClass}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-deep via-brown-deep/40 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cream/15 text-cream">
                          <exp.icon size={17} strokeWidth={1.8} />
                        </span>
                        <ArrowUpRight
                          size={17}
                          className="text-cream/60 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </div>
                      <div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-cream-soft/60">
                          {exp.tag}
                        </span>
                        <h3 className="mt-2 font-display text-lg text-cream font-semibold leading-snug">{exp.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-cream-soft/75">{exp.detail}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <LeafDivider from="#F7F0E2" to="#14532D" />

      {/* ============================================================ */}
      {/* 6. A DAY WITH HAMCHE                                          */}
      {/* ============================================================ */}
      <section className="bg-forest-deep text-cream-soft">
        <div className="mx-auto px-5 md:px-8 py-20 md:py-28" style={{ maxWidth: "1000px" }}>
          <Reveal>
            <p className="eyebrow text-forest-light mb-3 text-center">A Day With Hamche</p>
            <h2 className="font-display font-semibold text-center" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              What a visit actually feels like.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-0" style={{ borderLeft: "2px solid rgba(247,240,226,0.2)" }}>
            {dayWithHamche.map((d, i) => (
              <Reveal key={d.step} delay={i * 60}>
                <div className="relative pl-8 pb-10 last:pb-0" style={{ marginLeft: "-2px" }}>
                  <span
                    className="absolute rounded-full bg-forest-light"
                    style={{ left: "-6px", top: "4px", width: "10px", height: "10px" }}
                  />
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream-soft/50">
                    {String(i + 1).padStart(2, "0")} — {d.step}
                  </span>
                  <p className="mt-1.5 font-display text-lg md:text-xl text-cream-soft leading-snug">{d.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* IMPACT STATS STRIP                                            */}
      {/* ============================================================ */}
      <section className="bg-brown-deep text-cream-soft">
        <div className="mx-auto px-5 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" style={{ maxWidth: "1100px" }}>
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl md:text-5xl font-semibold text-clay">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-cream-soft/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <LeafDivider flip from="#F7F0E2" to="#14532D" />

      {/* ============================================================ */}
      {/* 7. WHO CAN JOIN                                               */}
      {/* ============================================================ */}
      <section className="bg-cream">
        <div className="mx-auto px-5 md:px-8 py-20 md:py-28" style={{ maxWidth: "1100px" }}>
          <Reveal>
            <p className="eyebrow text-forest mb-3">Who Can Join</p>
            <h2 className="font-display font-semibold text-brown-deep max-w-2xl" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Made for curious minds.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brown/15 border hairline rounded-2xl overflow-hidden">
            {curiousMinds.map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <div className="group bg-cream-soft h-full p-7 transition-all duration-300 hover:bg-forest/5">
                  <span className="font-mono text-xs text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-display text-lg text-brown-deep leading-snug">{a.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. GALLERY                                                    */}
      {/* ============================================================ */}
      <section className="bg-cream-soft border-t hairline">
        <div className="mx-auto px-5 md:px-8 py-20 md:py-28" style={{ maxWidth: "1180px" }}>
          <Reveal>
            <p className="eyebrow text-forest mb-3">Gallery</p>
            <h2 className="font-display font-semibold text-brown-deep max-w-xl" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Moments from the field.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
            {galleryItems.map((g, i) => {
              const spanClass = g.size === "lg" ? "col-span-2 row-span-2" : g.size === "md" ? "row-span-2" : "";
              return (
                <Reveal key={g.caption} delay={i * 50}>
                  <div className={`group relative h-full rounded-xl overflow-hidden bg-brown/80 ${spanClass}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/90 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-cream-soft/75">
                        {g.caption}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee items={marqueeWords} tone="forest" />

      {/* ============================================================ */}
      {/* 9. UPCOMING EVENTS                                            */}
      {/* ============================================================ */}
      <section className="bg-cream border-t hairline">
        <div className="mx-auto px-5 md:px-8 py-20 md:py-28" style={{ maxWidth: "1000px" }}>
          <Reveal>
            <p className="eyebrow text-forest mb-3">Upcoming</p>
            <h2 className="font-display font-semibold text-brown-deep max-w-xl" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              What&rsquo;s happening next.
            </h2>
          </Reveal>

          {upcomingEvents.length > 0 ? (
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {upcomingEvents.map((e) => (
                <div key={e.name} className="border hairline rounded-2xl p-7 bg-cream-soft">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-clay">
                    <CalendarDays size={14} /> {e.date}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-brown-deep font-semibold">{e.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink/60">
                    <MapPin size={13} /> {e.location}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.description}</p>
                  <Link href="/events" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest underline-grow">
                    View Event <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 border hairline rounded-2xl p-10 md:p-14 text-center bg-cream-soft">
              <p className="font-display italic text-lg text-brown-deep">Nothing on the calendar just yet.</p>
              <p className="mt-2 text-sm text-ink/60">
                New dates are added as they&rsquo;re confirmed with the community.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest underline-grow">
                Get notified <ArrowUpRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FINAL CTA                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-brown-deep text-cream-soft overflow-hidden">
        <ParallaxBlob speed={0.15} className="h-80 w-80 bg-forest-light/10 -bottom-20 -right-10" />
        <div className="relative mx-auto px-5 md:px-8 py-20 md:py-28 text-center" style={{ maxWidth: "800px" }}>
          <Reveal>
            <p className="font-display font-semibold" style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
              Come closer.
            </p>
            <p className="mt-6 font-display italic text-lg md:text-xl leading-relaxed text-cream-soft/85">
              Not as a tourist.
              <br />
              As a guest. As a learner.
              <br />
              As someone willing to listen.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest-light text-brown-deep px-7 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
              >
                Plan Your Visit <ArrowRight size={17} />
              </Link>
              <Link href="/experiences" className="inline-flex items-center gap-2 text-cream-soft font-semibold underline-grow">
                Explore Experiences <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}