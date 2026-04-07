import Link from 'next/link'

const projects = [
  {
    title: 'TheraSpeak',
    category: 'PennApps 2023 Project',
    description: 'AI-powered therapy assistant that helps users practice and improve their communication skills.',
    tags: ['Python', 'React', 'OpenAI'],
    href: 'https://github.com/RishabhPrabhu5/TheraSpeak',
  },
  {
    title: 'Technical Analysis Quant Models',
    category: 'Quantitative Finance',
    description: 'Collection of technical analysis models for market prediction and trading strategies.',
    tags: ['Python', 'Pandas', 'NumPy'],
    href: 'https://github.com/RishabhPrabhu5/init_quant_models',
  },
  {
    title: 'Task Manager App',
    category: 'Full Stack Development',
    description: 'Modern task management application with real-time updates and collaborative features.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/RishabhPrabhu5/TaskManagerApp',
  },
  {
    title: 'Datathon 2024',
    category: 'AI & Sustainability',
    description: 'AI solutions for sustainability challenges, developed during CMU DSC Datathon.',
    tags: ['Python', 'ML', 'Data Analysis'],
    href: 'https://github.com/RishabhPrabhu5/datathon_2024',
  },
  {
    title: 'Personal Website',
    category: 'Web Development',
    description: 'Modern, responsive personal portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    href: 'https://github.com/RishabhPrabhu5/RPwebsite',
  },
  {
    title: 'HackCMU Project',
    category: 'Hackathon Project',
    description: 'Innovative solution developed during HackCMU, focusing on practical applications of technology.',
    tags: ['JavaScript', 'Node.js', 'APIs'],
    href: 'https://github.com/RishabhPrabhu5/hackcmu',
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 flex flex-col justify-between hover:border-blue-500 transition-colors"
            >
              <div>
                <h2 className="text-xl font-bold text-white mb-1">{project.title}</h2>
                <p className="text-blue-400 text-sm mb-3">{project.category}</p>
                <p className="text-gray-300 text-base leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full text-blue-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors w-fit"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <h2 className="text-4xl font-bold mt-24 mb-12 text-center text-blue-300">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: '💻', title: 'Programming Languages',
              skills: [
                { name: 'Python', level: 'Advanced' },
                { name: 'C / C#', level: 'Intermediate' },
                { name: 'Java', level: 'Intermediate' },
                { name: 'SQL', level: 'Intermediate' },
                { name: 'R', level: 'Intermediate' },
                { name: 'MATLAB', level: 'Advanced' },
              ],
            },
            {
              icon: '🌐', title: 'Web & Frontend',
              skills: [
                { name: 'React / Next.js', level: 'Intermediate' },
                { name: 'JavaScript / TypeScript', level: 'Intermediate' },
                { name: 'Node.js', level: 'Intermediate' },
                { name: 'Flask', level: 'Intermediate' },
                { name: 'HTML / CSS / Tailwind', level: 'Intermediate' },
              ],
            },
            {
              icon: '📊', title: 'Data Analysis & ML',
              skills: [
                { name: 'Machine Learning', level: 'Advanced' },
                { name: 'Deep Learning / Computer Vision', level: 'Intermediate' },
                { name: 'Agentic AI', level: 'Advanced' },
                { name: 'Big Data / HPC / Cloud', level: 'Intermediate' },
                { name: 'Databricks', level: 'Intermediate' },
              ],
            },
            {
              icon: '📈', title: 'Quantitative Finance',
              skills: [
                { name: 'Stochastic / Markov Processes', level: 'Advanced' },
                { name: 'Options Pricing (Black-Scholes)', level: 'Advanced' },
                { name: 'Monte Carlo Simulation', level: 'Advanced' },
                { name: 'Factor Models / Regression', level: 'Intermediate' },
                { name: 'Technical Analysis (MACD, RSI)', level: 'Intermediate' },
              ],
            },
          ].map((cat) => (
            <div key={cat.title} className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name} className="flex items-center justify-between">
                    <span className="text-gray-200 text-base">{s.name}</span>
                    <span className="text-blue-400 text-sm">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🛠️</span>
              <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Git / GitHub', level: 'Intermediate' },
                { name: 'Microsoft Azure', level: 'Intermediate' },
                { name: 'Bloomberg Terminal', level: 'Intermediate' },
                { name: 'S&P Capital IQ', level: 'Intermediate' },
                { name: 'Microsoft Office / Excel', level: 'Advanced' },
                { name: 'Cursor / LLMs', level: 'Advanced' },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="text-gray-200 text-sm">{s.name}</span>
                  <span className="text-blue-400 text-xs">{s.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
