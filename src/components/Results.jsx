const results = [
  {
    name: 'Alex R.',
    title: '12-Week Transformation',
    quote: 'Lost 28 lbs, gained 15 lbs of muscle. Completely changed my relationship with food and fitness.',
    metrics: ['-28 lbs', '+15 lbs muscle', '8% body fat'],
  },
  {
    name: 'Sarah K.',
    title: 'Strength Rebuild',
    quote: 'Came back from a back injury stronger than ever. Deadlift went from 135 to 405 in 10 months.',
    metrics: ['405 lb deadlift', '10 month recovery', 'Pain-free training'],
  },
  {
    name: 'Marcus T.',
    title: 'Body Composition Overhaul',
    quote: 'Dropped from 22% to 9% body fat while maintaining strength. Marcus programmed every single macro.',
    metrics: ['22% → 9% BF', 'Maintained strength', 'Custom nutrition'],
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent text-xs tracking-[0.2em] uppercase font-medium">Real People. Real Results</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            TRANSFORMATIONS THAT<br />
            <span className="text-green-accent">SPEAK FOR THEMSELVES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <div key={i} className="bg-dark-700/50 border border-white/5 rounded-xl p-8 hover:border-green-accent/20 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-green-accent/10 flex items-center justify-center mb-6 group-hover:bg-green-accent/20 transition-colors">
                <span className="text-green-accent font-black">{r.name[0]}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{r.name}</h3>
              <p className="text-green-accent text-sm font-medium mb-4">{r.title}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{r.quote}</p>
              <div className="flex flex-wrap gap-2">
                {r.metrics.map((m, j) => (
                  <span key={j} className="text-xs font-bold bg-green-accent/10 text-green-accent px-3 py-1.5 rounded-full">{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
