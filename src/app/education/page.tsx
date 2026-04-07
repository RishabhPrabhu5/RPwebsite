import Link from 'next/link'

export default function Education() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Education
        </h1>

        <div className="space-y-12">
          {/* CMU */}
          <div className="bg-[#0a0a0a] p-10 rounded-xl border border-blue-900">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h2 className="text-2xl font-bold text-white">Carnegie Mellon University</h2>
              <span className="text-blue-300 text-lg whitespace-nowrap">August 2024 – May 2028</span>
            </div>
            <p className="text-blue-200 text-xl mb-1">Pittsburgh, PA</p>
            <p className="text-gray-200 text-lg mt-3">
              B.S. <span className="text-white font-medium">Computational Finance</span> (Math) &bull; <span className="text-white font-medium">Computer Science</span> (additional major) &bull; <span className="text-white font-medium">Machine Learning</span> (minor)
            </p>
            <p className="text-gray-200 text-lg mt-2">GPA: <span className="text-white font-semibold">3.93/4.0</span> — Dean&apos;s List, High Honors</p>
            <p className="text-gray-400 text-base mt-2 italic">1 of 2 freshmen admitted directly into the Computational Finance major</p>
            <p className="text-gray-400 text-sm mt-2">Computational Finance is CMU&apos;s highly selective quantitative finance program modeled after the MSCF program (ranked #2 in the world). Additional major in Computer Science at the #1 CS program in the country.</p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '15-122: Principles of Imperative Computation',
                    '15-150: Functional Programming',
                    '15-213: Computer Systems',
                    '21-268: Multidimensional Calculus',
                    '21-270: Introduction to Mathematical Finance',
                    '21-128: Mathematical Concepts & Proofs',
                    '21-242: Matrix Theory (Honors)',
                    '21-120: Differential & Integral Calculus',
                    '21-122: Integration & Approximation',
                    'Stochastic Calculus (CTF)',
                    'Machine Learning',
                    'Probability & Computing (15-259)',
                    'Data Structures & Algorithms',
                    'CS Theory',
                    'Discrete Time Finance',
                    'Putnam',
                  ].map((course) => (
                    <span key={course} className="px-3 py-1 bg-black border border-blue-900 rounded-full text-gray-200 text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Leadership & Activities</h3>
                <ul className="space-y-3 text-gray-200 text-base">
                  <li className="flex gap-3">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span><span className="text-white font-medium">President</span>, CMU Quant Club — organize competitions & networking events with quant firms and MSCF/BSCF; manage finances and sponsorships</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span><span className="text-white font-medium">Teaching Assistant</span>, Probability and Computing (15-259) — Citadel-sponsored course; top scorer of 150 students; teach recitations and write exams</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span><span className="text-white font-medium">Portfolio Manager</span>, Tartan Student Fund — Energy Sector PM, $150K AUM, 43% annual return</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span>Software Engineer @ Scotty Labs &bull; Head of Finance @ Hindu YUVA &bull; Tepper Finance Group (Sales & Trading Academy) &bull; Math Club &bull; AI Club &bull; Data Science Club &bull; Research Apprentice (SURA) &bull; STA &bull; CMU Tennis Club</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TJ */}
          <div className="bg-[#0a0a0a] p-10 rounded-xl border border-blue-900">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h2 className="text-2xl font-bold text-white">Thomas Jefferson High School for Science and Technology</h2>
              <span className="text-blue-300 text-lg whitespace-nowrap">2020 – June 2024</span>
            </div>
            <p className="text-blue-200 text-xl mb-1">Alexandria, VA</p>
            <p className="text-gray-400 text-sm mb-4">#1 High School — U.S. News & World Report &bull; Advanced Studies Diploma</p>
            <ul className="space-y-2 text-gray-200 text-base">
              <li className="flex gap-3"><span className="text-blue-400">→</span> GPA: <span className="text-white font-medium">4.6/4.0</span> weighted &bull; 4.0/4.0 unweighted &bull; SAT: <span className="text-white font-medium">1580</span> &bull; 15 AP/College classes</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> <span className="text-white font-medium">Activities:</span> President of TJ Math Modeling Club &bull; Co-President of TJ CyberPatriot Club &bull; Captain of TJ Ultimate Frisbee Team</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> <span className="text-white font-medium">Coursework:</span> Artificial Intelligence, Multivariable Calculus, Linear Algebra, Quantum Physics, AP Statistics, AP Physics</li>
            </ul>
          </div>

          {/* Honors */}
          <div className="bg-[#0a0a0a] p-10 rounded-xl border border-blue-900">
            <h2 className="text-2xl font-bold text-white mb-6">Awards & Honors</h2>
            <ul className="space-y-3 text-gray-200 text-base">
              <li className="flex gap-3"><span className="text-blue-400">→</span> Discover DRW 2026 &bull; SIG 2026 Trading Discovery Day &bull; D.E. Shaw 2026 Vector Fellow &bull; GS Engineering Summit</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> 2026 CMU x Goldman Quantathon — 2nd place &bull; 2025 CMU MSCF x Morgan Stanley Datathon — Top 6</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> 4x AIME Qualifier (Top 2.5%) &bull; Putnam (Scored 11)</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> PennApps XXIV: Best AI Hack &bull; 4x CyberPatriot Platinum Tier Qualifier &bull; 2024 National Semifinalist</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> Google 5-Day Gen AI Intensive (2024) &bull; 6 CITI Biomedical Research Certifications</li>
              <li className="flex gap-3"><span className="text-blue-400">→</span> Published in F1000, Zenodo, and SIAM Undergrad Research Online (SIURO)</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex gap-6 justify-center flex-wrap">
          <Link href="/experience" className="text-blue-400 hover:text-blue-300 text-xl">View Experience →</Link>
          <Link href="/about" className="text-blue-400 hover:text-blue-300 text-xl">About Me →</Link>
        </div>
      </div>
    </main>
  )
}
