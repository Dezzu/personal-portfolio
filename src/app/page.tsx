import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";

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
