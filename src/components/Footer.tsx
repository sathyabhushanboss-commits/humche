
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import Stamp from "./Stamp";
import { FacebookGlyph } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white text-[#173B24]">

      {/* =========================================
          MAIN FOOTER
      ========================================== */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr_auto]">

          {/* =========================================
              BRAND
          ========================================== */}
          <div>

            <Link
              href="/"
              className="group inline-flex items-center gap-5"
            >

              {/* LARGE LOGO */}
              <div
                className="
                  relative
                  w-[95px]
                  h-[95px]
                  md:w-[120px]
                  md:h-[120px]
                  shrink-0
                  rounded-full
                  overflow-hidden
                  bg-[#F7F2E7]
                  border
                  border-[#173B24]/10
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:rotate-2
                  group-hover:shadow-lg
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Hamche Culture"
                  fill
                  priority
                  sizes="120px"
                  className="
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* BRAND NAME */}
              <div className="flex flex-col">

                <span
                  className="
                    font-display
                    font-semibold
                    text-xl
                    md:text-2xl
                    tracking-tight
                    text-[#173B24]
                    transition-colors
                    duration-300
                    group-hover:text-[#315C3D]
                  "
                >
                  Hamche Culture
                </span>

                <span
                  className="
                    mt-2
                    font-body
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#315C3D]
                  "
                >
                  Way Back to Real Life
                </span>

              </div>

            </Link>


            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-[#173B24]/70
                text-sm
                leading-relaxed
                max-w-sm
              "
            >
              Immersive cultural and educational experiences connecting
              people with the heritage of the Siddi community, nature,
              and sustainable living.
            </p>


            {/* LOCATION */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-xs
                text-[#173B24]/60
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#315C3D]
                "
              />

              Karnataka, India
            </div>

          </div>


          {/* =========================================
              EXPLORE
          ========================================== */}
          <div>

            <p
              className="
                eyebrow
                text-[#173B24]
                mb-5
                font-semibold
              "
            >
              Explore
            </p>

            <ul className="flex flex-col gap-3">

              {navLinks.map((l) => (
                <li key={l.href}>

                  <Link
                    href={l.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-[#173B24]/75
                      transition-all
                      duration-300
                      hover:text-[#315C3D]
                    "
                  >

                    <span>
                      {l.label}
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        -translate-x-1
                        translate-y-1
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                      "
                    />

                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =========================================
              REACH US
          ========================================== */}
          <div>

            <p
              className="
                eyebrow
                text-[#173B24]
                mb-5
                font-semibold
              "
            >
              Reach Us
            </p>

            <ul className="flex flex-col gap-4 text-sm">

              {/* EMAIL */}
              <li>

                <a
                  href={`mailto:${site.email}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-[#173B24]/75
                    transition-colors
                    duration-300
                    hover:text-[#315C3D]
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      shrink-0
                      rounded-full
                      bg-[#F7F2E7]
                      border
                      border-[#173B24]/10
                      transition-all
                      duration-300
                      group-hover:border-[#315C3D]/30
                      group-hover:bg-[#EAF2E7]
                    "
                  >
                    <Mail size={14} />
                  </span>

                  <span className="pt-1 break-all">
                    {site.email}
                  </span>

                </a>

              </li>


              {/* PHONE */}
              <li>

                <a
                  href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-[#173B24]/75
                    transition-colors
                    duration-300
                    hover:text-[#315C3D]
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      shrink-0
                      rounded-full
                      bg-[#F7F2E7]
                      border
                      border-[#173B24]/10
                      transition-all
                      duration-300
                      group-hover:border-[#315C3D]/30
                      group-hover:bg-[#EAF2E7]
                    "
                  >
                    <Phone size={14} />
                  </span>

                  <span className="pt-1">
                    {site.phonePrimary}
                  </span>

                </a>

              </li>


              {/* FACEBOOK */}
              <li>

                <a
                  href="#"
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-[#173B24]/75
                    transition-colors
                    duration-300
                    hover:text-[#315C3D]
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      shrink-0
                      rounded-full
                      bg-[#F7F2E7]
                      border
                      border-[#173B24]/10
                      transition-all
                      duration-300
                      group-hover:border-[#315C3D]/30
                      group-hover:bg-[#EAF2E7]
                    "
                  >
                    <FacebookGlyph size={14} />
                  </span>

                  <span className="pt-1">
                    {site.facebook}
                  </span>

                </a>

              </li>

            </ul>

          </div>


          {/* =========================================
              STAMP
          ========================================== */}
          <div className="flex md:justify-end items-start">

            <div
              className="
                opacity-70
                transition-all
                duration-500
                hover:opacity-100
                hover:rotate-2
                hover:scale-105
              "
            >
              <Stamp
                size={110}
                tone="forest"
              />
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================== */}
      <div className="border-t border-[#173B24]/15">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-8
            py-5
            flex
            flex-col
            md:flex-row
            gap-4
            items-center
            justify-between
            text-xs
          "
        >

          {/* COPYRIGHT */}
          <p className="text-[#173B24]/60 font-mono">
            © {new Date().getFullYear()} Hamche Culture.
            All rights reserved.
          </p>


          {/* SATHYA ENTERPRISES */}
          <p className="text-[#173B24]/65 text-center">

            Designed, Developed & Maintained by{" "}

            <span
              className="
                font-semibold
                text-[#173B24]
                transition-colors
                duration-300
                hover:text-[#315C3D]
              "
            >
              Sathya Enterprises
            </span>

          </p>


          {/* LOCATION */}
          <p className="text-[#173B24]/60 font-mono">
            Karnataka, India
          </p>

        </div>

      </div>

    </footer>
  );
}
