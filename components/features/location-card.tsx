"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface LocationCardProps {
  heroImage: string
  name: string
  address: string
  tuition: string
  applicationStatus?: string
  buttonHref?: string
  buttonClassName?: string
  className?: string
}

const InfoIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-1 align-text-bottom cursor-pointer">
    <path d="M10 12.3334L14 7.33337H11V0.333374H9V7.33337H6L10 12.3334Z" fill="currentColor"/>
    <path d="M18 14.3334H2V7.33337H0V14.3334C0 15.4364 0.897 16.3334 2 16.3334H18C19.103 16.3334 20 15.4364 20 14.3334V7.33337H18V14.3334Z" fill="currentColor"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-text-bottom mr-1">
    <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
    <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
  </svg>
)

export default function LocationCard({ heroImage, name, address, tuition, applicationStatus, buttonHref = "#", buttonClassName = "", className = "" }: LocationCardProps) {
  return (
    <Card className={`scheme-pink rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col justify-between border-0 shadow-none max-w-[340px] flex-shrink-0 group ${className}`} style={{ height: 480, width: 340 }}>
      <Link href={buttonHref} className="w-full h-[200px] rounded-[var(--radius-sm)] overflow-hidden mb-[var(--space-md)] block relative">
        <Image src={heroImage} alt={name} fill className="object-cover transition-transform duration-300 scale-105 group-hover:scale-100" />
      </Link>
      <div className="flex-1 flex flex-col gap-y-2">
        <Link href={buttonHref}>
          <h3 className="font-bold text-[var(--color-warm-dark)]">{name}</h3>
        </Link>
        {applicationStatus && (
          <div className="text-[var(--color-warm-dark)] font-semibold">{applicationStatus}</div>
        )}
        <div className="text-[var(--color-warm-dark)] text-sm flex items-top gap-1">
          <LocationIcon />
          {address}
        </div>
        {tuition && (
          <div className="text-[var(--color-warm-dark)] text-sm flex items-center gap-1">
            <Link href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank" rel="noopener noreferrer">
              <InfoIcon />
            </Link>
            <span className="font-bold">Tuition: {tuition}</span>
          </div>
        )}
      </div>
      <Button href={buttonHref} variant="maroon" className={`w-full mt-[var(--space-sm)] ${buttonClassName}`}>Apply now</Button>
    </Card>
  )
} 