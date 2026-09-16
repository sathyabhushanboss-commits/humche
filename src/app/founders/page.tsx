import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import LeafDivider from "@/components/LeafDivider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet Ramnath Subba Siddi, Founder & Counseling Psychologist, and Nagaraj Siddi, Manager, of Hamche Culture.",
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

      {/* RAMNATH */}
      <section className="bg-brown-deep text-cream-soft">
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
              <div className="flex flex-col items-start gap-4">
                <div
                  className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(245,235,215,0.10), transparent 60%), rgba(245,235,215,0.05)",
                    border: "1px solid rgba(245,235,215,0.2)",
                  }}
                >
                  <span
                    className="font-display text-5xl text-cream-soft font-semibold"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    RS
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -18,
                      right: -18,
                      width: 90,
                      height: 90,
                      borderRadius: "9999px",
                      border: "1px solid rgba(245,235,215,0.15)",
                    }}
                  />
                </div>
                <div>
                  <p className="font-mono text-xs text-clay">Founder</p>
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
                <p className="mt-2 text-[1.05rem] font-display italic text-cream-soft/70">
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
              <p className="text-sm font-semibold text-cream-soft/60 mb-8">Counseling experience</p>
              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 5,
                    top: 6,
                    bottom: 6,
                    width: 1,
                    background: "rgba(245,235,215,0.18)",
                  }}
                />
                {ramnathExperience.map((e) => (
                  <div key={e.org} style={{ position: "relative", paddingBottom: 32 }}>
                    <div
                      style={{
                        position: "absolute",
                        left: -28,
                        top: 6,
                        width: 9,
                        height: 9,
                        borderRadius: "9999px",
                        background: "#F5EBD7",
                      }}
                    />
                    <span className="font-mono text-xs text-cream-soft/50">{e.time}</span>
                    <p className="font-display text-lg font-semibold mt-1">{e.role}</p>
                    <p className="text-sm text-cream-soft/70 mt-1">{e.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-6">
              <p className="text-sm font-semibold text-cream-soft/60 mb-8">
                Community, education & leadership roles
              </p>
              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 5,
                    top: 6,
                    bottom: 6,
                    width: 1,
                    background: "rgba(245,235,215,0.18)",
                  }}
                />
                {otherExperience.map((e) => (
                  <div key={e.text} style={{ position: "relative", paddingBottom: 26 }}>
                    <div
                      style={{
                        position: "absolute",
                        left: -28,
                        top: 6,
                        width: 9,
                        height: 9,
                        borderRadius: "9999px",
                        background: "rgba(245,235,215,0.5)",
                      }}
                    />
                    <span className="font-mono text-xs text-cream-soft/50">{e.time}</span>
                    <p className="text-sm leading-relaxed text-cream-soft/85 mt-1">{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-10">
              <div>
                <p className="text-sm font-semibold text-cream-soft/60 mb-5">Core skills</p>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-4 py-2 rounded-full text-cream-soft"
                      style={{ background: "rgba(245,235,215,0.12)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-cream-soft/60 mb-5">Professional practice</p>
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
              <p className="text-sm font-semibold text-cream-soft/60 mb-4">Exposure in computers</p>
              <p className="text-sm text-cream-soft/80">
                MS Windows, MS Word, MS Excel, MS PowerPoint, MS Access, Internet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <LeafDivider from="#5D4037" to="#F5EBD7" />

      {/* NAGARAJ */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="flex flex-col items-start gap-4">
              <div
                className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(93,64,55,0.08), transparent 60%), rgba(93,64,55,0.06)",
                  border: "1px solid rgba(93,64,55,0.18)",
                }}
              >
                <span
                  className="font-display text-5xl text-brown-deep font-semibold"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  NS
                </span>
                <div
                  style={{
                    position: "absolute",
                    bottom: -18,
                    right: -18,
                    width: 90,
                    height: 90,
                    borderRadius: "9999px",
                    border: "1px solid rgba(93,64,55,0.15)",
                  }}
                />
              </div>
              <div>
                <p className="font-mono text-xs text-clay">Manager</p>
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
              <p className="mt-2 mb-6 text-[1.05rem] text-forest font-display italic">
                Twenty years moving between tour buses and film sets, always
                coming back to the same community.
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
    </>
  );
}