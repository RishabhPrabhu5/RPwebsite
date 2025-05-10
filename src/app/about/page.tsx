'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <div className="flex flex-col items-center mb-8">
                <div className={`relative w-48 h-48 rounded-full overflow-hidden mb-6 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <Image
                    src="/profile.jpg"
                    alt="Rishi Prabhu"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                    priority
                    onLoadingComplete={() => setIsImageLoaded(true)}
                  />
                </div>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  View My Resume
                </a>
              </div>
              <h2 className="text-3xl font-semibold text-white mb-6">Who I Am</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                I'm a passionate student at Carnegie Mellon University, pursuing a unique dual degree in Computational Finance and Computer Science. My journey is driven by a deep fascination with the intersection of technology and finance, where I aim to leverage cutting-edge computational methods to solve complex financial challenges.
              </p>
            </div>


            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h2 className="text-3xl font-semibold text-white mb-6">What Drives Me</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                I'm motivated by the challenge of solving complex problems and the opportunity to make a meaningful impact. Whether it's developing AI solutions for law firms or analyzing market trends, I thrive on pushing the boundaries of what's possible through technology and innovation.
                I also enjoy working with incredibly smart and talented people, and relish tackling complex problems together and learning from each other.
              </p>
            </div>

            

          </div>

          {/* Interactive Elements */}
          <div className="space-y-12">
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h2 className="text-3xl font-semibold text-white mb-6">Quick Facts</h2>
              <div className="space-y-6">
                <Link href="/education" className="group block">
                  <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">🎓 Education</h3>
                  <p className="text-xl text-gray-200">CMU Computational Finance + CS</p>
                </Link>
                <Link href="/experience" className="group block">
                  <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">💼 Current Role</h3>
                  <p className="text-xl text-gray-200">Incoming Quant Analyst at Magnetar Capital</p>
                </Link>
                <Link href="/hobbies" className="group block">
                  <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">🎯 Interests</h3>
                  <p className="text-xl text-gray-200">Quant Finance, ML, Ultimate Frisbee, Reading</p>
                </Link>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h2 className="text-3xl font-semibold text-white mb-6">Connect With Me</h2>
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/rprabhu1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                >
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">💼</span>
                  <div>
                    <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">LinkedIn</h3>
                    <p className="text-blue-200 text-xl">Let's connect professionally</p>
                  </div>
                </a>
                <a 
                  href="https://github.com/rprabhu001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                >
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🐙</span>
                  <div>
                    <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">GitHub</h3>
                    <p className="text-blue-200 text-xl">Check out my projects</p>
                  </div>
                </a>
                <a 
                  href="mailto:rprabhu2@andrew.cmu.edu" 
                  className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                >
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">📧</span>
                  <div>
                    <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">Email</h3>
                    <p className="text-blue-200 text-xl">Get in touch directly</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h2 className="text-3xl font-semibold text-white mb-6">My Journey</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                From my early days at Thomas Jefferson High School for Science and Technology, to college years at CMU, I've been constantly pushing the boundaries of what's possible. My experience spans from machine learning research to quantitative finance, with a particular focus on developing innovative solutions that bridge the gap between theory and practice.
              </p>
            </div>

          </div>
        </div>

       <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity text-xl"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 