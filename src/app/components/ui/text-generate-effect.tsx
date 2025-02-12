"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className = "",
  changeColorIndex = 1,
  changeColorColor = "text-blue-100",
}: {
  words: string;
  className?: string;
  changeColorIndex?: number;
  changeColorColor?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [animate]);

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${idx > changeColorIndex ? changeColorColor : ""} mr-1 inline-block opacity-0`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
