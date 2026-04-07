import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* Profile photo + resume */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 flex flex-col items-center gap-5">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Rishi Prabhu"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  priority
                />
              </div>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-2 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-lg text-base transition-colors"
              >
                View My Resume
              </Link>
            </div>

            {/* Who I Am */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">Who I Am</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                I&apos;m a sophomore at Carnegie Mellon University studying Computational Finance (Math),
                Computer Science, and Machine Learning — one of only 2 freshmen admitted directly into
                the CF major. I love tackling hard, interdisciplinary problems at the intersection of
                quantitative methods and software engineering.
              </p>
            </div>

            {/* What Drives Me */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">What Drives Me</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                I&apos;m motivated by the challenge of solving complex problems and making a meaningful impact —
                whether it&apos;s building tail-hedging strategies at a hedge fund, developing ML models for
                cancer research, or competing in math modeling contests. I thrive on pushing boundaries
                and working with talented people on hard problems.
              </p>
            </div>

            {/* Outside of Work */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">Outside of Work</h2>
              <div className="grid grid-cols-3 gap-2">
                {[
                  '🏀 Basketball',
                  '🥏 Frisbee',
                  '🏋️ Lifting',
                  '🃏 Poker',
                  '⭐ Star Wars',
                  '🦸 Marvel',
                  '🏓 Table Tennis',
                  '📚 Reading',
                  '🎙️ Podcasts',
                ].map((item) => (
                  <div key={item} className="bg-black rounded-lg px-2 py-2 border border-blue-900 text-gray-300 text-sm text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* Quick Facts */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Quick Facts</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-1">🎓 Education</p>
                  <p className="text-gray-200 text-base">CMU — Computational Finance + CS + ML Minor</p>
                  <p className="text-gray-400 text-sm">GPA: 3.93/4.0 · Dean&apos;s List, High Honors</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-1">💼 Current Role</p>
                  <p className="text-gray-200 text-base">Incoming Quant Trading Intern @ SCALP Trade</p>
                  <p className="text-gray-400 text-sm">Previously: Quant Research Intern @ Magnetar Capital (~$25B AUM)</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-1">🎯 Interests</p>
                  <p className="text-gray-200 text-base">Quant Finance, ML, Software Engineering, Math</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-1">🏆 Recent Honors</p>
                  <p className="text-gray-200 text-base">D.E. Shaw Vector Fellow · GS Engineering Summit</p>
                  <p className="text-gray-400 text-sm">Discover DRW 2026 · SIG Trading Discovery Day 2026</p>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Connect With Me</h2>
              <div className="space-y-3">
                {[
                  { icon: '💼', label: 'LinkedIn', sub: 'Let\'s connect professionally', href: 'https://www.linkedin.com/in/rishi-prabhu/' },
                  { icon: '🐙', label: 'GitHub', sub: 'Check out my projects', href: 'https://github.com/RishabhPrabhu5' },
                  { icon: '✉️', label: 'Email', sub: 'rishiprabhu@cmu.edu', href: 'mailto:rishiprabhu@cmu.edu' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-900/20 transition-colors group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{link.label}</p>
                      <p className="text-blue-400 text-sm">{link.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* My Journey */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">My Journey</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                From Thomas Jefferson High School (#1 US public school) to CMU, I&apos;ve been constantly
                pushing myself. My experience spans ML research at Dartmouth, quant work at Magnetar Capital,
                and founding engineering at a YC startup — with a consistent focus on applying rigorous
                quantitative thinking to real-world problems.
              </p>
            </div>

            {/* Selected Honors */}
            <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Selected Honors</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Jane Street x MathWorks Champion — 1st overall, $22,500 prize (2023)</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> 2026 CMU x Goldman Quantathon — 2nd place</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> PennApps XXIV — Best AI Hack</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> 4x AIME Qualifier (Top 2.5%) · Putnam (Scored 11)</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Published in F1000, Zenodo, and SIURO</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-6 justify-center flex-wrap">
          <Link href="/experience" className="text-blue-400 hover:text-blue-300 text-lg">View Experience →</Link>
          <Link href="/education" className="text-blue-400 hover:text-blue-300 text-lg">View Education →</Link>
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-lg">Contact Me →</Link>
        </div>
      </div>
    </main>
  )
}
