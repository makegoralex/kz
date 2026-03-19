import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/siteData'

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Что делаем"
            title="Наши услуги"
            subtitle="Основной фокус — ремонт и обслуживание оргтехники, продажа оборудования, установка программ и поддержка бухгалтерского ПО. Дополнительно реализуем цифровые проекты: сайты, приложения и комплексное IT-сопровождение."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-stroke bg-panel p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
                  <div className="mb-4 inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
