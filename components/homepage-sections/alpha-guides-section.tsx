"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { guides } from "@/content/guides"
import SectionHeading from "@/components/layout/headings/section-heading"
import Carousel from "@/components/ui/carousel"
import GuideCard from "@/components/features/cards/guide-card"

const benefits = [
  {
    title: "GUIDANCE",
    description: "Adults, whether teachers or parents, become 'Guides', shifting the traditional teacher-student relationship to offer motivational and emotional support."
  },
  {
    title: "SUPPORT",
    description: "Assist students with AI-powered learning, help them develop life skills, and pursue their passions."
  },
  {
    title: "MOTIVATION",
    description: "We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning."
  }
];

type Guide = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function AlphaGuidesSection() {
  return (
    <section className="alpha-section bg-white">
      <SectionHeading title="More than Teachers: The Alpha Guides" description="At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to supporting students' emotional and motivational needs and teaching life skills. This impactful transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners." 
      buttonText="Explore our program"
      className="text-[var(--color-dark-green)]"
      buttonHref="/the-program"
      buttonVariant="darkGreen"/>
    
      
      <div className="alpha-card !p-[var(--space-lg)] flex text-[var(--color-dark-green)] flex-row flex-row gap-[var(--space-md)] mb-[var(--space-xl)] bg-[var(--color-light-green)]">
   
        <div className="flex-1 flex-col justify-between">
          
            <div className="mb-[var(--space-lg)]">
              <svg width="72" height="75" viewBox="0 0 72 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 0C55.8823 0 72 16.1177 72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0ZM56.3721 18.6348C57.1894 16.7523 55.2789 14.8417 53.3965 15.6592L27.9053 26.7295C27.3795 26.9578 26.9598 27.3776 26.7314 27.9033L15.6611 53.3945C14.8438 55.2768 16.7544 57.1873 18.6367 56.3701L44.1279 45.2998C44.6537 45.0715 45.0734 44.6518 45.3018 44.126L56.3721 18.6348Z" fill="var(--color-dark-green)"/>
                <circle cx="36" cy="36.1881" r="5.08901" fill="var(--color-dark-green)"/>
              </svg>
            </div>
            <h3 className="display-headline !text-[45px] mb-2">{benefits[0].title}</h3>
            <p className="mb-4 h-full">{benefits[0].description}</p>
        
        </div>


        <div className="flex-1 flex-col justify-between">
          
            <div className="mb-[var(--space-lg)]">
              <svg width="86" height="75" viewBox="0 0 86 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.3838 28.1758C78.4464 30.2999 85.9999 39.2292 86 49.9238C85.9999 55.5176 83.9324 60.6281 80.5215 64.5352C80.7888 65.3745 81.1122 66.2021 81.7344 67.0596C82.3807 67.9501 83.356 68.8837 84.9395 69.8945C85.1827 70.0499 85.2925 70.3142 85.2695 70.5605C85.2462 70.8101 85.0846 71.0461 84.7959 71.127C82.7451 71.7011 79.7547 72.0544 77.1641 71.5146C75.9587 71.2635 75.1208 70.9673 74.5176 70.6943C73.9171 70.4225 73.5447 70.1716 73.2998 70.0312C73.2938 70.0277 73.2883 70.0222 73.2822 70.0186C70.3986 71.3858 67.174 72.1523 63.7705 72.1523C57.295 72.1521 51.467 69.3824 47.4043 64.9639C59.8992 59.0186 68.537 46.2797 68.5371 31.5215C68.5371 30.3936 68.4825 29.2779 68.3838 28.1758Z" fill="var(--color-dark-green)"/>
                <path d="M31.8857 0C49.4953 0.000225772 63.7712 14.2762 63.7715 31.8857C63.7715 49.4955 49.4955 63.7713 31.8857 63.7715C26.9894 63.7714 22.3517 62.6655 18.2061 60.6934C18.1994 60.6972 18.1931 60.7032 18.1865 60.707C17.8391 60.9014 17.3127 61.2633 16.4531 61.6572C15.5876 62.0539 14.3743 62.4887 12.6094 62.8564C8.90001 63.6292 4.61364 63.1241 1.67285 62.3008C1.2926 62.1943 1.08065 61.884 1.0498 61.5547C1.01947 61.2286 1.16494 60.8783 1.48828 60.6719C3.77196 59.2141 5.18255 57.8648 6.11914 56.5742C7.03142 55.3169 7.5005 54.105 7.88867 52.8799C2.97782 47.271 0 39.9264 0 31.8857C0.000296296 14.2762 14.2761 0.00014381 31.8857 0ZM31.6084 43.6045C30.4992 43.6045 29.5916 43.9981 28.8857 44.7852C28.2135 45.5329 27.877 46.5365 27.877 47.7959C27.877 49.0553 28.2135 50.0589 28.8857 50.8066C29.5916 51.5544 30.4991 51.9287 31.6084 51.9287C32.7512 51.9287 33.6588 51.5544 34.3311 50.8066C35.0369 50.0589 35.3896 49.0553 35.3896 47.7959C35.3896 46.5365 35.0369 45.5329 34.3311 44.7852C33.6588 43.9981 32.7512 43.6045 31.6084 43.6045ZM32.2637 11.8438C29.9444 11.8438 27.9272 12.2767 26.2129 13.1426C24.4988 14.0084 23.1039 15.2085 22.0283 16.7432C21.2817 17.8086 20.7054 18.9977 20.2988 20.3096C19.971 21.3676 20.5233 22.4688 21.501 22.9893C23.0999 23.8402 25.025 22.7489 25.8291 21.126C26.1636 20.4508 26.5775 19.8554 27.0703 19.3408C28.314 18.0421 29.928 17.3926 31.9111 17.3926C33.3227 17.3926 34.4821 17.6294 35.3896 18.1016C36.3308 18.5345 37.02 19.2033 37.457 20.1084C37.9276 20.9742 38.1631 22.0173 38.1631 23.2373C38.1631 24.4967 37.8943 25.5792 37.3564 26.4844C36.8186 27.3502 35.894 28.0786 34.583 28.6689C33.9061 28.9737 33.0857 29.2464 32.1221 29.4883C30.3705 29.9279 29.0372 31.4226 29.0371 33.2285V36.3701C29.0371 37.8223 30.2139 38.9998 31.666 39C33.0923 39 34.2588 37.8624 34.2949 36.4365L34.3105 35.8174C34.3513 34.2152 35.5672 32.9221 37.0918 32.4277C37.8168 32.1927 38.5103 31.9038 39.1719 31.5615C40.6171 30.7744 41.7603 29.6331 42.6006 28.1377C43.4745 26.6028 43.9111 24.6736 43.9111 22.3516C43.9111 20.1084 43.4068 18.2194 42.3984 16.6846C41.4236 15.1103 40.0624 13.9095 38.3145 13.083C36.6001 12.2565 34.583 11.8438 32.2637 11.8438Z" fill="var(--color-dark-green)"/>
              </svg>
            </div>
            <h3 className="display-headline !text-[45px] mb-2">{benefits[1].title}</h3>
            <p className="mb-4 h-full">{benefits[1].description}</p>
        </div>

        {/* Motivation Card */}
        <div className="flex-1 flex-col justify-between">
            <div className="mb-[var(--space-lg)]">
              <svg width="58" height="75" viewBox="0 0 58 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6636 0C43.4809 0 55.4926 12.0118 55.4927 26.8291C55.4927 41.6465 43.481 53.6582 28.6636 53.6582C13.8463 53.6581 1.83447 41.6464 1.83447 26.8291C1.83456 12.0118 13.8463 8.55621e-05 28.6636 0ZM30.3569 15.5215C29.7293 14.0177 27.599 14.0179 26.9712 15.5215L25.021 20.1924C24.7566 20.8256 24.161 21.2588 23.4771 21.3145L18.4331 21.7246C16.8089 21.8568 16.15 23.8836 17.3862 24.9453L21.2261 28.2422C21.7467 28.6893 21.9743 29.3899 21.8159 30.0576L20.6479 34.9824C20.2719 36.568 21.9955 37.8203 23.3872 36.9727L27.7095 34.3398C28.2955 33.9829 29.0316 33.9829 29.6177 34.3398L33.9409 36.9727C35.3325 37.8199 37.0561 36.5677 36.6802 34.9824L35.5112 30.0576C35.3529 29.3899 35.5805 28.6893 36.1011 28.2422L39.9409 24.9453C41.1771 23.8837 40.5191 21.857 38.895 21.7246L33.8501 21.3145C33.1661 21.2587 32.5705 20.8257 32.3062 20.1924L30.3569 15.5215Z" fill="var(--color-dark-green)"/>
                <path d="M14.1154 64.0489C12.7165 65.0349 10.806 63.9227 10.9726 62.2194L12.699 44.5773C12.8403 43.1333 14.4239 42.3155 15.6831 43.0363L28.5427 50.3975C29.8128 51.1245 29.8976 52.9248 28.7013 53.768L14.1154 64.0489Z" fill="var(--color-dark-green)"/>
                <path d="M43.8156 64.0607C45.232 65.0357 47.137 63.887 46.9359 62.1793L44.854 44.504C44.6863 43.0799 43.1186 42.2898 41.8741 43.0022L28.9912 50.3767C27.7127 51.1085 27.6373 52.9246 28.8508 53.7599L43.8156 64.0607Z" fill="var(--color-dark-green)"/>
              </svg>
            </div>
            <h3 className="display-headline !text-[45px] mb-2">{benefits[2].title}</h3>
            <p className="mb-4 h-full">{benefits[2].description}</p>
        </div>
      </div>
      
      <Carousel
        items={guides}
        renderItem={(guide) => (
          <GuideCard {...guide} className="flex-shrink-0 group" variant="blue" />
        )}
        visibleCards={3.9}
        variant="scheme2"
        title="Meet our Guides"
        buttonText="View all Guides"
        buttonHref="/guides"
       
      />
    </section>
  )
}
