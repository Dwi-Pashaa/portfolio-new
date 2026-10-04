import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Journals } from './components/sections/Journals';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink font-body selection:bg-accent selection:text-ink">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Latar Belakang / Tentang Saya */}
        <AboutMe />

        {/* Section 3: Pengalaman & Pendidikan */}
        <Experience />

        {/* Section 4: Proyek & Portfolio */}
        <Projects />

        {/* Section 5: Publikasi Jurnal & Buku */}
        <Journals />

        {/* Section 6: Keahlian, Tools & Minat Karir */}
        <Skills />

        {/* Section 7: Hubungi Saya */}
        <Contact />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}

export default App;

