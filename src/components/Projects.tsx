import { useState, useMemo, useEffect } from 'react';
import { Project } from '../types';
import { 
  ExternalLink, 
  X, 
  Check, 
  ArrowUpRight, 
  FolderGit2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  projects: Project[];
}



export default function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique categories dynamically
  const categories = useMemo(() => {
    const list = new Set<string>();
    projects.forEach(p => {
      const cat = p.category ? p.category.split('/')[0].trim() : 'General';
      list.add(cat);
    });
    return ['All', ...Array.from(list)];
  }, [projects]);

  // Filter projects by active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => {
      const cat = p.category ? p.category.split('/')[0].trim() : 'General';
      return cat === activeCategory;
    });
  }, [projects, activeCategory]);

  // Handle ESC key to close modal and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase block font-medium">Selected Works</span>
            <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
              Flagship Engineering Projects
            </h2>
          </div>

          {/* Clean Category Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'text-emerald-500 font-medium border-b-2 border-emerald-500 -mb-[5px]'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isClickable = project.isClickable !== false;
            return (
              <article
                id={`project-card-${project.id}`}
                key={project.id}
                onClick={() => isClickable && setSelectedProject(project)}
                className={`group relative flex flex-col justify-between border bg-white dark:bg-zinc-900/10 p-6 space-y-4 transition-all ${
                  isClickable 
                    ? 'border-zinc-200 dark:border-zinc-800 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 shadow-xs' 
                    : 'border-amber-500/30 dark:border-amber-500/20 bg-amber-500/[0.02] dark:bg-amber-500/[0.01] cursor-default'
                }`}
              >
                <div className="space-y-3.5">
                  
                  {/* Top Bar: Icon + Category + Status/Details */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="p-1 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                        <FolderGit2 className="h-4 w-4 text-zinc-500" />
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge with Live Pulse for In-Progress */}
                    {project.status ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-medium">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                        </span>
                        <span>{project.status}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                        <span>Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Body: Direct Bullets for In-Progress, or Short Summary for Clickable */}
                  {!isClickable ? (
                    <div className="space-y-2 pt-1">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                          <Check className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed font-sans">
                      {project.shortDesc}
                    </p>
                  )}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 max-h-[85vh] overflow-y-auto z-20 p-6 sm:p-8 space-y-6"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2">
                    <span className="p-1 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                      <FolderGit2 className="h-4 w-4 text-zinc-500" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.liveUrl && (
                    <div className="pt-1">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Official Service Link <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Architecture Overview</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Key Achievements */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Key Engineering Achievements</h4>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
