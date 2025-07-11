"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "./background-beams";

const faqs = [
  {
    question: "What is HeyBunny? 🤔",
    answer:
      "HeyBunny is an AI-powered content generation platform that showcases real in-browser ML/NLP features. It's built with Next.js, React, and transformers.js to demonstrate practical AI implementation for content creators and marketers.",
  },
  {
    question: "What AI/ML features does it include? 🧠",
    answer:
      "The platform features sentiment analysis, semantic search, zero-shot classification, keyword extraction (BERT & compromise), engagement prediction, summarization, toxicity detection, and A/B testing - all running in your browser!",
  },
  {
    question: "How does the in-browser ML work? ⚡",
    answer:
      "Using transformers.js, all ML models run directly in your browser without any server-side processing. This means faster performance, no API costs, and complete privacy - your data never leaves your device!",
  },
  {
    question: "What technologies is it built with? 🛠️",
    answer:
      "Next.js 14, React 18, TypeScript, Tailwind CSS, transformers.js, compromise.js, Drizzle ORM, Neon Database, and Clerk for authentication. It's a full-stack modern web application with real ML capabilities.",
  },
  {
    question: "Is this a portfolio project? 📁",
    answer:
      "Yes! HeyBunny is designed to showcase AI/ML engineering skills, including real ML implementation, production deployment, user analytics, A/B testing, and modern web development practices.",
  },
  {
    question: "Can I try it out? 🚀",
    answer:
      "Absolutely! Visit the live demo at hey-bunny-2sav2ofa4-divyyams-projects.vercel.app to explore all the AI features. You can also check out the source code on GitHub to see how everything works!",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="relative w-full bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-10">
          Frequently Asked Questions 
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 flex items-center justify-between text-left bg-gray-800 hover:bg-gray-700"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  className="ml-2"
                >
                  ➕
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900 p-4 text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
