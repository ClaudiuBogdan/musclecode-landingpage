"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      reasonToJoin: formData.get("reasonToJoin") as string,
    };

    try {
      const response = await fetch("/api/mailchimp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccessMessage(data.message || "Thank you for your interest!");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3">
          Thank you for your interest!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've received your request to join our early access program. We'll be
          in touch soon with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-destructive/80 border border-destructive/80 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your first and last name"
            required
            className="bg-background border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="bg-background border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="role" className="text-sm font-medium">
            Your role
          </Label>
          <Input
            id="role"
            name="role"
            placeholder="e.g. Junior Developer, Team Lead, etc."
            required
            className="bg-background border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="reasonToJoin" className="text-sm font-medium">
            What are you hoping to get out of MuscleCode?
          </Label>
          <Textarea
            id="reasonToJoin"
            name="reasonToJoin"
            placeholder="Tell us what you're looking for in a learning platform..."
            className="min-h-[120px] bg-background border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
        <div className="md:col-span-2">
          <Button
            type="submit"
            className="w-full gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all py-6"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                Request Early Access <ArrowRight className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

// Add CSS for the animation
const animateFadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
