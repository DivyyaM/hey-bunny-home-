// components/HomepageEnding.js
"use client";
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const HomepageEnding = () => {
    return (
        <div className="text-center py-20 bg-black text-white">
            <h2 className="text-4xl font-bold text-yellow-400">Ready to Explore AI-Powered Content Creation?</h2>
            <p className="mt-4 mb-8 text-lg">
                Experience real in-browser ML/NLP features that demonstrate the future of AI in content generation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                    href="https://hey-bunny-2sav2ofa4-divyyams-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2"
                >
                    🚀 Try Live Demo <FaExternalLinkAlt />
                </a>
                <a
                    href="https://github.com/DivyyaM/hey-bunny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-700 flex items-center justify-center gap-2"
                >
                    📁 View Code <FaGithub />
                </a>
            </div>

            <section className="py-10">
                <h2 className="text-3xl font-bold text-yellow-400">AI/ML Features Showcase</h2>
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center max-w-sm">
                        <h3 className="text-xl font-semibold">🧠 In-Browser ML</h3>
                        <p className="mt-2">Sentiment analysis, semantic search, and zero-shot classification running entirely in your browser with transformers.js.</p>
                    </div>
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center max-w-sm">
                        <h3 className="text-xl font-semibold">📊 A/B Testing</h3>
                        <p className="mt-2">Built-in experimentation framework with user group assignment and analytics to optimize content strategy.</p>
                    </div>
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center max-w-sm">
                        <h3 className="text-xl font-semibold">🔬 Model Playground</h3>
                        <p className="mt-2">Compare different ML models side-by-side: BERT, compromise, and custom rewriters for content optimization.</p>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold text-yellow-400">Tech Stack</h2>
                <div className="flex flex-wrap justify-center mt-6 gap-4">
                    <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Next.js 14</span>
                    <span className="px-4 py-2 bg-cyan-600 rounded-full text-sm">React 18</span>
                    <span className="px-4 py-2 bg-purple-600 rounded-full text-sm">TypeScript</span>
                    <span className="px-4 py-2 bg-green-600 rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-orange-600 rounded-full text-sm">transformers.js</span>
                    <span className="px-4 py-2 bg-red-600 rounded-full text-sm">Drizzle ORM</span>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold text-yellow-400">Connect & Collaborate</h2>
                <p className="mt-4 mb-6">
                    Let&apos;s discuss AI/ML projects, web development, or just say hello!
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/divyameena/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://github.com/DivyyaM" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/divyaa_1007?igsh=M3h2ZW9rcHY0ejRz" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
            </section>

            <footer className="py-4 bg-gray-800">
                <p className="text-sm">🚀 Built with ❤️ by Divya | AI/ML Portfolio Project</p>
            </footer>
        </div>
    );
};

export default HomepageEnding;

