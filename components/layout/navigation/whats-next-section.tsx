"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhatsNextSection() {
  return (
    <section className="pb-16 bg-[var(--color-bg-muted)] text-[var(--color-text-main)]">
      <div className="bg-[var(--color-bg-muted)]">
        <svg width="1440" height="83" viewBox="0 0 1440 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1440C1440 0 1003.04 83 720 83C436.96 83 0 0 0 0Z" fill="white"/>
        </svg>
      </div>
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
