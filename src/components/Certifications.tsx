"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, X } from "lucide-react";

import Section from "./Section";
import { certifications } from "@/data/portfolio";

type Certificate = (typeof certifications)[number];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Professional certifications and credentials."
        description="A collection of certifications covering Python development, AI, Oracle technologies, Salesforce, and cloud platforms."
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              onClick={() => setSelected(cert)}
              className="glass-card group flex flex-col overflow-hidden rounded-3xl p-0 text-left transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              {/* Mini Certificate Preview */}
              <div className="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                    <Award className="text-white" size={28} />
                  </div>

                  <p className="text-4xl font-black tracking-wider text-white">
                    {cert.abbreviation}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="line-clamp-2 text-lg font-bold text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-violet-300">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                    {cert.code}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-8"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
              }}
              className="glass-card relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-white/20"
              >
                <X size={18} />
              </button>

              {/* Certificate Header */}
              <div className="flex shrink-0 items-center gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                  <Award size={24} />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xl font-bold text-white">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-violet-300">{selected.issuer}</p>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="flex flex-1 items-center justify-center overflow-hidden bg-zinc-900/50 p-2">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full rounded-2xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}