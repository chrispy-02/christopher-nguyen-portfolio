import { Hero } from "@/sections/Hero";
import { FocusAreas } from "@/sections/FocusAreas";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { siteConfig } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christopher Nguyen",
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Backend & Application Security Engineer",
  description: siteConfig.description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Michigan State University",
  },
  knowsAbout: [
    "Application Security",
    "Backend Engineering",
    "OWASP ZAP",
    "Flask",
    "Node.js",
    "MySQL",
    "Docker",
    "CI/CD",
  ],
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data for search engines; content is static and trusted.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <FocusAreas />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
