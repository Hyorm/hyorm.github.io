import { Experience } from '../types';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-zinc-800 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase block font-medium">Milestones</span>
          <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Professional Experience & Academic Background
          </h2>
        </div>

        {/* Timeline Grid layout */}
        {experiences.length === 0 ? (
          <div className="text-center py-16 border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 text-xs font-mono">No milestones configured.</p>
          </div>
        ) : (
          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-12 py-2">
            
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`exp-milestone-${exp.id}`}
                className="relative group space-y-4"
              >
                {/* Timeline node square indicator */}
                <span className="absolute -left-[30px] md:-left-[38px] top-1.5 flex h-3 w-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 items-center justify-center group-hover:border-emerald-500 dark:group-hover:border-emerald-500 transition-colors duration-200 z-10 rounded-none">
                  <span className="h-1 w-1 bg-zinc-400 dark:bg-zinc-600 group-hover:bg-emerald-500 transition-colors duration-200" />
                </span>

                {/* Role Header Info */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 flex flex-wrap items-center gap-1.5">
                      <span>{exp.role}</span>
                      <span className="text-zinc-400 dark:text-zinc-600 font-light font-mono text-xs">//</span>
                      <span className="text-zinc-600 dark:text-zinc-300 font-sans font-semibold text-xs">{exp.company}</span>
                    </h3>
                    
                    {/* Time & Location subheadings */}
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Optional External Link (e.g. Undergraduate Resume / Archive) */}
                  {exp.linkUrl && (
                    <a
                      href={exp.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline pt-0.5"
                    >
                      <span>{exp.linkText || 'Archive Link'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                {/* Brief introduction snippet of the role */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mt-0.5">
                  {exp.description}
                </p>

                {/* Detailed highlights / Bullet achievements list */}
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mt-3 list-none">
                    {exp.bulletPoints.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed items-start">
                        <span className="text-emerald-500 font-mono text-xs shrink-0 mt-0.5">
                          ―
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills/Tags highlights used in this milestone role */}
                {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                    {exp.skillsUsed.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-[9px] font-mono tracking-wider uppercase bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5 text-zinc-500 dark:text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
