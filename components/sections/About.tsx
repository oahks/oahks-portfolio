"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every system I build is measured by real business outcomes — more leads, more revenue, less manual work.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description:
      "Your business goals come first. I listen, understand, and build solutions tailored to your unique needs.",
  },
  {
    icon: Zap,
    title: "Efficiency First",
    description:
      "Automation should save time and reduce errors. I design systems that run reliably without constant oversight.",
  },
];

const highlights = [
  "3+ years building GoHighLevel CRM systems and sales funnels",
  "100+ automation workflows deployed across multiple industries",
  "Expert in email/SMS marketing, social media, and video content",
  "Certified in Zapier, Make.com, and AI chatbot integrations",
  "Helped businesses across Nigeria and internationally scale operations",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="About"
          title="The Person Behind the Systems"
          description={`Hi, I'm ${siteConfig.name} — a marketing automation specialist and business growth consultant based in ${siteConfig.location}.`}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              I specialize in helping businesses streamline operations, automate
              repetitive tasks, improve lead management, and create scalable
              systems that drive growth. My expertise spans GoHighLevel, CRM
              automation, sales funnels, email and SMS marketing, social media
              management, and video content creation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I&apos;m passionate about using technology and automation to increase
              efficiency, improve customer experiences, and help businesses save
              time while achieving better results.
            </p>

            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Mission Statement
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                To empower businesses with smart marketing systems and automation
                that generate leads, nurture prospects, and scale revenue — so
                owners can focus on what matters most.
              </p>
            </div>

            <div className="mt-8">
              <Button href="#contact">Work With Me</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              Core Values
            </h3>
            <div className="space-y-4">
              {values.map((value) => (
                <GlassCard key={value.title} className="!p-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <value.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {value.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <h3 className="mb-4 mt-8 font-heading text-lg font-semibold text-foreground">
              Career Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
