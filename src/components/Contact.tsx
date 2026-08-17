import { useState } from 'react';
import { Mail, Copy, Check, MapPin, Phone, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const targetEmail = "hyormdev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase font-medium block">
            Let's Connect
          </span>
          <h2 className="text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
            Open to engineering opportunities, technical discussions, and meaningful collaboration across the full product lifecycle (from UX design to core systems).
          </p>
        </div>

        {/* Unified Contact Hub Card */}
        <div className="max-w-xl mx-auto border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 sm:p-8 space-y-6">

          {/* Email Action Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 block">Direct Email</span>
              <a
                href={`mailto:${targetEmail}`}
                className="text-sm sm:text-base font-mono font-medium text-zinc-900 dark:text-zinc-50 hover:text-emerald-500 transition-colors"
              >
                {targetEmail}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${targetEmail}?subject=${encodeURIComponent('[Portfolio Inquiry] Opportunity / Discussion')}`}
                className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Quick Meta Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
              <span>Canada Open Work Permit (IEC)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-zinc-400 shrink-0" />
              <span>+82-10-9316-1623</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Linkedin className="h-4 w-4 text-zinc-400 shrink-0" />
              <a
                href="https://linkedin.com/in/hyorim-kim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
              >
                linkedin.com/in/hyorim-kim <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available for Hire</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
