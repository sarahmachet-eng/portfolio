"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-bebas-heading text-xl md:text-2xl leading-none font-normal text-foreground"
          >
            Sarah L. <span className="text-primary">Machet</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {[
              { label: "Accueil", href: "#accueil" },
              { label: "Projets", href: "#projets" },
              { label: "Compétences", href: "#competences" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Sarah Louise Machet - Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
