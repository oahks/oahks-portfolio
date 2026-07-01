"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
  index?: number;
};

export function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
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
        <div
          className={cn(
            "relative flex h-48 items-center justify-center bg-gradient-to-br",
            project.imageGradient
          )}
        >
          <div className="absolute left-3 top-3 rounded-lg bg-accent/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.industry}
          </div>
          <div className="absolute right-3 top-3 rounded-lg bg-[var(--badge-overlay)] px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.mediaCount}
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <svg
              className="h-10 w-10 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent-light transition-colors">
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
