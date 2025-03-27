"use client";

import { LineChart } from "lucide-react";
import Image from "next/image";
import { CheckCircle, Code, GraduationCap, Users } from "lucide-react";
import { TrackedSection } from "./ui/tracked-section";
import { useAnalytics } from "./analytics";

const knowledgeManagementFeatures = [
  "Create topic-based collections of resources",
  "Save code snippets for future reference",
  "Build a searchable personal library",
  "Track your progress across different topics",
];

export function DemoSection() {
  const { trackEvent } = useAnalytics();

  // Track demo image interactions
  const handleImageClick = (imageType: string) => {
    trackEvent("demo_image_clicked", { image_type: imageType });
  };

  return (
    <>
      {/* Code Demo Section - Made more like GitHub Copilot */}
      <TrackedSection
        id="demo"
        className="py-24 bg-muted/20 border-y relative overflow-hidden"
        trackingProps={{ section_type: "demo", position: "first" }}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              DEMO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See MuscleCode in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience how our platform helps you learn and solve coding
              challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-xl border bg-background/80 shadow-lg overflow-hidden order-2 md:order-1 cursor-pointer"
              onClick={() => handleImageClick("ai_chat")}
            >
              <Image
                src="/chat-image.png"
                alt="AI Chat Interface"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Chat Learning
              </h3>
              <p className="text-muted-foreground mb-6">
                Chat with our AI trainer to get personalized assistance for any
                coding challenge. Ask questions, get explanations, and receive
                guidance tailored to your learning style.
              </p>
              <ul className="space-y-3">
                {[
                  "Get instant help with code problems",
                  "Receive clear explanations of complex concepts",
                  "Learn best practices from virtual mentors",
                  "Save and revisit important conversations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TrackedSection>

      {/* Additional features section with collections-image */}
      <TrackedSection
        id="knowledge-management"
        className="py-24 relative overflow-hidden"
        trackingProps={{
          section_type: "feature",
          feature: "knowledge_management",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                KNOWLEDGE MANAGEMENT
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Organize your learning journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Keep all your coding knowledge in one place. Create collections
                for different topics, save code snippets, and build your
                personal knowledge base as you learn.
              </p>
              <ul className="space-y-3">
                {knowledgeManagementFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl border bg-background/80 shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick("collections")}
            >
              <Image
                src="/collections-image.png"
                alt="Collections Interface"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </TrackedSection>

      {/* How It Works Section - Enhanced with lessons-image */}
      <TrackedSection
        id="how-it-works"
        className="py-24 bg-muted/20 border-y relative overflow-hidden"
        trackingProps={{ section_type: "how_it_works" }}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Learn coding the smart way
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform adapts to your learning style and helps you build
              skills efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="rounded-xl border bg-background/80 shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick("lessons")}
            >
              <Image
                src="/lessons-image.png"
                alt="Interactive Lessons Interface"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Interactive Learning Modules
              </h3>
              <p className="text-muted-foreground mb-6">
                Dive into structured learning modules designed by industry
                experts. Each lesson combines theory with practical exercises to
                help you master coding concepts quickly.
              </p>
              <ul className="space-y-3">
                {[
                  "Step-by-step guided lessons",
                  "Interactive coding challenges",
                  "Instant feedback on your solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your profile and set your learning goals",
                icon: <Users className="h-6 w-6 text-primary" />,
              },
              {
                step: "02",
                title: "Personalized Plan",
                description:
                  "Get a tailored learning path based on your experience",
                icon: <GraduationCap className="h-6 w-6 text-primary" />,
              },
              {
                step: "03",
                title: "Practice",
                description: "Complete interactive challenges with AI guidance",
                icon: <Code className="h-6 w-6 text-primary" />,
              },
              {
                step: "04",
                title: "Track Progress",
                description: "Monitor your improvement with detailed analytics",
                icon: <LineChart className="h-6 w-6 text-primary" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl border bg-background/50 backdrop-blur-xs"
                onClick={() =>
                  trackEvent("step_card_clicked", {
                    step: item.step,
                    title: item.title,
                  })
                }
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {item.step}
                </div>
                <div className="mt-2 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </TrackedSection>
    </>
  );
}
