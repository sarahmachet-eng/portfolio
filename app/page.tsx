import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

const HomeBelowFold = dynamic(
  () =>
    import("@/components/home-below-fold").then((m) => ({
      default: m.HomeBelowFold,
    })),
  { loading: () => <BelowFoldPlaceholder /> }
)

function BelowFoldPlaceholder() {
  return (
    <div className="w-full py-20 px-6" aria-hidden>
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="mx-auto h-12 max-w-sm animate-pulse rounded-md bg-muted/20" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="aspect-video animate-pulse rounded-xl bg-muted/15" />
          <div className="aspect-video animate-pulse rounded-xl bg-muted/15" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-background text-foreground">
      <Navigation />

      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      <HomeBelowFold />

      <Footer />
    </main>
  )
}
