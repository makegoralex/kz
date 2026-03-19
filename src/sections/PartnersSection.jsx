import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { partners } from '../data/siteData'

export default function PartnersSection() {
  return (
    <section id="partners" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Партнерская сеть"
            title="Партнеры"
            subtitle="Мы строим сеть партнеров и региональных представителей, чтобы оказывать IT-услуги быстрее и ближе к клиенту."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partners.map((partner, index) => (
            <Reveal key={partner.id} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-stroke bg-panel p-6 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/40">
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                <p className="mt-2 text-sm text-cyan-200">{partner.status}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{partner.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
