import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-7xl sm:text-9xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500">
            Hello There!
          </h1>
          <h2 className="text-6xl sm:text-8xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            I'm Rishi M. Prabhu
          </h2>
          <div className="h-16 relative w-full max-w-3xl">
            <div className="text-4xl sm:text-5xl text-white text-center">
              <p className="animate-fade-in-out absolute w-full">
                <span className="font-semibold">Aspiring Quant</span>
              </p>
              <p className="animate-fade-in-out delay-1000 absolute w-full">
                <span className="font-semibold">Passionate Programmer</span>
              </p>
              <p className="animate-fade-in-out delay-2000 absolute w-full">
                <span className="font-semibold">Curious Student</span>
              </p>
              <p className="animate-fade-in-out delay-3000 absolute w-full">
                <span className="font-semibold">Athlete</span>
              </p>
              <p className="animate-fade-in-out delay-4000 absolute w-full">
                <span className="font-semibold">Fun-loving Friend</span>
              </p>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <Link 
              href="#experience" 
              className="px-12 py-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg text-2xl font-semibold"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      {/* Experience Section Preview */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 bg-[#0a0a0a]">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Experience</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-blue-600 pl-8 transform hover:translate-x-2 transition-transform">
            <h3 className="font-semibold text-2xl text-white">Incoming Quantitative Analyst Intern</h3>
            <p className="text-blue-200 text-xl">Magnetar Capital • May 2025 - Present</p>
            <p className="mt-3 text-gray-200 text-xl">Upcoming quantitative analyst internship at a leading alternative asset management firm</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-8 transform hover:translate-x-2 transition-transform">
            <h3 className="font-semibold text-2xl text-white">Equity Research Analyst</h3>
            <p className="text-blue-200 text-xl">Tartan Student Fund • January 2025 - Present</p>
            <p className="mt-3 text-gray-200 text-xl">Jane Street-sponsored fund with ~$100,000 AUM. Energy Sector Analyst.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-8 transform hover:translate-x-2 transition-transform">
            <h3 className="font-semibold text-2xl text-white">Machine Learning Engineer</h3>
            <p className="text-blue-200 text-xl">Caseflood.ai (YC W25) • October 2024 - December 2024</p>
            <p className="mt-3 text-gray-200 text-xl">Founding ML Engineer developing AI-powered receptionist for law firms.</p>
          </div>
        </div>
        <Link href="/experience" className="inline-block mt-12 text-blue-400 hover:text-blue-300 text-2xl">
          View full experience →
        </Link>
      </section>

      {/* Education Section Preview */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-[#0a0a0a] to-black scroll-mt-20">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Education</h2>
        <div className="space-y-8">
          <div className="bg-[#0a0a0a] p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-900">
            <h3 className="font-semibold text-2xl text-white">Carnegie Mellon University</h3>
            <p className="text-blue-200 text-xl">B.S. in Computational Finance + Computer Science • Expected May 2028</p>
            <p className="mt-3 text-gray-200 text-xl">GPA: 4.0/4.0 (Dean's List)</p>
            <div className="mt-4 text-gray-300 text-lg">
              <p>• Relevant Coursework: Data Structures & Algorithms, Machine Learning, Statistical Computing, Financial Markets</p>
              <p>• Activities: Tartan Student Fund, CMU Quant Club, CMU Tennis Club</p>
            </div>
          </div>
        </div>
        <Link href="/education" className="inline-block mt-12 text-blue-400 hover:text-blue-300 text-2xl">
          View education details →
        </Link>
      </section>

      {/* Skills Preview */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 bg-[#0a0a0a]">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💻</span>
              <h3 className="font-semibold text-2xl text-white">Backend Languages</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Python</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">Java</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">C/C#</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌐</span>
              <h3 className="font-semibold text-2xl text-white">Web & Frontend</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">React</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">JavaScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">HTML/CSS</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">📊</span>
              <h3 className="font-semibold text-2xl text-white">Data Analysis & ML</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Machine Learning</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">Deep Learning</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Data Analysis</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">📈</span>
              <h3 className="font-semibold text-2xl text-white">Quantitative Finance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">Financial Modeling</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Technical Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">MACD/RSI/EMA</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🛠️</span>
              <h3 className="font-semibold text-2xl text-white">Tools & Platforms</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Git</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-200 text-xl">AWS</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                <span className="text-gray-200 text-xl">Docker</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/skills" className="inline-block mt-12 text-blue-400 hover:text-blue-300 text-2xl text-center w-full">
          View all skills →
        </Link>
      </section>

      {/* Contact/Social Links */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-black to-[#0a0a0a] scroll-mt-20">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Let's Connect</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { label: 'GitHub', href: 'https://github.com/RishabhPrabhu5', icon: '🐙' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rprabhu1/', icon: '💼' },
            { label: 'Email', href: 'mailto:rprabhu2@andrew.cmu.edu', icon: '✉️' },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#0a0a0a] hover:bg-[#111111] rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-4 text-2xl border border-blue-900"
            >
              <span className="text-3xl">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
