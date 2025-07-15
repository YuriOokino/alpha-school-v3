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
  tuitionClassName: string
  applicationStatus?: string
  buttonHref?: string
  buttonClassName?: string
  className?: string
  tagClassName?: string
  variant?: 'scheme1' | 'scheme2'
}



export default function LocationCard({ 
  heroImage, 
  name, 
  address, 
  tuition, 
  applicationStatus, 
  buttonHref = "#", 
  buttonClassName = "", 
  className = "", 
  tagClassName = "",
  variant = 'scheme1'
}: LocationCardProps) {
  
  // Variant styles
  const variantStyles = {
    scheme1: {
      card: 'bg-[var(--color-sky-blue)]',
      title: 'text-[var(--color-navy-blue)]',
      text: 'text-[var(--color-navy-blue)]',
      button: 'bg-[var(--color-navy-blue)]',
      buttonText: 'text-white',
      filledTagBg: '!bg-[var(--color-navy-blue)]',
      filledTagText: 'text-[var(--color-sky-blue)]',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-navy-blue)]',
      outlineTagBorder: 'border-[var(--color-navy-blue)]'
    },
    scheme2: {
      card: 'bg-[var(--color-light-green)]',
      title: 'text-[var(--color-dark-green)]',
      text: 'text-[var(--color-dark-green)]',
      button: 'bg-[var(--color-dark-green)]',
      buttonText: 'text-[var(--color-light-green)]',
      filledTagBg: 'bg-[var(--color-dark-green)]',
      filledTagText: 'text-[var(--color-light-green)]',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-dark-green)]',
      outlineTagBorder: 'border-[var(--color-dark-green)]'
    }
  }

  const styles = variantStyles[variant]

  return (
    <Card className={`${styles.card} rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col justify-between border-0 shadow-none w-full max-w-[340px] group ${className}`}>
      <Link href={buttonHref} className="w-full h-[200px] rounded-[var(--radius-sm)] overflow-hidden mb-[var(--space-md)] block relative">
        <Image src={heroImage} alt={name} fill className="object-cover transition-transform duration-300 scale-105 group-hover:scale-100" />
      </Link>
      <div className="flex-1 flex flex-col gap-y-2 min-h-[140px]">
        {applicationStatus && (
          <div className="flex justify-start mb-[var(--space-sm)]">
            <div className={`tag-filled ${styles.filledTagBg} ${styles.filledTagText}`}>{applicationStatus}</div>
          </div>
        )}
        <Link href={buttonHref}>
          <h3 className={`heading-style-h5 ${styles.title}`}>{name}</h3>
        </Link>
        
        <div className={`${styles.text} text-sm flex items-top gap-1`}>
          <span className="material-icons-outlined">location_on</span>
          {address}
        </div>
        {tuition && (
          <div className={`${styles.text} text-sm flex items-center gap-1`}>
            <Link href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank" rel="noopener noreferrer">
              <span className="material-icons-outlined cursor-pointer">info</span>
            </Link>
            <span className="text-icon-centered">Tuition: {tuition}</span>
          </div>
        )}
      </div>
      <Button href={buttonHref} className={`w-full mt-[var(--space-sm)] ${styles.button} ${styles.buttonText} ${buttonClassName}`}>Apply now<span className="material-icons-outlined">arrow_forward</span></Button>
    </Card>
  )
} 