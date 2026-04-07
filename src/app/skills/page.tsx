import Link from 'next/link'

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Skills & Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">💻</span>
              <h2 className="text-xl font-bold text-white">Programming Languages</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Python', level: 'Advanced' },
                { name: 'C / C#', level: 'Intermediate' },
                { name: 'Java', level: 'Intermediate' },
                { name: 'SQL', level: 'Intermediate' },
                { name: 'R', level: 'Intermediate' },
                { name: 'MATLAB', level: 'Advanced' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-blue-400 text-sm">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🌐</span>
              <h2 className="text-xl font-bold text-white">Web & Frontend</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'React / Next.js', level: 'Intermediate' },
                { name: 'JavaScript / TypeScript', level: 'Intermediate' },
                { name: 'Node.js', level: 'Intermediate' },
                { name: 'Flask', level: 'Intermediate' },
                { name: 'HTML / CSS / Tailwind', level: 'Intermediate' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-blue-400 text-sm">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">📊</span>
              <h2 className="text-xl font-bold text-white">Data Analysis & ML</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Machine Learning', level: 'Advanced' },
                { name: 'Deep Learning / Computer Vision', level: 'Intermediate' },
                { name: 'Agentic AI', level: 'Advanced' },
                { name: 'Big Data / HPC / Cloud', level: 'Intermediate' },
                { name: 'Databricks', level: 'Intermediate' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-blue-400 text-sm">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">📈</span>
              <h2 className="text-xl font-bold text-white">Quantitative Finance</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Stochastic / Markov Processes', level: 'Advanced' },
                { name: 'Options Pricing (Black-Scholes)', level: 'Advanced' },
                { name: 'Monte Carlo Simulation', level: 'Advanced' },
                { name: 'Factor Models / Regression', level: 'Intermediate' },
                { name: 'Technical Analysis (MACD, RSI)', level: 'Intermediate' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-blue-400 text-sm">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🛠️</span>
              <h2 className="text-xl font-bold text-white">Tools & Platforms</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Git / GitHub', level: 'Intermediate' },
                { name: 'Microsoft Azure', level: 'Intermediate' },
                { name: 'Bloomberg Terminal', level: 'Intermediate' },
                { name: 'S&P Capital IQ', level: 'Intermediate' },
                { name: 'Microsoft Office / Excel', level: 'Advanced' },
                { name: 'Cursor / LLMs', level: 'Advanced' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-200 text-sm">{skill.name}</span>
                  <span className="text-blue-400 text-xs">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
