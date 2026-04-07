import Link from 'next/link'

const newsItems = [
  {
    title: 'First Place in International Math Competition',
    description: 'Led team to victory in MathWorks Math Modeling Challenge, winning $22,500 in scholarships. Published in the SIAM Undergraduate Research Online (SIURO) journal.',
    href: 'https://patch.com',
    linkLabel: 'Read on Patch.com',
    date: 'April 2023',
  },
  {
    title: 'Caseflood.ai Selected for Y Combinator W25',
    description: 'Founding ML Engineer at legal tech startup accepted into the prestigious Y Combinator Winter 2025 batch. Top 1% of applicants. $30M+ valuation.',
    href: 'https://www.caseflood.ai',
    linkLabel: 'Visit Caseflood.ai',
    date: 'December 2024',
  },
  {
    title: 'Quantitative Research Intern at Magnetar Capital',
    description: 'Secured quantitative research internship at Magnetar Capital, a leading alternative asset management firm with ~$25B AUM. Received return offer.',
    href: 'https://www.magnetar.com',
    linkLabel: 'Visit Magnetar Capital',
    date: 'June 2025',
  },
  {
    title: 'MSCF Datathon 2025 — Top 6 Finish',
    description: 'Top 6 finish in the prestigious CMU MSCF x Morgan Stanley financial modeling competition. Best performing team for our age group.',
    href: 'https://www.linkedin.com/in/rishi-prabhu/',
    linkLabel: 'View on LinkedIn',
    date: 'March 2025',
  },
  {
    title: 'Rotman Market Simulation Challenge',
    description: 'Participated in the intricate trading simulation competition at Carnegie Mellon University.',
    href: '#',
    linkLabel: 'Read CMU MSCF Article',
    date: 'October 2024',
  },
  {
    title: '2026 CMU x Goldman Sachs Quantathon — 2nd Place',
    description: 'Placed 2nd in the CMU x Goldman Sachs Quantathon competition.',
    href: 'https://www.linkedin.com/in/rishi-prabhu/',
    linkLabel: 'View on LinkedIn',
    date: 'February 2026',
  },
]

export default function News() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          News & Media
        </h1>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 hover:border-blue-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <span className="text-blue-300 text-sm whitespace-nowrap">{item.date}</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{item.description}</p>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
