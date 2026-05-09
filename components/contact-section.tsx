"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

/** Remplace par tes liens */
const MAIL_HREF = "mailto:sarah.machet@gmail.com"
const LINKEDIN_HREF = "www.linkedin.com/in/sarah-louise-machet-04a5b63a0"
const BEHANCE_HREF = "https://www.behance.net/gallery/249053433/Portfolio"

/** Logo LinkedIn officiel (marque dans le carré arrondi) */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  )
}

const iconLinkClass =
  "inline-flex items-center justify-center w-14 h-14 rounded-full border border-border bg-card text-foreground hover:border-primary/60 hover:text-primary hover:bg-secondary/40 transition-colors neon-card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <motion.h2
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
        <span className="text-white">Me </span>
        <span className="text-primary">Contacter</span>
      </motion.h2>
      <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto text-pretty">
        Retrouvez-moi sur mes réseaux sociaux.
      </p>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        <a
          href={MAIL_HREF}
          className={iconLinkClass}
          aria-label="Envoyer un e-mail"
        >
          <Mail className="w-7 h-7" strokeWidth={2} />
        </a>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClass}
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-7 h-7" />
        </a>
        <a
          href={BEHANCE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClass}
          aria-label="Behance"
        >
          <BehanceIcon className="w-7 h-7" />
        </a>
      </div>
    </section>
  )
}
