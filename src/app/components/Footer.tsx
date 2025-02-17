"use client";

import Link from "next/link";
import React from "react";
import { navItems } from "~/lib/const";
import { handleClick } from "~/lib/utils";

function Footer() {
  return (
    <section id="cv" className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
              className="text-white hover:text-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Footer;
