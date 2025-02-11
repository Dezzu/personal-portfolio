import { HydrateClient } from "~/trpc/server";
import Hero from "./_components/hero";
import Navbar from "./_components/Navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
        <Navbar />
        <div className="w-full max-w-7xl">
          <Hero />
        </div>
      </main>
    </HydrateClient>
  );
}
