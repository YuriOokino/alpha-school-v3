"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Divider from "@/components/layout/divider"

export default function WhatsNextSection() {
  return (
    <section className="pb-16 bg-[var(--color-primary)] text-white">
      <Divider fill="white" direction="up" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="my-12 display-headline text-white">What's next?</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/learn-more">
            <Button className="bg-white text-black">Learn More</Button>
          </Link>
          <Link href="/events">
            <Button className="bg-[var(--color-primary)]">View Events</Button>
          </Link>
          <Link href="/video-library">
            <Button className="bg-[var(--color-primary)]">Watch Videos</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
