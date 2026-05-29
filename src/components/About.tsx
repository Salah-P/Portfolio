"use client";

import { motion } from "motion/react";
import { Brain, Cpu, Database, Workflow } from "lucide-react";

import Section from "./Section";
import { profile } from "@/data/portfolio";

const focusAreas = [
  {
    icon: Brain,
    title: "LLM Systems",
    description:
      "Building structured generation pipelines, benchmarking workflows, and reliable local AI systems.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description:
      "Designing AI-assisted editing, automation, and natural language control systems.",
  },
  {
    icon: Cpu,
    title: "Backend AI APIs",
    description:
      "Developing FastAPI and Flask services that connect AI models with production-ready applications.",
  },
  {
    icon: Database,
    title: "Data & Evaluation",
    description:
      "Working with model evaluation, latency testing, structured outputs, and analytics pipelines.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building practical AI systems for real-world constraints."
      description={profile.summary}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;

          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="glass-card group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-white">{area.title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {area.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
