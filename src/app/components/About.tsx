"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold">Chi sono</h2>

          <p className="mb-2 text-lg">Ciao, sono Fabio!🚀</p>

          <p className="mb-6 text-lg">
            <span className="text-blue-100">Freelance Fullstack Developer</span>{" "}
            & <span className="text-blue-100">Tech Leader</span> con quasi 6
            anni di esperienza in Java (Spring Boot), Angular e tecnologie web
            moderne. Mi occupo di sviluppo scalabile, performance e architetture
            pulite, guidando team con best practice e soluzioni innovative. Amo
            ottimizzare processi, supportare developer nella crescita e creare
            prodotti ad alto impatto.
          </p>

          <p className="text-xl">Hai un&apos;idea? Realizziamola insieme!💡</p>
        </motion.div>
      </div>
    </section>
  );
}
