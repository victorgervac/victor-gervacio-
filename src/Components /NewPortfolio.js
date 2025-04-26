import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}>
          Hi, I’m Vic 👋
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-xl mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6 }}>
          A developer focused on building intuitive web experiences.
        </motion.p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-lg">
          View My Work
        </Button>
      </section>
    </main>
  );
}
