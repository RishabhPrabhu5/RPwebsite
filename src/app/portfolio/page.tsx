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
            <h2 className="text-3xl font-bold mb-4 text-white">Caseflood.ai</h2>
            <p className="text-blue-200 text-xl mb-4">YC W25 • Founding ML Engineer</p>
            <p className="text-gray-200 text-lg mb-6">
              Developed AI-powered receptionist for law firms, handling client intake and scheduling.
              Implemented natural language processing and machine learning models for automated responses.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">NLP</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">AWS</span>
            </div>
            <Link 
              href="https://caseflood.ai" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Tartan Student Fund</h2>
            <p className="text-blue-200 text-xl mb-4">Energy Sector Analyst</p>
            <p className="text-gray-200 text-lg mb-6">
              Jane Street-sponsored fund with ~$100,000 AUM. Conducted fundamental analysis and market research
              for energy sector investments. Developed quantitative models for portfolio optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Financial Analysis</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Portfolio Management</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Quantitative Modeling</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Personal Website</h2>
            <p className="text-blue-200 text-xl mb-4">Full Stack Development</p>
            <p className="text-gray-200 text-lg mb-6">
              Built a modern, responsive personal website using Next.js and Tailwind CSS.
              Implemented dark theme, animations, and interactive components.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">TypeScript</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Project
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <h2 className="text-3xl font-bold mb-4 text-white">Machine Learning Projects</h2>
            <p className="text-blue-200 text-xl mb-4">Various ML Implementations</p>
            <p className="text-gray-200 text-lg mb-6">
              Collection of machine learning projects including image classification,
              natural language processing, and predictive modeling.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Scikit-learn</span>
            </div>
            <Link 
              href="https://github.com/RishabhPrabhu5" 
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Projects
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