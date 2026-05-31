import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent text-xs tracking-[0.2em] uppercase font-medium">Take the First Step</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            READY TO<br />
            <span className="text-green-accent">TRANSFORM?</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Fill out the form below and I&rsquo;ll reach out within 24 hours to schedule
            your free consultation.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {submitted ? (
            <div className="bg-dark-700/50 border border-green-accent/20 rounded-xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-green-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-accent">&#10003;</span>
              </div>
              <h3 className="text-xl font-bold mb-2">YOU&rsquo;RE IN.</h3>
              <p className="text-white/50 text-sm">Check your inbox — I&rsquo;ll be in touch within 24 hours. Let&rsquo;s get to work.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-accent/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-accent/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-accent/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-accent/50 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">What are you looking for?</label>
                <select
                  required
                  className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-green-accent/50 transition-colors"
                >
                  <option value="">Select a program</option>
                  <option value="foundation">Foundation — $499/mo</option>
                  <option value="elite">Elite — $799/mo</option>
                  <option value="online">Online Coaching — $299/mo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-700/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-accent/50 transition-colors resize-none"
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-accent text-dark-900 py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-green-accent-dim transition-all hover:scale-[1.02]"
              >
                SEND APPLICATION
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
