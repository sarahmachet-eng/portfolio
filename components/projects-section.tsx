"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const tools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "Procreate",
  "Figma",
  "Canva",
]

const projects = [
  {
    id: 1,
    title: "Site internet",
    description: "Création de site web pour un anniversaire",
    image: "/images/project-1.jpg",
    tags: ["Développement web", "Cursor", "Responsive Design"],
  },
  {
    id: 2,
    title: "Groove App",
    description: "Création d'une mascotte pour une application de streaming de musique",
    image: "/images/project-2.jpg",
    tags: ["UI Design", "Mobile App", "Character design"],
  },
  {
    id: 3,
    title: "Illustration",
    description: "Création de designs pour des prints",
    image: "/images/project-3.jpg",
    tags: ["Illustration", "Graphisme"],
  },
  {
    id: 4,
    title: "Projet NexGen",
    description: "Identité visuelle complète pour un projet de site web",
    image: "/images/project-4.jpg",
    tags: ["Branding", "Logo", "Identité visuelle"],
  },
]

type Project = (typeof projects)[number]

export function ProjectsSection() {
  const marqueeItems = [...tools, ...tools, ...tools]
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

  return (
    <section id="projets" className="relative py-24 px-6">
      <motion.span
        className="pointer-events-none absolute left-8 mt-4 text-primary/70 text-2xl kawaii-sparkle"
        animate={{ y: [0, -8, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
      </motion.span>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-none uppercase text-center"
  style={{
    fontFamily: "var(--font-bebas)",
    letterSpacing: "0.04em",
    textShadow: "0 0 20px rgba(255,255,255,0.08)",
  }}
>
  <span className="text-white">Mes </span>
  <span className="text-primary">Projets</span>
</motion.h1>


        {/* Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 overflow-hidden rounded-full border border-border bg-card/70 py-4 neon-card"
        >
          <motion.div
            className="flex w-max items-center gap-14 px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 34, ease: "linear", repeat: Infinity }}
          >
            {marqueeItems.map((tool, index) => (
              <div key={`${tool}-${index}`} className="flex items-center gap-7 whitespace-nowrap">
                <span className="text-sm font-medium text-muted-foreground">{tool}</span>
                <span className="text-primary text-base leading-none neon-pill">✦</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors neon-card"
            >
              <button
                type="button"
                onClick={() => setLightboxProject(project)}
                className="relative aspect-16/10 w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Agrandir l’image : ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
              </button>

              <div className="p-4">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={lightboxProject !== null}
        onOpenChange={(open) => !open && setLightboxProject(null)}
      >
        <DialogContent
          className="max-h-[90vh] w-[min(96vw,1100px)] max-w-[min(96vw,1100px)] gap-0 overflow-hidden border-border bg-card p-3 sm:p-4"
          showCloseButton
        >
          {lightboxProject ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{lightboxProject.title}</DialogTitle>
              </DialogHeader>
              <div className="flex max-h-[calc(90vh-3rem)] w-full items-center justify-center overflow-auto">
                <Image
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  width={1400}
                  height={900}
                  className="h-auto max-h-[calc(90vh-4rem)] w-full object-contain"
                  sizes="(max-width: 1100px) 96vw, 1100px"
                  priority={false}
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">
                {lightboxProject.title}
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
