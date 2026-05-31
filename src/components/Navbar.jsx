import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Results', href: '#results' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          MARCUS <span className="text-green-accent">ELLIS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 hover:text-green-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="bg-green-accent text-dark-900 px-5 py-2 rounded text-sm font-bold hover:bg-green-accent-dim transition-colors">
            BOOK NOW
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-white/70 hover:text-green-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-green-accent text-dark-900 px-5 py-2 rounded text-sm font-bold text-center hover:bg-green-accent-dim transition-colors">
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  )
}
