"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects and technical work."
      description="A collection of projects focused on AI systems, evaluation frameworks, automation, and intelligent applications."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            className="glass-card group relative overflow-hidden rounded-3xl p-8"
          >
            {/* Background Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                    <Sparkles size={20} />
                  </div>

                  <span className="text-sm font-medium text-violet-300">
                    Featured Project
                  </span>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 transition group-hover:text-white"
                />
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-violet-400" />

                    <p className="text-sm leading-7 text-zinc-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
