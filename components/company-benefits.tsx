import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function CompanyBenefits() {
  const benefits = [
    {
      title: "Accelerate Onboarding",
      description:
        "Help your new or junior software developers become production-ready more quickly with structured learning paths.",
    },
    {
      title: "Cost-Effective Training",
      description:
        "Increase team productivity by upskilling developers rapidly and cost-effectively compared to traditional training methods.",
    },
    {
      title: "Insightful Metrics",
      description:
        "Deliver detailed metrics and learning indicators to track progress and identify areas for improvement.",
    },
    {
      title: "AI-Assisted Program Creation",
      description:
        "Easily create training programs for developers, assisted by AI and leveraging accurate information from your documentation.",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
              <LineChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer Progress Dashboard</h3>
            <p className="text-muted-foreground">Track team performance and learning metrics</p>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Algorithm Proficiency</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Problem-Solving Speed</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Code Quality</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LineChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

