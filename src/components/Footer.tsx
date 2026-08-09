import Link from "next/link";
import { Mail, Phone, Leaf } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import Stamp from "./Stamp";
import { FacebookGlyph } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream-soft ruled">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-cream-soft/30 text-cream-soft">
              <Leaf size={16} />
            </span>
            <span className="font-display font-semibold text-lg">Hamche Culture</span>
          </div>
          <p className="text-cream-soft/70 text-sm leading-relaxed max-w-xs">
            Immersive cultural and educational experiences connecting people with the
            heritage of the Siddi community, nature, and sustainable living.
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream-soft/50 mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-soft/85 hover:text-white underline-grow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream-soft/50 mb-4">Reach Us</p>
          <ul className="flex flex-col gap-3 text-sm text-cream-soft/85">
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${site.email}`} className="underline-grow break-all">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="underline-grow">
                {site.phonePrimary}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FacebookGlyph size={16} className="mt-0.5 shrink-0" />
              <span>{site.facebook}</span>
            </li>
          </ul>
        </div>

        <div className="flex md:justify-end items-start">
          <Stamp size={104} tone="cream" />
        </div>
      </div>

      <div className="border-t border-cream-soft/15">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-cream-soft/55 font-mono">
          <p>© {new Date().getFullYear()} Hamche Culture. All rights reserved.</p>
          <p>Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
