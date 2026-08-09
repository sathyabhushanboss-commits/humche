import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import LeafDivider from "@/components/LeafDivider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet Nagaraj Siddi, Founder, and Ramnath Subba Siddi, Co-Founder & Counseling Psychologist, of Hamche Culture.",
};

const ramnathExperience = [
  {
    org: "St Aloysius Higher Secondary School & College, Bangalore",
    role: "Trainee School Counselor",
    time: "1 year",
  },
  {
    org: "Loyola Children's Homes, Mundagod",
    role: "Trainee School Counselor",
    time: "6 months",
  },
  {
    org: "Maanasa Wellness Centre — Government Observation Home (Juvenile Justice Board), Madivala, Bangalore",
    role: "Trainee Counselor",
    time: "10 months",
  },
  {
    org: "Miracle Foundation, Chennai — De-addiction cum Rehabilitation Centre",
    role: "Counseling Exposure",
    time: "Short term",
  },
  {
    org: "African Indian Alliance, Boston, USA",
    role: "School Facilitator / Counselor (India)",
    time: "1 year 3 months",
  },
];

const otherExperience = [
  { time: "2006–2007", text: "Head Teacher, A.I.T.F School, Haliyal, Karnataka" },
  { time: "2007–2009", text: "School Administration — active principal in school planning and arrangement, A.I.T.F School, Haliyal" },
  { time: "2009", text: "Head Teacher, Spoken English class, Jeevika Trust, Nagarbhavi, Bangalore" },
  { time: "2009", text: "Project Supervisor, Karnataka State, Adventist Development and Relief Agency" },
  { time: "14 Dec 2010", text: "Founder, Siddi Jana Vikas Society" },
  { time: "2011–2013", text: "Education Coordinator, Samuha NGO" },
  { time: "2013–2015", text: "Project Director, Jagruti Siddi Jana Vikas Project" },
  { time: "2011–2018", text: "Part-time Teacher, Health & Wellness (Adolescence) Computer Program" },
  { time: "2012", text: "Teaching experience, Government Degree College, Yellapur" },
  { time: "2014", text: "Speaker, Asian African Diaspora — 8th Pan African Congress, Johannesburg, South Africa" },
  { time: "2016", text: "Guest Speaker, Tanner Conference, Wellesley College, Boston, USA" },
];

const skills = [
  "Problem Solving",
  "Creativity",
  "Counseling",
  "Listening",
  "Team Building",
  "Flexibility",
  "Communication",
  "Positive Attitude",
];

export default function Founders() {
  return (
    <>
      <PageHeader
        eyebrow="The People Behind Hamche Culture"
        title="Founders"
        lede="Two paths — tourism and community storytelling, counseling and social work — brought together around one belief: real connection happens on the ground."
      />

      {/* NAGARAJ */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="flex flex-col items-start gap-4">
              <div className="w-full aspect-square rounded-2xl bg-forest/10 border hairline flex items-center justify-center">
                <span className="font-display text-5xl text-forest font-semibold">NS</span>
              </div>
              <div>
                <p className="font-mono text-xs text-clay">Founder</p>
                <p className="font-display text-lg text-brown-deep font-semibold mt-1">
                  Nagaraj Siddi
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-ink/75">
                <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 underline-grow w-fit">
                  <Phone size={14} /> {site.phonePrimary}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 underline-grow w-fit">
                  <Mail size={14} /> {site.email}
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl text-brown-deep font-semibold">
                Nagaraj Siddi
              </h2>
              <p className="eyebrow text-forest mt-2 mb-6">
                Tourism Professional · Cultural Ambassador · Actor
              </p>
              <p className="text-[1.02rem] leading-[1.85] text-ink/80">
                Nagaraj Siddi is a tourism professional, entrepreneur, cultural
                ambassador, and actor from Karnataka, India. He has extensive
                experience in the travel and hospitality industry as a Tour
                Manager, Branch Manager, and Business Development professional,
                organizing and managing both domestic and international tours.
              </p>
              <p className="mt-5 text-[1.02rem] leading-[1.85] text-ink/80">
                Alongside his tourism career, Nagaraj has acted in the Kannada
                film industry, appearing in several Kannada films and gaining
                valuable experience in front of the camera. He is passionate
                about pursuing acting opportunities while continuing to build
                his career in tourism.
              </p>
              <p className="mt-5 text-[1.02rem] leading-[1.85] text-ink/80">
                He is dedicated to promoting the heritage of the Siddi
                community through cultural exchange, responsible tourism, and
                nature-based experiences — with a mission to connect people
                with culture, local communities, and the natural environment.
                With strong leadership, communication, and customer service
                skills, Nagaraj strives to create memorable travel experiences
                and make a positive impact through both tourism and the arts.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <LeafDivider from="#F5EBD7" to="#5D4037" />

      {/* RAMNATH */}
      <section className="bg-brown-deep text-cream-soft">
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
              <div className="flex flex-col items-start gap-4">
                <div className="w-full aspect-square rounded-2xl bg-cream-soft/10 border border-cream-soft/25 flex items-center justify-center">
                  <span className="font-display text-5xl text-cream-soft font-semibold">RS</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-clay">Co-Founder</p>
                  <p className="font-display text-lg text-cream-soft font-semibold mt-1">
                    Ramnath Subba Siddi
                  </p>
                </div>
                <a href="tel:+917829906988" className="flex items-center gap-2 underline-grow w-fit text-sm text-cream-soft/85">
                  <Phone size={14} /> +91 78299 06988
                </a>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold">
                  Ramnath Subba Siddi
                </h2>
                <p className="eyebrow text-cream-soft/60 mt-2">
                  Counseling Psychologist
                </p>

                <p className="mt-6 text-[1.02rem] leading-[1.85] text-cream-soft/85">
                  Ramnath brings over a decade of grounded social work and
                  counseling experience — from school counseling and juvenile
                  justice settings to community development leadership across
                  Karnataka, Tamil Nadu, and internationally with African
                  Indian Alliance, USA.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14">
              <p className="eyebrow text-cream-soft/50 mb-6">Counseling Experience</p>
              <div className="flex flex-col">
                {ramnathExperience.map((e) => (
                  <div
                    key={e.org}
                    className="grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 py-5 border-b border-cream-soft/15 last:border-none"
                  >
                    <span className="font-mono text-xs text-cream-soft/50">{e.time}</span>
                    <div>
                      <p className="font-display text-lg font-semibold">{e.role}</p>
                      <p className="text-sm text-cream-soft/70 mt-1">{e.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14">
              <p className="eyebrow text-cream-soft/50 mb-6">Community, Education & Leadership Roles</p>
              <div className="flex flex-col">
                {otherExperience.map((e) => (
                  <div
                    key={e.text}
                    className="grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 py-4 border-b border-cream-soft/15 last:border-none"
                  >
                    <span className="font-mono text-xs text-cream-soft/50">{e.time}</span>
                    <p className="text-sm leading-relaxed text-cream-soft/85">{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-10">
              <div>
                <p className="eyebrow text-cream-soft/50 mb-5">Core Skills</p>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-4 py-2 rounded-full border border-cream-soft/25 text-cream-soft/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow text-cream-soft/50 mb-5">Professional Practice</p>
                <ul className="space-y-2.5 text-sm text-cream-soft/85 leading-relaxed list-disc list-inside">
                  <li>Assesses mental condition of clients through observation and dialogue.</li>
                  <li>Provides individualised and group therapy sessions.</li>
                  <li>Tracks client progress with a self-designed, strength-based system.</li>
                  <li>Maintains strict confidentiality and professional integrity.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14">
              <p className="eyebrow text-cream-soft/50 mb-4">Exposure in Computers</p>
              <p className="text-sm text-cream-soft/80">
                MS Windows, MS Word, MS Excel, MS PowerPoint, MS Access, Internet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
