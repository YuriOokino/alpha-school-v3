"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto p-[var(--space-md)] md:p-[var(--space-lg)]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo and Contact - Left Side */}
          <div className="flex flex-col gap-4 md:w-64 md:flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/logo-white.svg" 
                alt="Alpha School Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto" 
              />
            </Link>
            <a href="mailto:admissions@alpha.school">admissions@alpha.school</a>
            <div className="w-16"><a href="https://home.cognia.org/#/registry" target="blank"><img src="/assets/cognia-logo.png"></img></a></div>
          </div>

          {/* Link Columns - Right Side */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:flex-1">
            {/* About Alpha */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-base font-medium mb-2 pb-0">About Alpha</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/the-program">
                    The Program
                  </Link>
                </li>
                <li>
                  <Link href="/the-program#love-school">
                    Love School
                  </Link>
                </li>
                <li>
                  <Link href="/the-program#learn-2x">
                    Learn 2x in 2hrs
                  </Link>
                </li>
                <li>
                  <Link href="/the-program#learn-life-skills">
                    Learn Life Skills
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Parents */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-base font-medium mb-2 pb-0">For Parents</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/admission">
                    Admission Guide
                  </Link>
                </li>
                <li>
                  <Link href="/admission-forms">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/learn-more">
                    Learn More
                  </Link>
                </li>
                <li>
                  <Link href="/guides">
                    Meet Our Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-base font-medium mb-2 pb-0">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/video-library">
                    Alpha in Action
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    Events & Programs
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Partner Schools */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-base font-medium mb-2 pb-0">Partner Schools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">
                    Future of Education
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    GT School
                  </Link>
                </li>
                <li>
                  <Link href="https://sportsacademy.school/">
                    Texas Sports Academy
                  </Link>
                </li>
                <li>
                  <Link href="http://nextgenacademy.school/">
                    NextGen Academy
                  </Link>
                </li>
                <li>
                  <Link href="http://valenta.school">
                    Valenta Academy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div>
        <div className="mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm">Copyright 2025 © All Right Reserved Alpha School</div>
        </div>
      </div>
    </footer>
  )
}
