"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Process"
          title="How It Works"
          description="A proven 4-step approach to building systems that deliver real results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-3xl font-bold text-accent/30">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-0.5 w-6 bg-accent/20 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
