import { Testimonial } from "./testimonial";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/20 border-y relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What early adopters are saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from developers who are already using MuscleCode to enhance
            their skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="MuscleCode has significantly accelerated my learning curve. The personalized AI trainer feels like having a senior developer by my side."
            author="Alex Chen"
            role="Junior Developer"
          />
          <Testimonial
            quote="The interactive challenges and gamification elements make learning algorithms and data structures actually fun. I'm addicted!"
            author="Sarah Johnson"
            role="Frontend Developer"
          />
          <Testimonial
            quote="As a team lead, I've seen my junior developers grow much faster with MuscleCode. The metrics help me understand their progress."
            author="Michael Rodriguez"
            role="Engineering Manager"
          />
        </div>
      </div>
    </section>
  );
}
