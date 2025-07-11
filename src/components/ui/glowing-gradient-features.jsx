'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Search, TestTube, MessageSquare, Sparkles, Cpu } from 'lucide-react'
import SparklesText from '../magicui/SparklesText'
import {BorderBeam} from '../magicui/BorderBeam'
import {LetterPullup} from '../magicui/LetterPullUp'

const features = [
  {
    icon: Brain,
    title: 'In-Browser ML/NLP',
    description: 'Real sentiment analysis, semantic search, and zero-shot classification running entirely in your browser with transformers.js.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/dashboard/playground'
  },
  {
    icon: Zap,
    title: 'AI Content Generation',
    description: 'Generate engaging social media captions with AI-powered keyword extraction and engagement prediction.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/post-generator'
  },
  {
    icon: TestTube,
    title: 'A/B Testing Framework',
    description: 'Built-in A/B testing with user group assignment and analytics to optimize your content strategy.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/dashboard/analytics'
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description: 'Find related content by meaning, not just keywords. Powered by MiniLM embeddings.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/post-generator'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track user engagement, feature usage, and content performance with real-time analytics.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/dashboard/analytics'
  },
  {
    icon: Cpu,
    title: 'Model Playground',
    description: 'Compare different ML models side-by-side: BERT, compromise, and custom rewriters.',
    link: 'https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app/dashboard/playground'
  },
]

export default function GlowingGradientFeatures() {
  return (
    <section id="features" className="relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8 py-20 mb-25">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41MCIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-white sm:text-5xl text-center mb-16 relative z-10"
        >
          AI/ML Features for <span className="text-yellow-400"> <SparklesText text="Content Creators" /> </span> 
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {features.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-800 bg-opacity-50 rounded-xl p-6 h-full flex flex-col items-center text-center overflow-hidden backdrop-filter backdrop-blur-sm border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 relative z-10"
                >
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10"> 
                    {feature.title}
                </h3>
                <p className="text-gray-300 relative z-10">{feature.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
        <BorderBeam size={350} duration={10} delay={9}/>
    </section>
  )
}
