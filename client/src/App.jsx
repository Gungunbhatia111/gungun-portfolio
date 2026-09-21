import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SubtleBackground } from './components/SubtleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Services } from './components/Services';
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
        {/* Engineering Mesh Background */}
        <SubtleBackground />

        {/* Sticky Clean Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <CurrentlyLearning />
          <Skills />
          <Projects />
          <Journey />
          <Services />
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
