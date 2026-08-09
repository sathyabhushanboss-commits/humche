"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Visit enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nGroup / Purpose: ${group}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full bg-transparent border-b hairline py-3 text-[1rem] text-brown-deep placeholder:text-brown-deep/40 focus:outline-none focus:border-forest transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div>
        <label htmlFor="name" className="eyebrow text-forest">
          Your Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass + " mt-2"}
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="contact" className="eyebrow text-forest">
          Email or Phone
        </label>
        <input
          id="contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={inputClass + " mt-2"}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="group" className="eyebrow text-forest">
          Group / Purpose
        </label>
        <input
          id="group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className={inputClass + " mt-2"}
          placeholder="College group, 20 students — forest walk & farming"
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow text-forest">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass + " mt-2 resize-none"}
          placeholder="Tell us about your group and preferred dates."
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-forest text-cream px-7 py-4 rounded-full font-semibold hover:bg-forest-deep transition-colors w-fit"
      >
        Send Enquiry <ArrowRight size={17} />
      </button>
    </form>
  );
}
