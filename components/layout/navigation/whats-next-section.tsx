"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Divider from "@/components/layout/divider"

export default function WhatsNextSection() {
  return (
    <section className="pb-16 bg-[var(--color-bg-muted)] text-[var(--color-text-main)]">
      <Divider fill="white" direction="up" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="my-12">What's next?</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/learn-more">
            <Button variant="default">Learn More</Button>
          </Link>
          <Link href="/events">
            <Button variant="default">View Events</Button>
          </Link>
          <Link href="/video-library">
            <Button variant="default">Watch Videos</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
