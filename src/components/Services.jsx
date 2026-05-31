const plans = [
  {
    name: 'Foundation',
    price: '499',
    period: '/month',
    desc: 'For those ready to commit and build a real foundation.',
    features: [
      '4 sessions / week',
      'Custom program design',
      'Nutrition guidance',
      'Weekly check-ins',
      'Form correction video review',
    ],
  },
  {
    name: 'Elite',
    price: '799',
    period: '/month',
    best: true,
    desc: 'Full immersion. Maximum accountability. Maximum results.',
    features: [
      '6 sessions / week',
      'Custom program + nutrition',
      'Daily check-ins',
      'Supplement protocol',
      'Priority scheduling',
      '24/7 direct messaging',
    ],
  },
  {
    name: 'Online',
    price: '299',
    period: '/month',
    desc: 'Remote coaching for athletes outside of Denver.',
    features: [
      'Custom program delivered via app',
      'Weekly video calls',
      'Macro coaching',
      'Form review',
      'Unlimited messaging',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent text-xs tracking-[0.2em] uppercase font-medium">What You Get</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            SERVICES &<br />
            <span className="text-green-accent">PRICING</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-xl border p-8 flex flex-col ${
                p.best
                  ? 'bg-dark-700 border-green-accent/40 shadow-[0_0_30px_-5px_rgba(57,255,20,0.15)]'
                  : 'bg-dark-800/50 border-white/5'
              }`}
            >
              {p.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-accent text-dark-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-white/40 text-sm mb-6">{p.desc}</p>

              <div className="mb-8">
                <span className="text-4xl font-black">${p.price}</span>
                <span className="text-white/40 text-sm ml-1">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="text-sm text-white/70 flex items-start gap-3">
                    <span className="text-green-accent mt-0.5">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded text-sm font-bold transition-all ${
                  p.best
                    ? 'bg-green-accent text-dark-900 hover:bg-green-accent-dim'
                    : 'border border-white/20 text-white hover:border-green-accent/50 hover:text-green-accent'
                }`}
              >
                GET STARTED
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
