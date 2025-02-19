"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { navItems } from "~/lib/const";
import { handleClick } from "~/lib/utils";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <motion.div
        className="h-1 w-full bg-slate-50/50"
        style={{ scaleX: scrollYProgress }}
      />{" "}
      <ul className="flex justify-center space-x-4 p-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-gray-300"
              }`}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  className="h-0.5 bg-primary"
                  layoutId="underline"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
