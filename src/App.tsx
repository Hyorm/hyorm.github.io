import { PortfolioData } from './types';
import { DEFAULT_PORTFOLIO } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experiences from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const portfolio: PortfolioData = DEFAULT_PORTFOLIO;

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-250 selection:bg-emerald-500/10 selection:text-emerald-600 dark:selection:bg-emerald-500/20 dark:selection:text-emerald-400 flex flex-col">
      
      {/* Main Header navigation */}
      <Header personalInfo={portfolio.personalInfo} />

      {/* Core Body Container */}
      <main id="main-content-flow" className="flex-1 pb-20">
        
        {/* Hero personal introduction presentation */}
        <Hero personalInfo={portfolio.personalInfo} />

        {/* Selected works interactive gallery grid */}
        <Projects projects={portfolio.projects} />

        {/* Skill progress categories grid with searchable metrics dashboard */}
        <Skills skills={portfolio.skills} />

        {/* Timeline chronological professional landmarks */}
        <Experiences experiences={portfolio.experiences} />

        {/* Unified Contact card */}
        <Contact />

      </main>

      {/* Structured Minimal Core Footer information */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 bg-zinc-50/10 dark:bg-zinc-950/5 text-center text-[10px] text-zinc-500 dark:text-zinc-500 font-mono transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-1.5 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {portfolio.personalInfo.name}. All systems verified.</p>
          <p className="opacity-60 text-[9px] lowercase normal-case">
            Full-Lifecycle Software Engineer • Desktop & Platform Systems
          </p>
        </div>
      </footer>

    </div>
  );
}
