import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { CvSection } from "@/components/cv-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-background text-foreground">
      <Navigation />

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <CvSection />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
