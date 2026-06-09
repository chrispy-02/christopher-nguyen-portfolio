import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DownloadIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Christopher Nguyen's resume — a backend engineer with application security experience.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHeading
          as="h1"
          eyebrow="Resume"
          title="Resume"
          description="A one-page summary of my experience, projects, and skills."
        />
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.resumePath} download variant="primary">
            <DownloadIcon className="h-4 w-4" />
            Download PDF
          </ButtonLink>
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
            <MailIcon className="h-4 w-4" />
            Email me
          </ButtonLink>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border bg-surface-2">
        <object
          data={`${siteConfig.resumePath}#view=FitH`}
          type="application/pdf"
          className="h-[82vh] min-h-[560px] w-full"
          aria-label="Christopher Nguyen resume preview"
        >
          <div className="flex flex-col items-center gap-4 p-10 text-center">
            <p className="text-muted">
              Your browser can&apos;t display the embedded PDF preview.
            </p>
            <ButtonLink href={siteConfig.resumePath} download variant="primary">
              <DownloadIcon className="h-4 w-4" />
              Download the resume (PDF)
            </ButtonLink>
          </div>
        </object>
      </div>
    </Container>
  );
}
