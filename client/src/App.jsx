import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SubtleBackground } from './components/SubtleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { FreelanceCTA } from './components/FreelanceCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-indigo-600 selection:text-white">
        {/* Subtle Background */}
        <SubtleBackground />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <FreelanceCTA />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
