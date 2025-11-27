// app/components/About.tsx
"use client";
import { motion } from "framer-motion";
import { AcademicCapIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-50 via-white to-purple-100 text-gray-900">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-purple-700"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg leading-relaxed mb-10"
        >
          I’m Mahamed, a Computer Science student at Toronto Metropolitan University (GPA: 3.8). 
          I love building modern web applications with expressive design and emotionally supportive 
          user experiences. I thrive on solving technical challenges, architecting scalable systems, 
          and creating projects that impress recruiters and delight users.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6"
          >
            <AcademicCapIcon className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="font-semibold text-purple-700">Education</h3>
            <p className="text-sm text-gray-600 mt-2">Toronto Metropolitan University, CS Co-op</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6"
          >
            <CodeBracketIcon className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="font-semibold text-purple-700">Developer</h3>
            <p className="text-sm text-gray-600 mt-2">React, Next.js, Tailwind, APIs</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6"
          >
            <SparklesIcon className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="font-semibold text-purple-700">Vision</h3>
            <p className="text-sm text-gray-600 mt-2">Expressive, recruiter‑ready projects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
