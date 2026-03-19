import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { advantages } from '../data/siteData'

export default function AdvantagesSection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle title="Почему выбирают AGGREGATOR 24/7" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-stroke bg-white/5 p-5">
                  <Icon className="mb-3 text-cyan-300" size={20} />
                  <p className="text-sm font-medium text-slate-100">{item.title}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
