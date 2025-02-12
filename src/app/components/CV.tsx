"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Tech Leader - Sviluppo interno",
    company: "Consoft Informatica",
    period: "23/06/2021 - Present",
    description:
      "Ricopro la posizione di tech leader per progetti aziendali, mi occupo della selezione tecnologica e della gestione delle risorse per il completamento dell'attività. Mi occupo anche della ricerca e selezione tecnica dei candidati da introdurre all'interno della struttura aziendale.",
  },
  {
    title: "Sviluppatore Backend - Consulenza",
    company: "Consoft Informatica - IGT",
    period: "23/06/2021 - 01/09/2024",
    description:
      "Lavoro in team e mediante la metodologia AGILE siamo in grado di distribuire software ogni sprint. Il progetto prevede lo sviluppo di un prodotto per la gestione del profilo, in ogni suo aspetto, di una piattaforma scommesse internazionale. Come sviluppatore mi sono occupato dell'analisi tecnica di funzionalità, redazione di documentazione e implementazione in ogni sua parte.",
  },
  {
    title: "Sviluppatore Web",
    company: "Corvallis",
    period: "23/10/2019 – 20/06/2021",
    description:
      "Mi occupavo del miglioramento della piattaforma del prodotto aziendale. Sviluppavo nuove funzionalità e miglioravo quelle già esistenti. Mi occupavo dello sviluppo fullstack in Java, con un framework proprietario.",
  },
  // Add more experiences as needed
];

const education = [
  {
    degree: "Diploma scuola superiore - (90/100)",
    institution: "Istituto Tecnico Industriale Francesco Severi",
    year: "2019",
  },
  // Add more education items as needed
];

const skills = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Postman",
  "Angular",
  "PrimeNG",
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "Node.js",
];

export default function CV() {
  return (
    <section id="cv" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Curriculum Vitae
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-2xl font-semibold">Esperienze</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-medium">{exp.title}</h4>
                <p className="text-gray-400">
                  {exp.company} | {exp.period}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-2xl font-semibold">Formazione</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-medium">{edu.degree}</h4>
                <p className="text-gray-400">
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}
            <h3 className="mb-4 mt-10 text-2xl font-semibold">Tecnologie</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
