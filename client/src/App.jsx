import { lazy, Suspense } from 'react';

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Only Hero loads eagerly (above the fold)
import Hero from './sections/Hero';

// Everything below the fold is lazy-loaded to cut initial JS by ~60%
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}