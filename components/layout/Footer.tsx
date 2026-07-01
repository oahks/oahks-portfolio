import { siteConfig } from "@/lib/site-config";
import { ExternalLink } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black/40">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-bold text-foreground">
              {siteConfig.name}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              {siteConfig.title} helping businesses automate operations,
              generate leads, and scale revenue.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="Upwork"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
