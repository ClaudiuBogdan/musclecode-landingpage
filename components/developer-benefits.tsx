import { Card, CardContent } from "@/components/ui/card"
import { Bot, BookOpen, Code2, Lightbulb, Sparkles, Trophy } from "lucide-react"

export function DeveloperBenefits() {
  const benefits = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Personal AI Trainer",
      description: "Get guidance from your personal AI trainer who helps manage your learning path.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Utilize a course generator tailored to your individual learning needs and goals.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Gamified Experience",
      description: "Engage with gamification elements and interactive UI designed to make learning fun.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Coding Challenges",
      description: "Practice with interactive coding challenges that enhance your problem-solving skills.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Digital Avatar",
      description: "Develop your digital avatar, which you train by completing coding challenges.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Management",
      description:
        "Access a centralized system for managing your coding knowledge and notes, flashcards, algorithms, chat history, and insights into your learning journey.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="md:col-span-1 overflow-hidden">
        <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-primary/20"></div>
            <div className="absolute inset-8 rounded-full bg-background flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Your Digital Coding Avatar</h3>
          <p className="text-muted-foreground text-center">Train and level up as you master new skills</p>
        </div>
      </Card>

      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

