"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ExternalLink,
  Send,
  CheckCircle,
} from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CalendlyInlineEmbed } from "@/components/ui/CalendlyInlineEmbed";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Contact"
          title="Ready to Get Started?"
          description="Ready to automate your business and generate more leads? Let's build a system that works for you."
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="glass flex flex-col items-center justify-center rounded-2xl p-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-success" />
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-muted">
                  Thank you for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="+234 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Direct Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Upwork"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-2xl">
              <div className="border-b border-border p-4">
                <h3 className="font-heading font-semibold text-foreground">
                  Book a Discovery Call
                </h3>
                <p className="mt-1 text-sm text-muted">
                  30 min · No commitment · {siteConfig.location} (WAT)
                </p>
              </div>
              <div className="overflow-hidden bg-input">
                <CalendlyInlineEmbed />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
