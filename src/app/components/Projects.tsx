"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestionale Vidia",
    description:
      "Gestionale online privato con autenticazione per la gestione di un business. Le funzionalità principali includono la gestione dei clienti, dei prodotti, degli ordini e delle commesse per una gestione migliore delle risorse. L'accesso è riservato solo agli utenti autorizzati",
    image: "/projects/VidiaGestionale.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Angular", "PrimeNG"],
    showMore: false,
    link: "",
  },
  {
    id: 2,
    title: "Template Applicazione",
    description:
      "Template per la realizzazione di applicazioni fullstack con Spring Boot e Angular. Include funzionalità di autenticazione, autorizzazione, gestione degli utenti e delle risorse, e un'interfaccia utente moderna e responsive. Pronto per essere personalizzato e utilizzato in nuovi progetti",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Angular", "PrimeNG"],
    showMore: true,
    link: "https://github.com/Dezzu/full-stack-app-template",
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
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="overflow-hidden rounded bg-gray-900 shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholders/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                {project.showMore && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-2 top-2 transform rounded-full bg-gray-700 p-1 transition-transform duration-300 ease-in-out"
                  >
                    <ArrowUpRight size={24} className="text-white" />
                  </a>
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
