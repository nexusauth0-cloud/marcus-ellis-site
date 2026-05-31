export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <div className="inline-block border border-green-accent/30 text-green-accent text-xs tracking-[0.2em] px-4 py-2 rounded-full mb-8 uppercase">
          Elite Performance Coaching
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
          TRAIN WITH<br />
          <span className="text-green-accent">PURPOSE</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop making excuses. Start making progress. Marcus Ellis delivers
          world-class personal training that transforms your body, sharpens your
          mind, and builds unshakable discipline.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-green-accent text-dark-900 px-10 py-4 rounded text-base font-bold tracking-wide hover:bg-green-accent-dim transition-all hover:scale-105">
            START YOUR TRANSFORMATION
          </a>
          <a href="#results" className="border border-white/20 text-white px-10 py-4 rounded text-base font-bold tracking-wide hover:border-green-accent/50 hover:text-green-accent transition-all">
            SEE RESULTS
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-black text-green-accent">500+</div>
            <div className="text-white/40 text-sm mt-1">Clients Transformed</div>
          </div>
          <div>
            <div className="text-3xl font-black text-green-accent">12+</div>
            <div className="text-white/40 text-sm mt-1">Years Coaching</div>
          </div>
          <div>
            <div className="text-3xl font-black text-green-accent">98%</div>
            <div className="text-white/40 text-sm mt-1">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
