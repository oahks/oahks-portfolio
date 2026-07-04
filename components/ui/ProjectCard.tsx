"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
        <div className="relative h-48 overflow-hidden bg-section-alt">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded-lg bg-accent/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.industry}
          </div>
          <div className="absolute right-3 top-3 rounded-lg bg-[var(--badge-overlay)] px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.mediaCount}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-accent-light">
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
