"use client";

import React from "react";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does app-based learning mean less social interaction?",
    answer: "Not at all! While students spend 2 hours on apps in the morning, the rest of their day is spent in engaging with their peers and getting direction from the guides via an array of lively activities. In fact, because they don’t have to spend 6 hours looking in the same direction at a chalkboard, Alpha students get more socialization than the average school student."
  },
  {
    question: "How do I request a transcript or test scores?",
    answer: "Answer placeholder."
  },
  {
    question: "What grade levels does Alpha serve?",
    answer: "Answer placeholder."
  },
  {
    question: "What are examples of Alpha's motivational models?",
    answer: "Answer placeholder."
  },
  {
    question: "Does my child have access to school work or content above their level?",
    answer: "Answer placeholder."
  },
  {
    question: "What are examples of workshops at Alpha?",
    answer: "Answer placeholder."
  },
  {
    question: "Is the 40K price tag only for 2 hours of learning?",
    answer: "Answer placeholder."
  },
  {
    question: "How does Alpha select Guides?",
    answer: "Answer placeholder."
  }
];

export default function FAQPage() {
  return (
    <>
      <MainHeading 
      variant="light">
        Frequently Asked Questions
      </MainHeading>

      <section className="alpha-section">
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <AccordionItem value={String(idx)} key={idx}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <WhatsNextSection />
    </>
  );
} 