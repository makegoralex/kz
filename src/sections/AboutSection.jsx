import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const metrics = ['Ремонт и сервис', 'Продажа оргтехники', 'ПО и бухгалтерия', 'IT-разработка']

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="О проекте"
            title="О проекте AGGREGATOR 24/7"
            subtitle="AGGREGATOR 24/7 — сервис для бизнеса и частных клиентов, который объединяет ремонт оргтехники и компьютерной техники, продажу оборудования, установку и настройку программ, сопровождение бухгалтерского ПО и цифровые IT-услуги."
          />
          <p className="mt-4 text-slate-300">
            Мы обслуживаем офисную технику, помогаем с рабочими программами на ПК, подбираем технику под задачи компании и реализуем проекты по разработке сайтов, приложений и IT-поддержке. Работаем по Казахстану через собственную и партнерскую сеть, сохраняя единый стандарт качества сервиса.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((item) => (
              <div key={item} className="rounded-2xl border border-stroke bg-panel p-6 text-center text-lg font-semibold text-white backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
