import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <Card className="relative group border bg-background/60 backdrop-blur-xs transition-all duration-300 hover:shadow-md hover:border-primary/20 overflow-hidden h-full">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      </div>
      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-4">
          <Quote className="h-4 w-4 text-primary" />
        </div>
        <p className="grow mb-6 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
            {avatar ? (
              <img
                src={avatar}
                alt={author}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              author.charAt(0)
            )}
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
