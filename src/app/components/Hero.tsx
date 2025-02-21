"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import { handleClick } from "~/lib/utils";
import Image from "next/image";

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
        <div className="mb-3 flex w-full items-center justify-center">
          <div
            style={{ width: "200px", height: "200px" }}
            className="relative flex items-center justify-center overflow-hidden rounded-full"
          >
            <Image
              src="/profile.JPG"
              width={200}
              height={200}
              alt="Fabio, il proprietario del sito con una camicia azzurra"
            ></Image>
          </div>
        </div>
        <h1 className="mb-5 text-6xl font-bold sm:text-7xl md:mb-10">
          Trasformo le tue idee,{" "}
          <span className="text-blue-100">nella loro forma migliore!</span>
        </h1>
        <TextGenerateEffect
          words={motivationalWords}
          className="mx-auto max-w-2xl text-lg sm:text-2xl"
        />
        <Button
          variant="default"
          size="xl"
          className="mt-20 rounded bg-black-300 hover:bg-blue-100 hover:text-black"
          onClick={(event) => {
            handleClick(null, "#contacts");
          }}
        >
          <span className="text-xl">Contattami!</span>
        </Button>
      </motion.div>
      <BackgroundBeams />
    </section>
  );
}
