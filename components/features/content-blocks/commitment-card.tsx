import React from "react"
import { Button } from "@/components/ui/button"

function CommitmentIcon() {
  // 2x2 grid of light blue dots
  return (
    <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
    </div>
  )
}

interface CommitmentCardProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export default function CommitmentCard({ title, description, buttonText, buttonHref }: CommitmentCardProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <CommitmentIcon />
      <h3 className="card-header text-white mb-[var(--space-sm)]">{title}</h3>
      <p className="body-text text-white mb-[var(--space-md)]">{description}</p>
      {buttonText && (
        <Button
          className="bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] centered-icon-text"
        >
          {buttonText}
          <span className="material-icons-outlined">arrow_forward</span>
        </Button>
      )}
    </div>
  )
}
