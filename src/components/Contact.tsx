"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Copy,
  Check,
  Mail,
  Phone,
  ExternalLink,
  Globe,
  Download,
  MapPin,
} from "lucide-react";

import Section from "./Section";
import { profile, languages } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/Salah-P",
    href: profile.github,
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salah-parbhulkar-bb4530216",
    href: profile.linkedin,
    icon: Globe,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);

    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent."
      description="Reach out for AI engineering, ML systems, backend API, automation, or research-focused opportunities."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card overflow-hidden rounded-3xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <p className="ml-3 text-sm text-zinc-400">contact-terminal</p>
          </div>

          <div className="space-y-5 p-6 font-mono text-sm">
            <p className="text-cyan-300">$ whoami</p>
            <p className="text-zinc-300">{profile.name}</p>

            <p className="pt-4 text-cyan-300">$ current_status</p>
            <p className="inline-flex items-center gap-2 text-zinc-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
              Available for AI / ML / Software opportunities
            </p>

            <p className="pt-4 text-cyan-300">$ location</p>
            <p className="flex items-center gap-2 text-zinc-300">
              <MapPin size={15} />
              {profile.location}
            </p>

            <p className="pt-4 text-cyan-300">$ languages</p>
            <p className="text-zinc-300">{languages.join(" · ")}</p>

            <p className="pt-4 text-cyan-300">$ specialization</p>
            <p className="leading-7 text-zinc-300">
              LLM systems · Agentic workflows · FastAPI · Model benchmarking ·
              Automation · Geospatial AI
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isCopied = copied === item.value;

            return (
              <div
                key={item.label}
                className="glass-card flex items-center justify-between gap-4 rounded-2xl p-4"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="flex min-w-0 items-center gap-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    <p className="truncate font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </a>

                <button
                  onClick={() => copyValue(item.value)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-zinc-400 transition hover:text-white"
                  aria-label={`Copy ${item.label}`}
                >
                  {isCopied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            );
          })}

          <a
            href="/resume/Salah_CV.pdf"
            download
            className="flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 font-bold text-black transition hover:scale-[1.02] hover:bg-violet-200"
          >
            <Download size={19} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
