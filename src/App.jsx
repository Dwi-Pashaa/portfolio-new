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
    <div className="min-h-screen flex flex-col bg-canvas text-ink font-body selection:bg-accent-yellow selection:text-ink">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 2: Hero Section (Sweepy Inspired) */}
        <Hero />

        {/* Section 3: About Me (Interactive Developer Terminal) */}
        <AboutMe />

        {/* Section 4: Skills Matrix (Bento Grid) */}
        <Skills />

        {/* Section 5: Projects & Publications Showcase */}
        <Projects />

        {/* Section 6: Experience & Education Timeline */}
        <Experience />

        {/* Section 7: Journal Publications & Books */}
        <Journals />

        {/* Section 8: Interactive Contact Section */}
        <Contact />
      </main>

      {/* Section 9: Footer with Marquee Banner */}
      <Footer />
    </div>
  );
}

export default App;
