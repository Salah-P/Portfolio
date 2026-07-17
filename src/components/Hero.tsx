"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, ExternalLink, Globe } from "lucide-react";

import { profile, roles } from "@/data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background Grid */}
      <div className="grid-background absolute inset-0" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* Left Side */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-semibold uppercase tracking-[0.3em] text-violet-300"
          >
            Emerging AI & ML Professional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-black leading-tight tracking-[-0.06em] text-white md:text-7xl"
          >
            Salah Asif
            <br />
            <span className="gradient-text">Parbhulkar</span>
          </motion.h1>

          <div className="mt-6 flex h-12 items-center">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xl font-semibold text-zinc-300 md:text-2xl"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            {profile.summary}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Salah_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-white transition hover:border-violet-500"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-4"
          >
              <a
              href={profile.github}
              target="_blank"
              className="rounded-xl border border-white/10 p-3 text-zinc-300 transition hover:border-violet-500 hover:text-white"
            >
              <ExternalLink size={22} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              className="rounded-xl border border-white/10 p-3 text-zinc-300 transition hover:border-violet-500 hover:text-white"
            >
              <Globe size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid w-full max-w-lg gap-5"
        >
          <div className="glass-card rounded-3xl p-6">
            <p className="text-sm uppercase tracking-wider text-violet-300">
              Current Focus
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              LLM Systems & Agentic AI
            </h3>

            <p className="mt-3 text-zinc-400">
              Building constrained generation pipelines, model benchmarking
              frameworks, and scalable AI applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="glass-card rounded-3xl p-5">
              <p className="text-4xl font-black text-white">6+</p>
              <p className="mt-2 text-sm text-zinc-400">
                Industry Internships
              </p>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <p className="text-4xl font-black text-white">2</p>
              <p className="mt-2 text-sm text-zinc-400">
                Hackathon Wins
              </p>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <p className="text-4xl font-black text-white">6</p>
              <p className="mt-2 text-sm text-zinc-400">
                Certifications
              </p>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <p className="text-4xl font-black text-white">3.36</p>
              <p className="mt-2 text-sm text-zinc-400">
                University GPA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
