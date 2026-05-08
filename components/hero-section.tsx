"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
{/* Star Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(80)].map((_, i) => (
    <div
      key={i}
      className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-30 animate-pulse"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ))}
</div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible pour de nouveaux projets</span>
          </motion.div>

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
<span className="text-white">Communication</span>
<br />
<span className="text-white opacity-70">&</span>{" "}
<span className="text-primary">Design</span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0 text-pretty"
          > Diplômée d’un Master en Création Numérique en alternance, 
              je suis à la recherche d’un emploi à temps plein ou temps 
              partiel à partir d’octobre 2026. 
              Passionnée par l’univers de la communication et de la créativité 
              digitale, j’ai eu l’opportunité, au cours de mes études, de développer 
              des compétences très variées, notamment dans la conception visuelle 
              ou encore dans la gestion de projets numériques.  
             </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Voir mes projets
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="-rotate-45">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
            >
              Me contacter
            </a>
          </motion.div>

        </motion.div>
{/* Avatar Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center"
>
  <Image
    src="/images/hero-avatar.png"
    alt="Portrait"
    width={700}
    height={700}
    className="w-auto h-auto"
    priority
  />
</motion.div>
      </div>
    </section>
  )
}
