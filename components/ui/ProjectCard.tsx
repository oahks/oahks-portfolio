"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { LazyInViewImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
  index?: number;
};

export function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  const isVideoProject = project.videos !== undefined;
  const videoCount = project.videos?.length ?? 0;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group w-full cursor-pointer text-left"
    >
      <div className="glass overflow-hidden rounded-2xl transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10">
        <div className="relative h-48 overflow-hidden bg-section-alt">
          {project.coverImage ? (
            <LazyInViewImage
              variant="card"
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              containerClassName="absolute inset-0"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : isVideoProject ? (
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 via-violet-900/40 to-background" />
          ) : null}

          {isVideoProject && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 fill-current pl-0.5" />
              </div>
            </div>
          )}

          <div className="absolute left-3 top-3 z-10 rounded-lg bg-accent/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.industry}
          </div>
          <div className="absolute right-3 top-3 z-10 rounded-lg bg-[var(--badge-overlay)] px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {isVideoProject
              ? `${videoCount} video${videoCount === 1 ? "" : "s"}`
              : project.mediaCount}
          </div>
        </div>

        <div className="p-5">
          <h3
            className={cn(
              "font-heading text-lg font-semibold text-foreground transition-colors",
              "group-hover:text-accent-light"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-success">
            {project.result}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-tag px-2 py-0.5 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
