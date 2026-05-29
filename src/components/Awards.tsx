"use client";

import { motion } from "motion/react";
import { Trophy, Medal, Calendar } from "lucide-react";

import Section from "./Section";
import { awards } from "@/data/portfolio";

export default function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Awards"
      title="Hackathon wins and competitive achievements."
      description="Recognition for building practical AI-powered applications, product concepts, and technical solutions under time pressure."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {awards.map((award, index) => {
          const Icon = index === 0 ? Medal : Trophy;

          return (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-pink-500/20" />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-300">
                    <Calendar size={13} />
                    {award.date}
                  </div>
                </div>

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                  {award.result}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {award.title}
                </h3>

                <p className="mt-2 font-medium text-zinc-400">
                  {award.organizer}
                </p>

                <p className="mt-5 leading-8 text-zinc-300">
                  {award.description}
                </p>

                {"tech" in award && award.tech && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {award.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
