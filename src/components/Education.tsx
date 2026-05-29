"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";

import Section from "./Section";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic History"
      title="Academic foundation in computer science."
      description="My education combines formal computer science training with strong academic performance and hands-on technical development."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.div
            key={`${item.institution}-${item.degree}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="glass-card group rounded-3xl p-7 transition hover:-translate-y-2 hover:border-violet-400/50"
          >
            <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
              <GraduationCap size={26} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              {item.degree}
            </h3>

            <p className="mt-2 font-semibold text-violet-300">
              {item.institution}
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={15} />
              {item.location}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-400">{item.period}</p>
              <p className="mt-2 font-bold text-white">{item.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
