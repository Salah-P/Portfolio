"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ExperienceTimeline />
        <Education />
        <Awards />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Salah Asif Parbhulkar. Built with Next.js,
        Tailwind CSS, and Motion.
      </footer>
    </>
  );
}
