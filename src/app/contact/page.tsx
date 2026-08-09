import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { FacebookGlyph } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hamche Culture to plan a cultural or educational visit with the Siddi community in Karnataka, India.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's plan your visit."
        lede="Tell us about your group — students, researchers, or travellers — and we'll shape a visit around your time and interests."
      />

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <Reveal>
            <div className="flex flex-col gap-10">
              <div>
                <p className="eyebrow text-forest mb-4">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 font-display text-xl text-brown-deep underline-grow w-fit break-all"
                >
                  <Mail size={19} /> {site.email}
                </a>
              </div>

              <div>
                <p className="eyebrow text-forest mb-4">Phone</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-display text-xl text-brown-deep underline-grow w-fit"
                  >
                    <Phone size={19} /> {site.phonePrimary}
                  </a>
                  <p className="text-xs text-ink/50 ml-8 -mt-2">Nagaraj Siddi, Founder</p>

                  <a
                    href="tel:+917829906988"
                    className="flex items-center gap-3 font-display text-xl text-brown-deep underline-grow w-fit mt-2"
                  >
                    <Phone size={19} /> +91 78299 06988
                  </a>
                  <p className="text-xs text-ink/50 ml-8 -mt-2">
                    Ramnath Subba Siddi, Co-Founder
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow text-forest mb-4">Facebook</p>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-display text-xl text-brown-deep underline-grow w-fit"
                >
                  <FacebookGlyph size={19} /> {site.facebook}
                </a>
              </div>

              <div>
                <p className="eyebrow text-forest mb-4">Location</p>
                <p className="flex items-center gap-3 font-display text-xl text-brown-deep">
                  <MapPin size={19} /> Karnataka, India
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-cream-soft border hairline rounded-2xl p-8 md:p-10">
              <p className="eyebrow text-forest mb-2">Visit Enquiry</p>
              <h2 className="font-display text-2xl text-brown-deep font-semibold mb-8">
                Send us your details
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
