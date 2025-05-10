import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          Let's Connect
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <h2 className="text-3xl font-bold text-white mb-8">Social Media</h2>
            <div className="space-y-6">
              {[
                { label: 'GitHub', href: 'https://github.com/RishabhPrabhu5', icon: '🐙', desc: 'Check out my code repositories' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rprabhu1/', icon: '💼', desc: 'Connect with me professionally' },
                { label: 'Instagram', href: 'https://www.instagram.com/rishabh_prabhu5/', icon: '📸', desc: 'Follow my personal journey' },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#111111] hover:bg-[#1a1a1a] rounded-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{link.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{link.label}</h3>
                      <p className="text-gray-400">{link.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Contact */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <h2 className="text-3xl font-bold text-white mb-8">Direct Contact</h2>
            <div className="space-y-6">
              <div className="p-4 bg-[#111111] rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <Link 
                      href="mailto:rprabhu2@andrew.cmu.edu"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      rprabhu2@andrew.cmu.edu
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-[#111111] rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Pittsburgh, PA</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#111111] rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📝</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Blog</h3>
                    <Link 
                      href="https://docs.google.com/document/d/your-doc-id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Read my latest thoughts
                    </Link>
                  </div>
                </div>
              </div>
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