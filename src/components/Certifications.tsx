"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, X, ExternalLink } from "lucide-react";

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
              className="glass-card group overflow-hidden rounded-3xl p-0 text-left transition hover:-translate-y-2 hover:border-violet-400/50"
            >
              {/* Mini Certificate Preview */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500">
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

              <div className="p-6">
                <h3 className="line-clamp-2 text-lg font-bold text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-violet-300">
                  {cert.issuer}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                    {cert.code}
                  </span>

                  <ExternalLink
                    size={16}
                    className="text-zinc-500 transition group-hover:text-white"
                  />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              className="glass-card relative w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/30 text-white"
              >
                <X size={18} />
              </button>

              {/* Certificate Preview */}
              <div className="relative h-[320px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="mb-6 grid h-24 w-24 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                    <Award className="text-white" size={42} />
                  </div>

                  <p className="text-6xl font-black text-white">
                    {selected.abbreviation}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white">
                  {selected.title}
                </h2>

                <p className="mt-3 text-lg text-violet-300">
                  {selected.issuer}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
                    Certificate Code: {selected.code}
                  </span>
                </div>

                <p className="mt-6 text-zinc-400">
                  Replace this placeholder with the actual certificate image by
                  placing the certificate inside:
                </p>

                <code className="mt-3 block rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-cyan-300">
                  public{selected.image}
                </code>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
