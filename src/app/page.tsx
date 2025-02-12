import Hero from "./_components/Hero";
import About from "./_components/About";
import CV from "./_components/CV";
import Projects from "./_components/Projects";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CV />
      <Projects />
    </main>
  );
}
