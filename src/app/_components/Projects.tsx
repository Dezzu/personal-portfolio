"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestionale Vidia",
    description:
      "Gestionale online privato con autenticazione per la gestione di un business. Le funzionalità principali includono la gestione dei clienti, dei prodotti, degli ordini e delle commesse per una gestione migliore delle risorse. L'accesso è riservato solo agli utenti autorizzati",
    image: "/VidiaGestionale.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Angular", "PrimeNG"],
    showMore: false,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Progetti</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-gray-900 shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                {hoveredIndex === index && project.showMore && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <button className="flex items-center space-x-2 rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80">
                      <span>Scopri di più</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-gray-700 px-2 py-1 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
