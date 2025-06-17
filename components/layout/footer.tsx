"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-muted)] text-[var(--color-text-main)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/assets/logo-white.svg" 
                alt="Alpha School Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto" 
                style={{ filter: 'invert(1)' }}
              />
            </Link>
            <p className="mb-4">admissions@alpha.school</p>
          </div>

          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-2 pb-0">About</h3>
            <ul className="space-y-2">
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

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-2 pb-0">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/video-libary">
                  Alpha in Action
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/bring-alpha-to-your-city">
                  Alpha Micro Schools
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-2 pb-0">Insights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news">
                  In the News
                </Link>
              </li>
              <li>
                <Link href="#">
                  AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Schools */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-2 pb-0">Other Schools</h3>
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

      {/* Bottom Footer */}
     
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm">Copyright 2025 © All Right Reserved Alpha School</div>
        </div>
      
    </footer>
  )
}
