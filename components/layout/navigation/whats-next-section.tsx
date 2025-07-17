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
          
            <Button variant="outline" className="!outline-white" size="small" href="/learn-more">Learn More<span className="material-icons-outlined">arrow_circle_right</span></Button>
          
          
            <Button variant="outline" className="!outline-white" size="small"href="/events">View Events<span className="material-icons-outlined">arrow_circle_right</span></Button>
     

            <Button variant="outline" className="!outline-white" size="small"href="/video-library">Watch Videos<span className="material-icons-outlined">arrow_circle_right</span></Button>

        </div>
      </div>
    </section>
  )
}
