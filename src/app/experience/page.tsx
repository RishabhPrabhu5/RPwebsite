import Link from 'next/link'

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Experience
        </h1>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-blue-900 pb-4">Professional</h2>
          <div className="space-y-10">

            {/* SCALP Trade */}
            <div className="border-l-4 border-blue-400 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Incoming Quantitative Trading Intern</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">June 2026 – August 2026</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">SCALP Trade &bull; Chicago, IL</p>
            </div>

            {/* Magnetar */}
            <div className="border-l-4 border-blue-500 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Quantitative Research Intern</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">June 2025 – August 2025</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Magnetar Capital (~$25B AUM) &bull; Evanston, IL</p>
              <p className="text-gray-400 text-base italic mt-1">Python, Databricks, MATLAB &bull; Received Return Offer</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Created tail-hedging option strategies using bear-put spreads to improve 99.5% CVaR of ~$3B fund across 1,000 risk scenarios.</li>
                <li>Implemented Black-Scholes model with stochastic/volatility adjustments to price options and improve CVaR by ~$500M (+60%).</li>
                <li>Optimized allocation of ~$300M asset with factor models using Monte Carlo, Markov Chains, correlation analysis & regression.</li>
              </ul>
            </div>

            {/* Aurelius */}
            <div className="border-l-4 border-blue-500 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Quantitative Analyst</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">May 2024 – August 2024</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Aurelius (FinTech Startup)</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Built technical indicator models (MACD, RSI, Fibonacci Retracement) for market prediction.</li>
                <li>Outperformed market on 20 of top 25 stocks; developed 4% alpha strategy deployed to financial terminal.</li>
              </ul>
            </div>

            {/* Caseflood */}
            <div className="border-l-4 border-blue-500 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Machine Learning Engineer</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">October 2024 – December 2024</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Caseflood.ai (YC W25) &bull; Pittsburgh, PA</p>
              <p className="text-gray-400 text-base italic mt-1">C#, Microsoft Azure</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Founding/Early ML Engineer at Caseflood.ai — accepted into Y-Combinator Winter 2025 batch. Top 1%. $30M+ valuation.</li>
                <li>Developed an AI-agent receptionist for law firms to handle large call volumes and retain clients. Worked directly with law firms.</li>
              </ul>
            </div>

            {/* Dartmouth */}
            <div className="border-l-4 border-blue-500 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Machine Learning Research Intern</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">June 2023 – August 2023</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Dartmouth Emerging Diagnostic and Investigative Technologies Lab &bull; Virtual</p>
              <p className="text-gray-400 text-base italic mt-1">Python, HPC</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Constructed multimodal deep learning models to predict bladder cancer survival/recurrence by analyzing structured (123M vectors) and unstructured data (13M images) from a large cloud database. Used Computer Vision and Big Data Computing.</li>
                <li>Published in F1000 and Zenodo Research journals. Presented at Stanford&apos;s PSB, Dartmouth&apos;s ML conference, and at Cedars-Sinai.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-blue-900 pb-4">Extracurriculars</h2>
          <div className="space-y-8">

            <div className="border-l-4 border-blue-600 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Portfolio Manager</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">January 2025 – Present</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Tartan Student Fund &bull; CMU</p>
              <p className="text-gray-400 text-base italic mt-1">Excel, PowerPoint</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>CMU fund, $150,000 AUM. 43% annual return. PM of the Energy Sector. Top 7 of 100+ applicants.</li>
                <li>Pitched CEG, CCJ, and BEP to the fund.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">President</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">May 2025 – Present</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">CMU Quant Club</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Work with quant firms and MSCF/BSCF to organize competitions and networking events.</li>
                <li>Manage club finances and sponsorships.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <h3 className="text-2xl font-semibold text-white">Teaching Assistant — Probability and Computing (15-259)</h3>
                <span className="text-blue-300 text-lg whitespace-nowrap">December 2025 – Present</span>
              </div>
              <p className="text-blue-200 text-xl mt-1">Carnegie Mellon University, School of Computer Science</p>
              <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Citadel-sponsored Probability and Statistics course. Top scorer of 150 students.</li>
                <li>Teach recitations and write exams.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-blue-900 pb-4">Projects & Competitions</h2>
          <div className="border-l-4 border-blue-500 pl-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <h3 className="text-2xl font-semibold text-white">Jane Street x MathWorks Math Modeling — International Champion</h3>
              <span className="text-blue-300 text-lg whitespace-nowrap">2023 – 2024</span>
            </div>
            <p className="text-gray-400 text-base italic mt-1">Python, MATLAB</p>
            <ul className="mt-4 space-y-2 text-gray-200 text-lg list-disc list-inside">
              <li>2023: 1st overall solution (3,000+ students), Best Communication award, $22,500 prize. Published in the SIURO journal.</li>
              <li>Used ARIMA, Granger Causality, and Markov Chain models to quantify the impact of e-bike growth on industry/society.</li>
              <li>2024: Runner-up, $15,000 prize. Developed a 20-year plan to build 17,306 affordable houses, eliminating 90% of homelessness.</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-blue-900 pb-4">Certifications & Other Achievements</h2>
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex gap-3"><span className="text-blue-400">→</span> Google 5-Day Gen AI Intensive Course (2024)</li>
            <li className="flex gap-3"><span className="text-blue-400">→</span> Rotman Market Simulation Challenge x CMU 2024</li>
            <li className="flex gap-3"><span className="text-blue-400">→</span> 6 CITI Biomedical Research Certifications</li>
            <li className="flex gap-3"><span className="text-blue-400">→</span> Published in F1000, Zenodo, and SIAM Undergrad Research Online (SIURO)</li>
          </ul>
        </section>

        <div className="mt-8 flex gap-6 justify-center flex-wrap">
          <Link href="/education" className="text-blue-400 hover:text-blue-300 text-xl">View Education →</Link>
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-xl">Contact Me →</Link>
        </div>
      </div>
    </main>
  )
}
