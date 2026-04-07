import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Let&apos;s Connect
        </h1>
        <p className="text-gray-400 text-xl text-center mb-16">
          Feel free to reach out — I&apos;m always open to new opportunities, collaborations, or just a chat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              label: 'LinkedIn',
              handle: 'rishi-prabhu',
              href: 'https://www.linkedin.com/in/rishi-prabhu/',
              icon: '💼',
              description: 'Connect professionally',
            },
            {
              label: 'GitHub',
              handle: 'RishabhPrabhu5',
              href: 'https://github.com/RishabhPrabhu5',
              icon: '🐙',
              description: 'View my projects',
            },
            {
              label: 'Email',
              handle: 'rishiprabhu@cmu.edu',
              href: 'mailto:rishiprabhu@cmu.edu',
              icon: '✉️',
              description: 'Send me a message',
            },
            {
              label: 'Instagram',
              handle: 'rishabh_prabhu5',
              href: 'https://www.instagram.com/rishabh_prabhu5/',
              icon: '📸',
              description: 'Follow along',
            },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] border border-blue-900 rounded-xl p-8 hover:border-blue-500 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl">{link.icon}</span>
                <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">{link.label}</h2>
              </div>
              <p className="text-gray-400 text-base mb-1">{link.description}</p>
              <p className="text-blue-400 text-lg">{link.handle}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-[#0a0a0a] border border-blue-900 rounded-xl p-10 text-center">
          <p className="text-gray-200 text-xl mb-4">Based in Pittsburgh, PA &bull; Open to remote opportunities</p>
          <p className="text-gray-400 text-lg">rishiprabhu@cmu.edu · (703) 505-9685</p>
        </div>
      </div>
    </main>
  )
}
