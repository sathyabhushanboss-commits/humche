"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-brown-deep/10 bg-cream/85 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-[96px] flex items-center justify-between">

        {/* =========================
            LOGO / BRAND
        ========================== */}
        <Link
          href="/"
          className="group flex items-center gap-3 shrink-0"
          aria-label={`${site.name} — home`}
        >
          {/* Logo Glow */}
          <div className="relative flex items-center justify-center">
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-forest/10
                scale-75
                opacity-0
                blur-md
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:opacity-100
              "
            />

            {/* Logo */}
            <div
              className="
                relative
                w-16
                h-16
                md:w-[90px]
                md:h-[90px]
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-2
              "
            >
              <Image
                src="/images/logo.png"
                alt="Hamche Culture"
                fill
                priority
                sizes="90px"
                className="
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          </div>

          {/* Brand Text */}
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className="
                font-display
                font-semibold
                text-[1.08rem]
                tracking-tight
                text-brown-deep
                transition-colors
                duration-300
                group-hover:text-forest
              "
            >
              Hamche Culture
            </span>

            <span
              className="
                font-body
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-forest/80
                mt-1.5
                transition-all
                duration-300
                group-hover:tracking-[0.28em]
              "
            >
              Way Back to Real Life
            </span>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-body text-[0.93rem]">
          {navLinks.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  group
                  relative
                  py-2
                  transition-colors
                  duration-300
                  ${
                    active
                      ? "text-forest font-semibold"
                      : "text-brown-deep/80 hover:text-forest"
                  }
                `}
              >
                {l.label}

                {/* Animated Underline */}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-0.5
                    h-[1.5px]
                    bg-forest
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

                {/* Hover Dot */}
                <span
                  className={`
                    absolute
                    -right-1.5
                    -top-0.5
                    w-1
                    h-1
                    rounded-full
                    bg-forest
                    transition-all
                    duration-300
                    ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* =========================
            DESKTOP CTA
        ========================== */}
        <Link
          href="/contact"
          className="
            hidden
            md:inline-flex
            group
            relative
            items-center
            gap-2
            overflow-hidden
            bg-forest
            text-cream
            px-5
            lg:px-6
            py-3
            rounded-full
            text-sm
            font-semibold
            shadow-sm
            transition-all
            duration-300
            hover:bg-forest-deep
            hover:shadow-lg
            hover:-translate-y-0.5
          "
        >
          <span className="relative z-10">
            Plan a Visit
          </span>

          <ArrowUpRight
            size={16}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />

          {/* Shine Effect */}
          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-white/10
              skew-x-[-20deg]
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          className="
            md:hidden
            relative
            w-11
            h-11
            rounded-full
            border
            border-brown-deep/15
            flex
            items-center
            justify-center
            text-brown-deep
            transition-all
            duration-300
            hover:bg-forest
            hover:text-cream
            hover:border-forest
          "
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="transition-transform duration-300">
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </span>
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`
          md:hidden
          overflow-hidden
          border-t
          border-brown-deep/10
          bg-cream-soft
          transition-all
          duration-500
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="px-5 py-5 flex flex-col gap-1">

          {navLinks.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  py-3.5
                  px-3
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-forest/8 text-forest font-semibold"
                      : "text-brown-deep hover:bg-forest/5 hover:text-forest"
                  }
                `}
              >
                <span>
                  {l.label}
                </span>

                <span
                  className={`
                    transition-all
                    duration-300
                    ${
                      active
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }
                  `}
                >
                  →
                </span>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="
              group
              mt-4
              flex
              items-center
              justify-center
              gap-2
              bg-forest
              text-cream
              px-5
              py-3.5
              rounded-full
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-forest-deep
              hover:shadow-lg
            "
          >
            Plan a Visit

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}