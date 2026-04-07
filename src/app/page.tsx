import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8 text-center text-blue-300">
            Hello There!
          </h1>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 sm:mb-16 text-center text-blue-300">
            I'm Rishi Prabhu
          </h2>
          <div className="h-16 relative w-full max-w-3xl mb-8 sm:mb-16">
            <div className="text-2xl sm:text-4xl md:text-5xl text-white text-center">
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
              <div className="absolute w-full flex justify-center opacity-0 animate-fade-in delay-4000 -mt-8">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Rishi Prabhu"
                    fill
                    className="rounded-full object-cover"
                    style={{ objectPosition: '50% 30%' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20">
            <Link 
              href="#experience" 
              className="px-12 py-6 sm:px-12 sm:py-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg text-xl sm:text-2xl font-semibold"
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
            <h3 className="font-semibold text-2xl text-white">Incoming Quantitative Trading Intern</h3>
            <p className="text-blue-200 text-xl">SCALP Trade • June 2026 – August 2026</p>
            <p className="text-gray-400 text-lg italic mb-3">Chicago, IL</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-8 transform hover:translate-x-2 transition-transform">
            <h3 className="font-semibold text-2xl text-white">Quantitative Research Intern</h3>
            <p className="text-blue-200 text-xl">Magnetar Capital (~$25B AUM) • June 2025 – August 2025</p>
            <p className="text-gray-400 text-lg italic mb-3">Python, Databricks, MATLAB</p>
            <ul className="mt-3 text-gray-200 text-lg space-y-2 list-disc list-inside">
              <li>Created tail-hedging option strategies using bear-put spreads to improve 99.5% CVaR of ~$3B fund across 1,000 risk scenarios.</li>
              <li>Implemented Black-Scholes model with stochastic/volatility adjustments to price options and improve CVaR by ~$500M (+60%).</li>
              <li>Optimized allocation of ~$300M asset with factor models using Monte Carlo, Markov Chains, correlation analysis & regression.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-8 transform hover:translate-x-2 transition-transform">
            <h3 className="font-semibold text-2xl text-white">Portfolio Manager</h3>
            <p className="text-blue-200 text-xl">Tartan Student Fund • January 2025 – Present</p>
            <p className="text-gray-400 text-lg italic mb-3">Excel, PowerPoint</p>
            <ul className="mt-3 text-gray-200 text-lg space-y-2 list-disc list-inside">
              <li>CMU fund, $150,000 AUM. 43% annual return. PM of the Energy Sector. Top 7 of 100+ applicants.</li>
              <li>Pitched CEG, CCJ, and BEP to the fund.</li>
            </ul>
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
            <p className="mt-3 text-gray-200 text-xl">GPA: 3.93/4.0 (Dean's List, High Honors)</p>
            <div className="mt-4 text-gray-300 text-lg space-y-2">
              <p>• Coursework: Machine Learning, Stochastic Calculus, Probability, Statistics, Data Structures & Algorithms, CS Theory, Linear Algebra (Honors), Computer Systems, Functional Programming, Discrete Time Finance, Differential Equations, Putnam</p>
              <p>• President, CMU Quant Club — organize competitions & networking events with quant firms and MSCF/BSCF</p>
              <p>• Teaching Assistant, Probability and Computing (15-259) — Citadel-sponsored course; top scorer of 150 students; teach recitations and write exams</p>
              <p>• Other Activities: Research Apprentice (SURA), STA, Scotty Labs, Data Science Club, CMU Tennis Club</p>
            </div>
          </div>
        </div>
        <Link href="/education" className="inline-block mt-12 text-blue-400 hover:text-blue-300 text-2xl">
          View education details →
        </Link>
      </section>


{/* Contact/Social Links */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-black to-[#0a0a0a] scroll-mt-20">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Let's Connect</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { label: 'GitHub', href: 'https://github.com/RishabhPrabhu5', icon: '🐙' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishi-prabhu/', icon: '💼' },
            { label: 'Instagram', href: 'https://www.instagram.com/rishabh_prabhu5/', icon: '📸' },
            { label: 'Email', href: 'mailto:rishiprabhu@cmu.edu', icon: '✉️' },
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
