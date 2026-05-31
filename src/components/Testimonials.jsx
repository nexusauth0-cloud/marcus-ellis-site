const testimonials = [
  {
    name: 'Jenna L.',
    role: 'Competitive CrossFitter',
    body: 'Marcus took my training from good to elite. His programming is smart, brutal, and effective. I\'ve hit PRs in every lift since starting with him.',
  },
  {
    name: 'David M.',
    role: 'Executive, 48',
    body: 'I was skeptical about personal training at my age. Marcus showed me it\'s never too late. I\'m stronger, leaner, and more energetic than I was at 30.',
  },
  {
    name: 'Priya S.',
    role: 'Marathon Runner',
    body: 'The strength work Marcus programmed for me took 12 minutes off my half marathon time. I used to avoid the weight room. Now I look forward to it.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent text-xs tracking-[0.2em] uppercase font-medium">What Clients Say</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            CLIENT<br />
            <span className="text-green-accent">TESTIMONIALS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-dark-700/50 border border-white/5 rounded-xl p-8 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-green-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">&ldquo;{t.body}&rdquo;</p>
              <div>
                <div className="text-sm font-bold">{t.name}</div>
                <div className="text-green-accent text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
