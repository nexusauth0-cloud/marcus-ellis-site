export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-bold tracking-tight">
          MARCUS <span className="text-green-accent">ELLIS</span>
          <span className="text-white/20 font-normal ml-2">&mdash; Elite Performance Coach</span>
        </div>

        <div className="flex gap-6 text-xs text-white/30">
          <span>Denver, CO</span>
          <span>marcus@ellisperform.com</span>
        </div>

        <div className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Marcus Ellis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
