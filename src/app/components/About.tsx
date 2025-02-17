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

          <p className="text-xl">Hai un'idea? Realizziamola insieme!💡</p>

          {/* <p className="mb-6 text-lg">
            Benvenuto! Sono <span className="text-blue-100">Fabio</span>. Sono
            un{" "}
            <span className="text-blue-100">Freelance Fullstack Developer</span>{" "}
            e <span className="text-blue-100">Tech Leader</span> con quasi sei
            anni di esperienza nello sviluppo di applicazioni web scalabili e ad
            alte prestazioni. La mia expertise spazia tra{" "}
            <span className="text-blue-100">Java</span>
            (Spring Boot), <span className="text-blue-100">Angular</span> e le
            più moderne tecnologie web, con un forte focus su architetture
            pulite, performance e manutenibilit&agrave;.
          </p>
          <p className="mb-6 text-lg">
            Come <span className="text-blue-100">Tech Leader</span>, guido i
            team di sviluppo garantendo best practice, flussi di lavoro
            efficienti e soluzioni all&apos;avanguardia. Sono sempre alla
            ricerca di nuove tecnologie per migliorare il mio bagaglio di
            competenze e rimanere aggiornato sulle ultime innovazioni del
            settore.
          </p>
          <p className="mb-6 text-lg">
            Oltre al coding, mi appassiona{" "}
            <span className="text-blue-100">ottimizzare i processi</span>,
            supportare i developer nella loro crescita e creare soluzioni che
            abbiano un impatto reale. Nel tempo libero mi dedico a{" "}
            <span className="text-blue-100">informarmi di continuo</span> per
            migliorare sempre di più le mie competenze. Credo fermamente nella
            formazione continua e nella condivisione della conoscenza.
          </p>
          <p className="text-xl">
            Se hai un&apos;idea da sviluppare, connettiamoci e costruiamo
            qualcosa di straordinario insieme! 🚀
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
