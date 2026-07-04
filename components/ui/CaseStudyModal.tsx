"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { ProjectVideoPlayer } from "@/components/ui/ProjectVideoPlayer";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { cn } from "@/lib/utils";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxOpenRef = useRef(false);
  const isVideoProject = project?.videos !== undefined;
  const images = project?.images ?? [];

  useEffect(() => {
    lightboxOpenRef.current = lightboxIndex !== null;
  }, [lightboxIndex]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightboxOpenRef.current) onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

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

            {isVideoProject && (
              <div className="mt-6 space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Videos ({project.videos!.length})
                </h4>
                {project.videos!.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-border bg-section-alt p-8 text-center text-sm text-muted">
                    <p className="font-medium text-foreground">
                      No videos added yet
                    </p>
                    <p className="mt-2">
                      Add entries in{" "}
                      <code className="rounded bg-tag px-1.5 py-0.5 text-xs">
                        lib/data/promotional-videos.ts
                      </code>
                    </p>
                  </div>
                ) : (
                  project.videos!.map((video) => (
                    <div key={video.id}>
                      <p className="mb-2 text-sm font-medium text-foreground">
                        {video.title}
                        {video.source === "google-drive" && (
                          <span className="ml-2 text-xs font-normal text-muted">
                            Google Drive
                          </span>
                        )}
                      </p>
                      <ProjectVideoPlayer video={video} />
                    </div>
                  ))
                )}
              </div>
            )}

            {images.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Project Screenshots ({images.length})
                  </h4>
                  <p className="text-xs text-muted hidden sm:block">
                    Click to open gallery · Arrow keys to navigate
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(i);
                      }}
                      className={cn(
                        "group relative aspect-video overflow-hidden rounded-xl border bg-section-alt cursor-pointer transition-all",
                        lightboxIndex === i
                          ? "border-accent ring-2 ring-accent/30"
                          : "border-border hover:border-accent/40 hover:ring-2 hover:ring-accent/20"
                      )}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 200px"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                        <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                        {i + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

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

          {lightboxIndex !== null && (
            <ImageLightbox
              images={images}
              activeIndex={lightboxIndex}
              onClose={closeLightbox}
              onIndexChange={setLightboxIndex}
              title={project.title}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
