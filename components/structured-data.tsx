import Script from "next/script";

export const WebsiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MuscleCode.io",
    url: "https://musclecode.io",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://musclecode.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script id="website-structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MuscleCode.io",
    url: "https://musclecode.io",
    logo: "https://musclecode.io/icons/logo.png",
    sameAs: [
      "https://github.com/claudiuBogdan/",
      "https://www.linkedin.com/in/claudiuconstantinbogdan/",
      // Add other social profiles here
    ],
  };

  return (
    <Script id="organization-structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export const SoftwareApplicationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MuscleCode.io",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths, interactive challenges, and your own AI trainer.",
  };

  return (
    <Script
      id="software-application-structured-data"
      type="application/ld+json"
    >
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export const FAQStructuredData = ({}) => {
  const faqs = [
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
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script id="faq-structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};
