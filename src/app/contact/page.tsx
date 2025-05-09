import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Let's Connect</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <h2 className="text-3xl font-semibold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">📧</span>
                <div>
                  <h3 className="text-2xl text-white">Email</h3>
                  <a href="mailto:rprabhu2@andrew.cmu.edu" className="text-blue-200 text-xl hover:text-blue-300 transition-colors">
                    rprabhu2@andrew.cmu.edu
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-4">📱</span>
                <div>
                  <h3 className="text-2xl text-white">Phone</h3>
                  <a href="tel:+17035059685" className="text-blue-200 text-xl hover:text-blue-300 transition-colors">
                    (703) 505-9685
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-4">📍</span>
                <div>
                  <h3 className="text-2xl text-white">Location</h3>
                  <p className="text-blue-200 text-xl">Pittsburgh, PA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <h2 className="text-3xl font-semibold text-white mb-8">Social Links</h2>
            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/rprabhu1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="text-4xl mr-4">💼</span>
                <div>
                  <h3 className="text-2xl text-white">LinkedIn</h3>
                  <p className="text-blue-200 text-xl">Connect with me on LinkedIn</p>
                </div>
              </a>
              <a 
                href="https://github.com/rprabhu001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="text-4xl mr-4">🐙</span>
                <div>
                  <h3 className="text-2xl text-white">GitHub</h3>
                  <p className="text-blue-200 text-xl">Check out my projects</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg text-2xl font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 