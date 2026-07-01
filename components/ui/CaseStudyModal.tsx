"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/lib/data/projects";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-lg bg-accent/20 px-2.5 py-1 text-xs font-medium text-accent-light">
              {project.industry}
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-success">
              {project.result}
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Challenge
                </h4>
                <p className="mt-2 text-muted leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Solution
                </h4>
                <p className="mt-2 text-muted leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Tools Used
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-white/5 px-3 py-1 text-sm text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Results
                </h4>
                <ul className="mt-2 space-y-2">
                  {project.caseStudy.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
