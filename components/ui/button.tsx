import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center px-5 py-2 gap-2 whitespace-nowrap disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:opacity-70",
        outline: "text-black outline outline-black hover:opacity-70",
        link: "font-semibold",
        lightBlue: "bg-[var(--color-sky-light)] text-[var(--color-navy-blue)] hover:opacity-80",
        navyBlue: "bg-[var(--color-navy-blue)] text-white hover:opacity-80",
        filter: "uppercase py-1.5 bg-[var(--color-light-green)] text-sm text-[var(--color-dark-green)]",
        filterOutline: "uppercase py-1.5  bg-transparent text-sm text-[var(--color-dark-green)] border border-[var(--color-dark-green)]",
        square: "rounded-[2px]",
        underline: "underline"
      },
      size: {
        small: "rounded-full px-5 py-1.5 text-xs uppercase font-medium",
        fullWidth: "w-full rounded-full",
        icon: "px-4 py-4"
      },
      radius:{
        default: "rounded-full",
        small: "rounded-[4px]"
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "default"
    },
  }
)

type ButtonBaseProps = {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  radius?: VariantProps<typeof buttonVariants>["radius"]
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsAnchor = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, radius, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, radius, className }))
    if (href) {
      // Remove props that are not valid for <a>
      const { type, ...anchorProps } = props as ButtonAsAnchor
      return (
        <Link href={href} passHref legacyBehavior>
          <a className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps}>
            {children}
          </a>
        </Link>
      )
    }
    return (
      <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props as ButtonAsButton}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
