import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import { Toaster } from "./components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Toaster />
      <Navigation />
      <Hero />
      <About />
      <CV />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
