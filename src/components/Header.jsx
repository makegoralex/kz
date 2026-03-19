import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-sm font-extrabold tracking-[0.2em] text-white sm:text-base">
          AGGREGATOR <span className="text-cyan-300">24/7</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#contacts" className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950">
            Связаться
          </a>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-white/10 p-2 text-white md:hidden" aria-label="Открыть меню">
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm text-slate-200 hover:bg-white/5">
                {link.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-slate-950">
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
