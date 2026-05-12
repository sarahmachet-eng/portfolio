"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionStars } from "@/components/section-stars"

const skills = [
  { name: "Illustration", level: 95 },
  { name: "UI/UX Design", level: 88 },
  { name: "Branding", level: 85 },
  { name: "Motion Design", level: 75 },
]

const tools = [
  "Procreate",
  "Photoshop",
  "Illustrator",
  "Figma",
  "After Effects",
  "Clip Studio",
]

export function AboutSection() {
  return (
    <section id="apropos" className="relative overflow-hidden py-24 px-6 bg-card/50">
      <SectionStars />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src="/images/hero-avatar.png"
                  alt="Luna Noir - À propos"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-6 top-1/4 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold font-display">3+</div>
                <div className="text-xs opacity-80">ans d&apos;expérience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 1l2 4 4.5.5-3.25 3 .75 4.5L8 11l-4 2 .75-4.5L1.5 5.5 6 5l2-4z" fill="currentColor" />
              </svg>
              <span className="text-sm text-muted-foreground">À propos de moi</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Créatrice d&apos;univers <span className="text-primary">magiques</span> et <span className="text-accent">mystérieux</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
              Diplômée d’un Master en Création Numérique en alternance, 
              je suis à la recherche d’un emploi à temps plein ou temps 
              partiel à partir d’octobre 2026. 
              </p>
              <p>
              Passionnée par l’univers de la communication et de la créativité 
              digitale, j’ai eu l’opportunité, au cours de mes études, de développer 
              des compétences très variées, notamment dans la conception visuelle 
              ou encore dans la gestion de projets numériques.  
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold mb-4">Compétences</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Outils</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
