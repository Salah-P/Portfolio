"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-padding relative overflow-hidden ${className}`}
    >
      {/* Parallax background glow */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl"
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -left-40 bottom-20 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-3xl"
      />

      <motion.div
        style={{ y: contentY }}
        className="mx-auto max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
        </motion.div>

        {children}
      </motion.div>
    </section>
  );
}