import { PersonalInfo } from '../types';
import { Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-250">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          
          {/* Brand Logo / Name */}
          <a href="#" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity">
            <span className="font-mono text-xs font-bold tracking-tight bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 px-2 py-0.5">
              HK
            </span>
            <span className="font-sans font-semibold text-sm tracking-tight">
              {personalInfo.name}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#projects" className="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              projects
            </a>
            <a href="#skills" className="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              skills
            </a>
            <a href="#experience" className="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              experience
            </a>
            <a href="#contact" className="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              contact
            </a>
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            <div className="h-3.5 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />
            <ThemeToggle id="header-theme-toggle" />
          </div>

        </div>
      </div>
    </header>
  );
}
