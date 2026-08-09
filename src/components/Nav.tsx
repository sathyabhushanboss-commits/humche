"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b hairline">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={`${site.name} — home`}
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full border hairline text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
            <Leaf size={16} strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-semibold text-[1.05rem] tracking-tight text-brown-deep">
              Hamche Culture
            </span>
            <span className="eyebrow text-forest mt-1">Way Back to Real Life</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-[0.94rem]">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`underline-grow ${
                  active ? "text-forest font-semibold" : "text-brown-deep/85 hover:text-forest"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-forest text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest-deep transition-colors"
        >
          Plan a Visit
        </Link>

        <button
          className="md:hidden text-brown-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t hairline bg-cream-soft px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`py-2.5 text-base border-b hairline last:border-none ${
                  active ? "text-forest font-semibold" : "text-brown-deep"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 inline-flex justify-center items-center gap-2 bg-forest text-cream px-5 py-3 rounded-full text-sm font-semibold"
          >
            Plan a Visit
          </Link>
        </nav>
      )}
    </header>
  );
}
