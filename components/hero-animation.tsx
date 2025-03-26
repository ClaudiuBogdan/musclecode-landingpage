"use client"

import { useEffect, useRef, useState } from "react";

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `hsl(221, 83%, ${50 + Math.random() * 20}%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;

        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw connections
      ctx!.strokeStyle = "rgba(66, 153, 225, 0.1)";
      ctx!.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Update and draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [isMounted]);

  // Static content for server rendering and initial client render
  // This ensures that the server and client renders match before hydration
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border/50 shadow-xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 shadow-lg max-w-md">
          <div className="font-mono text-sm text-primary mb-2">
            // Your AI trainer
          </div>
          <div className="font-mono text-sm mb-4">
            <span className="text-primary">function</span>{" "}
            <span className="text-yellow-500">trainCodingSkills</span>() {"{"}
            <br />
            {"  "}
            <span className="text-muted-foreground">
              // Personalized learning path
            </span>
            <br />
            {"  "}
            <span className="text-primary">const</span> skills ={" "}
            <span className="text-green-500">
              ['algorithms', 'data structures', 'problem solving']
            </span>
            ;
            <br />
            {"  "}
            <span className="text-primary">return</span>{" "}
            <span className="text-yellow-500">buildMuscleMemory</span>
            (skills);
            <br />
            {"}"}
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{">"}</span> Generating personalized
            training plan...
          </div>
        </div>
      </div>
    </div>
  );
}

