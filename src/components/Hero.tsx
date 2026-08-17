import { PersonalInfo } from '../types';
import { ArrowDown, FileText, MapPin } from 'lucide-react';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section id="hero" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          
          {/* Status & Role Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/20">
              Full-Lifecycle Software Engineer
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <MapPin className="h-3.5 w-3.5" />
              <span>Seoul ➔ Canada (Open Work Permit)</span>
            </div>
          </div>

          {/* Headline: Bridging Philosophy + Engineering Problem Solving (UX to Systems) */}
          <div className="space-y-3">
            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Bridging <span className="font-medium text-zinc-900 dark:text-zinc-50">people with technology</span>, connecting <span className="font-medium text-zinc-900 dark:text-zinc-50">engineering with creativity</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-normal leading-snug">
              Passionate about solving complex problems through engineering—from intuitive user experience (UX) to robust system architectures—to make the world more seamless and beautiful.
            </p>
          </div>

          {/* Bio Description (Holistic Full-Lifecycle Problem Solver) */}
          <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        A full‑lifecycle software engineer adept at analyzing problem situations, deriving concrete requirements, and designing, building, and testing solutions. For over 4 years of engineering experience across the full product lifecycle and a proven track record of leading 0‑to‑1 initiatives at Nexon—identifying user friction, architecting Nexon’s first‑ever macOS game launcher platform (Swift with Objective‑C, C++), building high‑performance native SDKs & cross‑platform desktop clients (Electron, N‑API), and maintaining live operations for 1.2M+ MAU.
          </p>

          {/* Clean Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-mono uppercase tracking-wider font-medium transition-colors"
            >
              <span>Featured Projects</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
            
            <a
              href="../resume/master_resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
