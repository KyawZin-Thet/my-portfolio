"use client";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-5 mx-auto flex justify-center flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Contact />
    </main>
  );
}
