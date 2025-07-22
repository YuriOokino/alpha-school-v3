import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navigation/navbar"
import { NewsBanner } from "@/components/layout/navigation/news-banner"
import Footer from "@/components/layout/navigation/footer"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"

const inter = Inter({ subsets: ["latin"] })
const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alpha School",
  description: "Empowering students through innovative education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className={workSans.className + " overflow-x-hidden"} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <NewsBanner />
            <Navbar />
            <main className="flex-grow bg-white">
              {children}
            </main>
            
            <WhatsNextSection />
            <Footer />
          </div>
        </ThemeProvider>
        <script
          
        />
      </body>
    </html>
  )
}
