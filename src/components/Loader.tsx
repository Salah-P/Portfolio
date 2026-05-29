"use client";

import { motion, AnimatePresence } from "motion/react";
import { Cog } from "lucide-react";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07070b]"
        >
          <div className="relative flex flex-col items-center gap-8">

            {/* Orbit Ring */}
            <div className="relative h-40 w-40">

              <div className="absolute inset-0 rounded-full border border-violet-500/20" />

              <div className="absolute inset-4 rounded-full border border-pink-500/20" />

              <div className="absolute inset-8 rounded-full border border-cyan-500/20" />

              {/* Orbiting Node */}
              <div className="orbit-loader absolute left-1/2 top-1/2">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
              </div>

              {/* Center Core */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 backdrop-blur-md"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </motion.div>

              {/* Gear 1 */}
              <Cog
                size={72}
                className="gear-loader absolute -left-6 top-10 text-violet-500"
              />

              {/* Gear 2 */}
              <Cog
                size={48}
                className="gear-loader-reverse absolute right-0 bottom-8 text-pink-500"
              />
            </div>

            {/* Text */}
            <div className="text-center">
              <motion.h2
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-2xl font-bold text-white"
              >
                Initializing AI Systems
              </motion.h2>

              <p className="mt-2 text-sm text-zinc-400">
                Loading portfolio modules...
              </p>
            </div>

            {/* Loading Bar */}
            <div className="h-1 w-64 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
                className="h-full w-32 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
