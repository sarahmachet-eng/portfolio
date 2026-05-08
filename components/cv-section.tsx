"use client"

import { motion } from "framer-motion"

export function CvSection() {
  return (
    <section id="competences" className="relative pt-16 pb-24 px-6 bg-card/50">
    
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
 <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-none uppercase"
  style={{
    fontFamily: "var(--font-bebas)",
    letterSpacing: "0.04em",
    textShadow: "0 0 20px rgba(255,255,255,0.08)",
  }}
>
<span className="text-white">Mes </span>
<span className="text-primary">Compétences</span>
</motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-background/70 p-6 md:p-8 neon-card"
        >

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-3">Hard Skills</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Création de contenus visuels et vidéo
                (Photoshop, Canva)</li>
                <li>Création et gestion d’un intranet
                (SharePoint)</li>
                <li>Mise à jour et administration de sites (WordPress)</li>
                <li>Création de contenus pour réseaux sociaux</li>
                <li>Élaboration d'une stratégie de
                communication</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-3">Expériences clés</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Chargée de communication en alternance - ADSEAAV (Septembre 2025 - Septembre 2026)</li>
                <li>Chargée de communication stagiaire - ADSEAAV 
                  (Mars 2025 - Août 2025)</li>
                <li>Chargée de communication stagiaire - Varnat 
                  (Mars 2024)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Télécharger mon CV (PDF)
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
