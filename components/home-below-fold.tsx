"use client"

import { ProjectsSection } from "@/components/projects-section"
import { CvSection } from "@/components/cv-section"
import { ContactSection } from "@/components/contact-section"

/** Regroupe le JS sous la ligne de flottaison en un seul chunk + un seul état de chargement. */
export function HomeBelowFold() {
  return (
    <>
      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <CvSection />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </section>
    </>
  )
}
