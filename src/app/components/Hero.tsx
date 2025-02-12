"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
  const motivationalWords = "Per progredire, bisogna innovare!";

  return (
    <section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 px-4 text-center"
      >
        <h1 className="mb-10 text-9xl font-bold sm:text-5xl">
          Trasformo le tue idee,{" "}
          <span className="text-blue-100">nella loro forma migliore!</span>
        </h1>
        <TextGenerateEffect
          words={motivationalWords}
          className="mx-auto max-w-2xl text-lg sm:text-xl"
        />
      </motion.div>
      <BackgroundBeams />
    </section>
  );
}
