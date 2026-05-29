"use client";

import { motion } from "motion/react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
              {eyebrow}
            </p>
          )}

          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
              {description}
            </p>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
}
