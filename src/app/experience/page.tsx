import Link from 'next/link'
import Image from 'next/image'

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          Experience
        </h1>
        
        <div className="space-y-20">
          {/* Current Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Current Experience</h2>
            
            {/* Magnetar Capital */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Incoming Quantitative Analyst Intern</h3>
                  <p className="text-blue-200 text-2xl mt-2">Magnetar Capital</p>
                </div>
                <p className="text-gray-300 text-xl">Summer 2025</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">
                Upcoming quantitative analyst internship at a leading alternative asset management firm, focusing on systematic trading strategies and quantitative research
                I'll be working with experienced Quantitative Researchers and getting hands-on experience witih model development, strategy backtesting, portfolio optmization, and deployment.
              </p>
            </div>

            {/* Tartan Student Fund */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Equity Research Analyst</h3>
                  <p className="text-blue-200 text-2xl mt-2">Tartan Student Fund</p>
                </div>
                <p className="text-gray-300 text-xl">January 2024 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Conduct fundamental analysis and market research for energy sector investments in Jane Street-sponsored fund with ~$100,000 AUM</li>
                <li>Develop quantitative models for portfolio optimization and risk management</li>
                <li>Present investment recommendations to the investment committee</li>
              </ul>
            </div>
          </div>

          {/* Past Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Past Experience</h2>
            {/* Caseflood.ai */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Machine Learning Engineer</h3>
                  <p className="text-blue-200 text-2xl mt-2">Caseflood.ai (YC W25)</p>
                </div>
                <p className="text-gray-300 text-xl">October 2023 - December 2023</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Developed AI-powered receptionist for law firms, handling client intake and scheduling</li>
                <li>Implemented natural language processing models for automated responses</li>
                <li>Collaborated with founding team to define product roadmap and technical architecture</li>
              </ul>
            </div>

            {/* MathWorks Math Modeling Challenge */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Quantitative Analyst</h3>
                  <p className="text-blue-200 text-2xl mt-2">Aurelius (FinTech StartUp)</p>
                </div>
                <p className="text-gray-300 text-xl"> May 2024 - August 2024 </p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Implemented MACD, RSI, & Fibonacci Retracement Level models in Python on minute-by-minute equities data from polygon</li>
                <li>Outperformed the market on 20 of the top 25 stocks (by MCAP) with a 4% alpha strategy using RSI/MACD models on backend</li>
                <li>Backtested strategies incorporating technical indicators. Deployed model to Aurelius financial terminal for MVP & consumer use</li>
              </ul>
            </div>

            {/* MathWorks Math Modeling Challenge */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Machine Learning Research Intern</h3>
                  <p className="text-blue-200 text-2xl mt-2">Dartmouth Health E.D.I.T</p>
                </div>
                <p className="text-gray-300 text-xl"> June 2023 - August 2023</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Published in the F1000 and Zenodo Research journals (https://doi.org/10.5281/zenodo.10433067), presented to Cedars-Sinai.</li>
                <li>Constructed multimodal deep learning models to predict bladder cancer survival by analyzing structured (123 million DNAm and HiTIMED) and unstructured data (>13 million Whole Slide Image patches) from large database —> Big Data Processing. 
                </li>
                <li>Implemented and trained GCN on patch embeddings from WSIs. Deployed jobs on GPUs, HPC, and Cloud Computing Services</li>
                <li>Presented at Stanford's Pacific Symposium on Biocomputing (PSB) 2024 and Dartmouth’s EDIT ML 2023 final conference</li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Certifications & Achievements</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <ul className="list-disc list-inside text-gray-200 text-xl space-y-4">
                <li>Google 5-Day Gen AI Intensive Course (2024)</li>
                <li>Rotman Market Simulation Challenge x CMU 2024</li>
                <li>6 CITI Biomedical Research Certifications</li>
                <li>MathWorks Math Modeling Challenge First Place ($20,000)</li>
              </ul>
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