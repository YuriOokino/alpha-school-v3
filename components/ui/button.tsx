import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-neutral-800 [&[href]]:text-white",
        destructive: "bg-black text-white hover:bg-neutral-800",
        outline: "text-black outline outline-black hover:opacity-50",
        secondary: "bg-black text-white hover:bg-neutral-800",
        ghost: "bg-black text-white hover:bg-neutral-800",
        link: "underline-offset-4",
        lightBlue: "bg-[#D6F0FF] text-black hover:bg-[#b3e4ff]",
        maroon: "bg-[#5C2727] text-white hover:bg-[#7a3535] hover:text-white",
        pink: "bg-[#FFD1D1] text-[#5C2727] hover:bg-[#ffb3b3]",
        filter: "bg-[black] text-white rounded-full px-4 py-2 font-semibold shadow-none border-0",
        filterOutline: "bg-transparent text-[black] border border-[black] rounded-full px-4 py-2 font-semibold shadow-none focus:ring-2 focus:ring-[#60a5fa]"
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonBaseProps = {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsAnchor = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))
    if (href) {
      // Remove props that are not valid for <a>
      const { type, ...anchorProps } = props as ButtonAsAnchor
      return (
        <Link href={href} passHref legacyBehavior>
          <a className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps}>
            {props.children}
          </a>
        </Link>
      )
    }
    return (
      <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props as ButtonAsButton} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
