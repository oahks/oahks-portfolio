"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Skills"
          title="Tools & Expertise"
          description="The platforms and skills I use to design, build, and ship marketing systems that hold up in production."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent-light transition-colors hover:bg-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
