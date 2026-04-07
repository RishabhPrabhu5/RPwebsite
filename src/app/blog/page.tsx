import Link from 'next/link'

const posts = [
  {
    title: 'Quantitative Finance: A Student\'s Perspective',
    description: 'My journey into the world of quantitative finance and algorithmic trading — from TJ to CMU to Magnetar Capital.',
    date: 'Coming Soon',
    href: '#',
  },
  {
    title: 'Machine Learning in Finance',
    description: 'Exploring the intersection of AI and financial markets, and what I learned building models at a $25B hedge fund.',
    date: 'Coming Soon',
    href: '#',
  },
  {
    title: 'Technical Analysis Deep Dive',
    description: 'Understanding market indicators and trading strategies — MACD, RSI, Fibonacci, and beyond.',
    date: 'Coming Soon',
    href: '#',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Blog
        </h1>
        <p className="text-gray-400 text-xl text-center mb-16">
          Still in progress — blog is not yet available. Stay tuned!
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.title} className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 opacity-70">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
                <span className="text-blue-300 text-sm whitespace-nowrap italic">{post.date}</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{post.description}</p>
              <span className="text-gray-500 text-sm cursor-not-allowed">Read more →</span>
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
