import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { DotBackground } from "./ui/DotBackground";
import { appColors } from "tailwind.config";

const Hero = () => {
  return (
    // <div className="pb-20 pt-36">
    <div className="pb-20 pt-28 md:pb-28 md:pt-36">
      <div>
        <Spotlight
          className="left-10 top-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[100vh] w-[110vw] md:h-[80vh] md:w-[50vw]"
          fill={appColors.green[200]}
        />
        <Spotlight
          className="bottom-20 left-80 h-[50vh] w-[90vw] md:left-80 md:top-28 md:h-[80vh] md:w-[50vw]"
          fill={appColors.green[100]}
        />
      </div>

      <DotBackground />

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="text-md max-w-100 text-center uppercase tracking-widest text-blue-100 md:text-lg lg:text-xl">
            Per progredire, devi innovare!
          </h2>

          <TextGenerateEffect
            className="text-center"
            textClassName="text-4xl md:text-5xl lg:text-6xl"
            words="Trasformo le tue idee, nella loro forma migliore"
            indexColorChange={5}
          />
          <p className="text-md my-4 text-center md:text-xl md:tracking-wider lg:text-3xl">
            Sono Fabio, un Freelance Web Developer e non solo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
