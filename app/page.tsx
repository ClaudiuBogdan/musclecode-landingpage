import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code,
  LineChart,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { EarlyAccessForm } from "@/components/early-access-form";
import { HeroAnimation } from "@/components/hero-animation";
import { CompanyBenefits } from "@/components/company-benefits";
import { DeveloperBenefits } from "@/components/developer-benefits";
import { FAQ } from "@/components/faq";
import { DemoSection } from "@/components/demo-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation - Added sticky positioning and blur effect */}
      <header className="sticky top-0 z-50 backdrop-blur-xs bg-background/90 border-b">
        <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">MuscleCode.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#for-companies"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              For Companies
            </Link>
            <Link
              href="#for-developers"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              For Developers
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* Sign in  */}
            {/* <Link
              href="#"
              className="hidden md:inline-block text-sm font-medium hover:text-primary transition-colors"
            >
              Sign in
            </Link> */}
            <Link href="#early-access">
              <Button className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Enhanced with gradient elements and pattern bg */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Background pattern/gradient similar to GitHub Copilot */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(56,189,248,0.13),rgba(0,0,0,0))]"></div>
          <div className="absolute top-0 right-0 -z-10 blur-3xl opacity-20 w-96 h-96 bg-primary rounded-full"></div>
          <div className="absolute bottom-0 left-0 -z-10 blur-3xl opacity-20 w-96 h-96 bg-primary rounded-full"></div>

          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                <span>Currently in private beta</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Train your coding{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400">
                  muscles with AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Become a production-ready developer faster with personalized
                learning paths, interactive challenges, and your own AI trainer.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Link href="#early-access">
                  <Button
                    size="lg"
                    className="gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    Join Early Access <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    See Demo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold">Looking for early adopters</span>{" "}
                  .
                  <span className="text-xs text-muted-foreground italic ml-2">
                    Limited spots available (37 left)
                  </span>
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:flex-1 relative">
              <div className="absolute -z-10 inset-0 bg-linear-to-tr from-primary/5 to-blue-500/5 rounded-lg"></div>
              <HeroAnimation />
            </div>
          </div>
        </section>

        {/* Logos Section */}
        {/* <LogosSection /> */}

        {/* Features Section - Enhanced with more modern card design */}
        <section id="features" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Supercharge your developer skills
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                MuscleCode combines the best features from various learning
                platforms into one cohesive experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="h-6 w-6 text-primary" />}
                title="AI-Powered Learning"
                description="Chat with various AI models for assistance and get personalized learning paths tailored to your needs."
              />
              <FeatureCard
                icon={<Code className="h-6 w-6 text-primary" />}
                title="Interactive Challenges"
                description="Engage with gamified coding challenges designed to enhance your problem-solving skills."
              />
              <FeatureCard
                icon={<Sparkles className="h-6 w-6 text-primary" />}
                title="Personal AI Trainer"
                description="Your AI trainer guides your learning process, offers hints, and helps manage your learning path."
              />
              <FeatureCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Digital Avatar"
                description="Develop your digital avatar, which you train by successfully completing coding challenges."
              />
              <FeatureCard
                icon={<LineChart className="h-6 w-6 text-primary" />}
                title="Progress Tracking"
                description="Get insights into your learning journey with detailed metrics and indicators."
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="Knowledge Management"
                description="Access a centralized system for managing your notes, flashcards, algorithms, and chat history."
              />
            </div>
          </div>
        </section>

        <DemoSection />

        {/* For Companies Section - Enhanced with better visuals */}
        <section
          id="for-companies"
          className="py-24 bg-muted/20 border-y relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                FOR COMPANIES
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Empower your development team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Help your junior developers become production-ready more quickly
                and increase team productivity.
              </p>
            </div>
            <CompanyBenefits />

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: "45%",
                  description: "Faster onboarding for new developers",
                },
                {
                  stat: "3x",
                  description: "More efficient knowledge retention",
                },
                {
                  stat: "80%",
                  description: "Of teams report improved code quality",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border bg-background/50 backdrop-blur-xs text-center"
                >
                  <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Developers Section - Enhanced with better visuals */}
        <section id="for-developers" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                FOR DEVELOPERS
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Accelerate your developer journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Use AI to your advantage and efficiently acquire the skills
                necessary for career success.
              </p>
            </div>
            <DeveloperBenefits />

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                "Build a solid foundation in programming fundamentals",
                "Master algorithms and data structures with interactive challenges",
                "Develop problem-solving skills through real-world scenarios",
                "Learn best practices from AI that reviews your code",
                "Track your progress with detailed metrics",
                "Build a portfolio of completed projects",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Enhanced with better card design */}
        {/* <TestimonialsSection /> */}

        {/* Early Access Section - Enhanced with gradient background */}
        <section id="early-access" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>
          <div className="container mx-auto px-4">
            <div className="relative bg-linear-to-br from-background via-background to-primary/5 backdrop-blur-xs border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-40 -right-40 w-80 h-80 blur-3xl opacity-10 bg-primary rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 blur-3xl opacity-10 bg-primary rounded-full"></div>
              </div>
              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                    JOIN THE BETA
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Join our early access program
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Help shape the future of developer learning. Early adopters
                    get free access and direct input into our product roadmap.
                  </p>
                </div>
                <EarlyAccessForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with better design */}
        <section
          id="faq"
          className="py-24 bg-muted/20 border-y relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently asked questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about MuscleCode.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQ />
            </div>
          </div>
        </section>
      </main>

      {/* CTA Banner before footer */}
      <section className="bg-primary/10 border-y py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Ready to level up your coding skills?
            </h3>
            <p className="text-muted-foreground">
              Join MuscleCode today and start your learning journey.
            </p>
          </div>
          <Link href="#early-access">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer - Enhanced with better layout */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">MuscleCode.io</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-xs">
                The AI-powered learning platform for software developers who
                want to level up their skills.
              </p>
              <div className="flex gap-4">
                {/* Social media icons would go here */}
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/claudiuBogdan/",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/claudiuconstantinbogdan/",
                  },
                  // { label: "Discord", href: "https://discord.gg/musclecode" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "#features" },
                  { label: "For Companies", href: "#for-companies" },
                  { label: "For Developers", href: "#for-developers" },
                  { label: "FAQ", href: "#faq" },
                  // { label: "Pricing", href: "#pricing" },
                  { label: "Early Access", href: "#early-access" },
                  // { label: "Roadmap", href: "#roadmap" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                {[
                  {
                    label: "About",
                    href: "https://claudiuconstantinbogdan.me",
                  },
                  {
                    label: "Blog",
                    href: "https://claudiuconstantinbogdan.me/articles",
                  },
                  // { label: "Careers", href: "#" },
                  {
                    label: "Contact",
                    href: "mailto:contact@devostack.com",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      target={
                        item.href.includes("mailto:") ? undefined : "_blank"
                      }
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MuscleCode.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
