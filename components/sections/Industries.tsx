"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data/industries";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Industries"
          title="Industries I Serve"
          description="Experience across diverse sectors tailored automation and marketing strategies."
          align="center"
          descriptionClassName="max-w-none"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent/30 hover:bg-card-hover"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <industry.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
