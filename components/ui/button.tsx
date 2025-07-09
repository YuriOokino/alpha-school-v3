import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "px-5 py-2 bg-black text-white hover:bg-neutral-800",
        outline: "px-5 py-1.5 text-black outline outline-black hover:opacity-50",
        primary: "bg-[var(--color-primary)] text-white hover:opacity-70",
        link: "font-semibold",
        lightBlue: "bg-[var(--color-primary-light)] text-[var(--color-primary)] hover:opacity-70",
        maroon: "bg-[var(--color-warm-dark)] text-white hover:opacity-70",
        pink: "bg-[var(--color-warm)] text-[var(--color-warm0dar)] hover:opacity-70",
        filter: "bg-[black] text-white rounded-full px-4 py-2 font-semibold shadow-none border-0",
        filterOutline: "bg-transparent text-[black] border border-[black] rounded-full px-4 py-2 font-semibold shadow-none focus:ring-2 focus:ring-[#60a5fa]",
        square: "rounded-[2px]"
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
