import { navLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-bold tracking-[0.16em] text-white">AGGREGATOR 24/7</p>
          <p className="mt-2">IT-услуги по всему Казахстану</p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-slate-200">Навигация</p>
          <div className="flex flex-wrap gap-3">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p>© AGGREGATOR 24/7. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
