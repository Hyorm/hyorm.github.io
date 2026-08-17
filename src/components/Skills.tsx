import { useState, useMemo, ReactNode } from 'react';
import { Skill } from '../types';
import {
  Code2,
  Apple,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Layout,
  Server,
  Container,
  CheckCircle,
  Sparkles,
  Search,
  X,
  LucideProps
} from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  Code2,
  Apple,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Layout,
  Server,
  Container,
  CheckCircle,
  Sparkles,
};

const DynamicSkillIcon = ({ name, className }: { name?: string; className?: string }): ReactNode => {
  if (!name || !ICON_MAP[name]) {
    return <Code2 className={className || "h-3.5 w-3.5"} />;
  }
  const Component = ICON_MAP[name];
  return <Component className={className || "h-3.5 w-3.5"} />;
};

export default function Skills({ skills }: SkillsProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Compute unique categories dynamically
  const categories = useMemo(() => {
    const list = new Set<string>();
    skills.forEach(s => {
      if (s.category) list.add(s.category);
    });
    return ['All', ...Array.from(list)];
  }, [skills]);

  // Filter skills based on category & search query
  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          skill.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [skills, selectedCategory, searchTerm]);

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/10 dark:bg-zinc-950/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase block font-medium">Expertise Hub</span>
            <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
              Technical Core Competencies
            </h2>
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2 max-w-xs w-full">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                <Search className="h-3.5 w-3.5" />
              </span>
              <input
                type="text"
                placeholder="FILTER SKILLS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs font-mono pl-9 pr-8 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 uppercase tracking-wider"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-2.5 flex items-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories filtration row */}
        <div className="flex flex-wrap gap-1 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'text-emerald-500 font-medium border-b-2 border-emerald-500 -mb-[5px]'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Render grid of progress metrics */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/10">
            <p className="text-zinc-500 text-xs font-mono">No matching skills found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="p-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group"
              >
                
                {/* Upper Details */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 group-hover:text-emerald-500 transition-colors">
                      <DynamicSkillIcon name={skill.iconName} className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-sans font-medium text-xs text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Level Progress Bar element */}
                <div className="space-y-1.5">
                  <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full bg-zinc-900 dark:bg-zinc-100 group-hover:bg-emerald-500 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    <span>{skill.category}</span>
                    <span>
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Proficient' : 'Competent'}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
