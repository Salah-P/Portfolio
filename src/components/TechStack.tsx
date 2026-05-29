"use client";

import { motion } from "motion/react";
import { Code2, Database, BrainCircuit, Wrench } from "lucide-react";

import Section from "./Section";
import { skills } from "@/data/portfolio";

const icons = [BrainCircuit, Code2, Database, Wrench];

export default function TechStack() {
  return (
    <Section
      id="tech"
      eyebrow="Tech Capabilities"
      title="A stack built around AI, APIs, data, and automation."
      description="My technical foundation combines AI engineering, backend development, data analytics, and modern tools used to build practical intelligent systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => {
          const Icon = icons[index] ?? Wrench;

          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="glass-card group rounded-3xl p-7 transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {skill.category}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Capability level: {skill.level}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
