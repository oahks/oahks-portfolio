"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/lib/data/projects";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeImage) setActiveImage(null);
        else onClose();
      }
    };
    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      setActiveImage(null);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose, activeImage]);

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
          <div className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground cursor-pointer"
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

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Project Screenshots ({project.images.length})
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    className="relative aspect-video overflow-hidden rounded-xl border border-border bg-section-alt cursor-pointer transition-all hover:border-accent/40 hover:ring-2 hover:ring-accent/20"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Challenge
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Solution
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
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
                      className="rounded-md bg-tag px-3 py-1 text-sm text-foreground"
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

          <AnimatePresence>
            {activeImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[60] flex items-center justify-center p-4"
                onClick={() => setActiveImage(null)}
              >
                <div className="absolute inset-0 bg-black/90" />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute right-6 top-6 z-10 rounded-lg p-2 text-white/80 hover:text-white cursor-pointer"
                  aria-label="Close image preview"
                >
                  <X className="h-6 w-6" />
                </button>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-h-[85vh] w-full max-w-5xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeImage}
                    alt="Screenshot preview"
                    className="max-h-[85vh] w-full rounded-lg object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
