"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Export the FAQ data so it can be used for structured data
export const faqData = [
  {
    question: "What is MuscleCode?",
    answer:
      "MuscleCode is a learning platform designed for software developers, particularly junior developers, who need to learn quickly and become productive members of their teams. It combines AI-powered learning, interactive challenges, and personalized guidance to help developers build their coding skills efficiently.",
  },
  {
    question: "How does the early access program work?",
    answer:
      "Early adopters get free access to MuscleCode in exchange for providing valuable feedback. Your insights will help us improve the platform and shape its future development. Early access members will also have direct input into our product roadmap.",
  },
  {
    question: "What technologies and programming languages are supported?",
    answer:
      "During the early access phase, we're focusing on core algorithms and data structures that are language-agnostic. We plan to expand our language-specific content based on user feedback and demand.",
  },
  {
    question: "How is MuscleCode different from other learning platforms?",
    answer:
      "MuscleCode combines the best features from various learning platforms into one cohesive experience. What makes us unique is our focus on building muscle memory through spaced repetition, personalized AI guidance, and a gamified learning experience specifically designed for developers.",
  },
  {
    question: "Can I use MuscleCode for my entire development team?",
    answer:
      "Yes! MuscleCode is designed to work for both individual developers and teams. For companies, we offer team analytics and the ability to create custom learning paths based on your specific technology stack and requirements.",
  },
  {
    question: "When will MuscleCode be generally available?",
    answer:
      "We're currently in private beta. Our timeline for general availability will depend on the feedback we receive from early adopters. We're committed to delivering a high-quality product that truly meets the needs of developers and companies.",
  },
]

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

