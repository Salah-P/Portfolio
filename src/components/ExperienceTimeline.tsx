"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { useRef } from "react";

import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 35%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Industry experience across AI, HCM, automation, and simulations."
      description="A timeline of internships and technical work across research, enterprise systems, AI-enabled workflows, geospatial technology, and automation."
    >
      <div ref={timelineRef} className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />

        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-400 md:left-1/2"
        />

        <div className="space-y-10">
          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  isLeft ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="glass-card relative ml-12 rounded-3xl p-7 md:ml-0">
                  <div className="absolute -left-[3.25rem] top-8 grid h-8 w-8 place-items-center rounded-full border border-violet-400/40 bg-[#07070b] shadow-[0_0_30px_rgba(139,92,246,0.65)] md:left-auto md:right-[-2.95rem]">
                    <div className="h-3 w-3 rounded-full bg-violet-400" />
                  </div>

                  {!isLeft && (
                    <div className="hidden md:absolute md:left-[-2.95rem] md:right-auto md:top-8 md:grid md:h-8 md:w-8 md:place-items-center md:rounded-full md:border md:border-violet-400/40 md:bg-[#07070b] md:shadow-[0_0_30px_rgba(139,92,246,0.65)]">
                      <div className="h-3 w-3 rounded-full bg-violet-400" />
                    </div>
                  )}

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-300">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.role}</h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                    <span className="font-semibold text-violet-300">
                      {item.company}
                    </span>

                    <span>·</span>

                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
