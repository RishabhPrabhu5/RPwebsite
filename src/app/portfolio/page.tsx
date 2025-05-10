import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">TheraSpeak</h2>
            <p className="text-blue-200 text-xl mb-4">PennApps 2023 Project</p>
            <p className="text-gray-200 text-lg mb-6">
              AI-powered therapy assistant that helps users practice and improve their communication skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">OpenAI</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/TheraSpeak" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Technical Analysis Quant Models</h2>
            <p className="text-blue-200 text-xl mb-4">Quantitative Finance</p>
            <p className="text-gray-200 text-lg mb-6">
              Collection of technical analysis models for market prediction and trading strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Pandas</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">NumPy</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/init_quant_models" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Task Manager App</h2>
            <p className="text-blue-200 text-xl mb-4">Full Stack Development</p>
            <p className="text-gray-200 text-lg mb-6">
              Modern task management application with real-time updates and collaborative features.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Tailwind</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/TaskManagerApp" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Datathon 2024</h2>
            <p className="text-blue-200 text-xl mb-4">AI & Sustainability</p>
            <p className="text-gray-200 text-lg mb-6">
              AI solutions for sustainability challenges, developed during CMU DSC Datathon.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">ML</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Data Analysis</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/datathon_2024" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Personal Website</h2>
            <p className="text-blue-200 text-xl mb-4">Web Development</p>
            <p className="text-gray-200 text-lg mb-6">
              Modern, responsive personal portfolio website built with Next.js and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Tailwind CSS</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/RPwebsite" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">HackCMU Project</h2>
            <p className="text-blue-200 text-xl mb-4">Hackathon Project</p>
            <p className="text-gray-200 text-lg mb-6">
              Innovative solution developed during HackCMU, focusing on practical applications of technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">APIs</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5/hackcmu" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity text-xl font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 