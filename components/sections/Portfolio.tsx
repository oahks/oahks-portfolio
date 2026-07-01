"use client";

import { useState } from "react";
import { projects, projectCategories, type Project } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FilterPills } from "@/components/ui/FilterPills";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";

type FilterId = (typeof projectCategories)[number]["id"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-black/20">
      <div className="container-max">
        <SectionHeader
          label="Portfolio"
          title={`${projects.length}+ real systems built for real clients`}
          description="Real builds grouped by type. Click any project for the full case study."
        />

        <FilterPills
          options={projectCategories}
          active={activeFilter}
          onChange={setActiveFilter}
          className="mb-10"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
