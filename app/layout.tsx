import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navigation/navbar"
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
      <body className={workSans.className + " overflow-x-hidden"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            
            <WhatsNextSection />
            <Footer />
          </div>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global phone number validation
              document.addEventListener('DOMContentLoaded', function() {
                function setupPhoneValidation() {
                  const phoneInputs = document.querySelectorAll('input[name="phone"], input[id="phone"], input[type="tel"]');
                  
                  phoneInputs.forEach(function(input) {
                    // Set type to tel for better mobile keyboard
                    input.type = 'tel';
                    
                    // Add pattern for HTML5 validation
                    input.pattern = '[0-9]*';
                    
                    // Prevent non-numeric input
                    input.addEventListener('keypress', function(e) {
                      const char = String.fromCharCode(e.which);
                      if (!/\\d/.test(char) && e.which !== 8) {
                        e.preventDefault();
                      }
                    });
                    
                    // Prevent paste of non-numeric content
                    input.addEventListener('paste', function(e) {
                      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                      if (!/^[0-9]+$/.test(pastedText)) {
                        e.preventDefault();
                      }
                    });
                  });
                }
                
                // Global email validation
                function setupEmailValidation() {
                  const emailInputs = document.querySelectorAll('input[type="email"], input[name="email"], input[id="email"]');
                  
                  emailInputs.forEach(function(input) {
                    // Skip if already processed
                    if (input.dataset.emailValidation === 'true') {
                      return;
                    }
                    
                    // Mark as processed
                    input.dataset.emailValidation = 'true';
                    
                    // Ensure type is email
                    input.type = 'email';
                    
                    // Email validation regex
                    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                    
                    function validateEmail() {
                      const value = input.value.trim();
                      const fieldWrapper = input.closest('.field-wrapper');
                      
                      if (!fieldWrapper) return;
                      
                      // Remove existing error message
                      const existingError = fieldWrapper.querySelector('.email-error');
                      if (existingError) {
                        existingError.remove();
                      }
                      
                      // Remove error styling
                      fieldWrapper.classList.remove('error');
                      
                      // Validate if there's a value
                      if (value && !emailRegex.test(value)) {
                        // Add error styling only to field-wrapper
                        fieldWrapper.classList.add('error');
                        
                        // Create and insert error message
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'email-error text-red-500 text-xs mt-1';
                        errorMessage.textContent = 'Please enter a valid email address';
                        
                        // Insert after the input
                        fieldWrapper.appendChild(errorMessage);
                      }
                    }
                    
                    // Validate on blur (when user clicks away)
                    input.addEventListener('blur', validateEmail);
                    
                    // Clear errors when user starts typing again
                    input.addEventListener('input', function() {
                      const fieldWrapper = input.closest('.field-wrapper');
                      if (!fieldWrapper) return;
                      
                      // Remove error styling and message when user starts typing
                      fieldWrapper.classList.remove('error');
                      
                      const existingError = fieldWrapper.querySelector('.email-error');
                      if (existingError) {
                        existingError.remove();
                      }
                    });
                  });
                }
                
                // Run on page load
                setupPhoneValidation();
                setupEmailValidation();
                
                // Run again after a short delay to catch React-rendered components
                setTimeout(function() {
                  setupPhoneValidation();
                  setupEmailValidation();
                }, 100);
                
                // Run on window load to ensure all components are rendered
                window.addEventListener('load', function() {
                  setupPhoneValidation();
                  setupEmailValidation();
                });
                
                // Run on dynamic content changes (for SPA navigation)
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                      setupPhoneValidation();
                      setupEmailValidation();
                    }
                  });
                });
                
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              });
            `
          }}
        />
      </body>
    </html>
  )
}
