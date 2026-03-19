import { motion } from 'framer-motion'
import ContactButtons from '../components/ContactButtons'
import { contacts, heroBadges } from '../data/siteData'

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ x: [0, 18, -10, 0], y: [0, 10, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"
          animate={{ x: [0, -20, 14, 0], y: [0, -16, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl font-black leading-tight text-cyan-100 sm:text-5xl lg:text-6xl"
        >
          AGGREGATOR 24/7 <br />
          <span className="inline-block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">Ремонт, продажа и IT-обслуживание техники</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          Ремонт ноутбуков, принтеров и оргтехники, продажа оборудования для офиса, установка и настройка программ, поддержка бухгалтерского ПО, разработка сайтов и приложений, IT-сопровождение бизнеса.
        </motion.p>
        <div className="mt-8">
          <ContactButtons phoneHref={contacts.telLinks[0]} waHref={contacts.waLinks[0]} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {heroBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 backdrop-blur">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
