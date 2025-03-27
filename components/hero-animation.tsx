"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroAnimation() {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border/50 shadow-xl">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/matrix.gif"
            alt="Matrix digital rain animation"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-background/60 backdrop-blur-xs p-8 rounded-xl border border-border/50 shadow-lg m-4 ">
          <div className="font-mono text-lg text-primary mb-2">
            {/* Your AI trainer */}
          </div>
          <div className="font-mono text-lg mb-4">
            <span className="text-primary">function</span>{" "}
            <span className="text-yellow-500">trainCodingSkills</span>() {"{"}
            <br />
            <div className="pl-8">
              {"  "}
              <span className="text-muted-foreground">
                {/* Personalized learning path */}
              </span>
              <br />
              {"  "}
              <span className="text-primary">const</span> skills ={" "}
              <span className="text-green-500">
                ["algorithms", "data structures", "problem solving"]
              </span>
              ;
              <br />
              {"  "}
              <span className="text-primary">return</span>{" "}
              <span className="text-yellow-500">buildMuscleMemory</span>
              (skills);
              <br />
            </div>
            {"}"}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="font-mono text-lg text-muted-foreground"
          >
            <span className="text-primary">{">"}</span> Generating personalized
            training plan
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
              className="ml-1 inline-block"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              className="ml-0.5 inline-block"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              className="ml-0.5 inline-block"
            >
              .
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
