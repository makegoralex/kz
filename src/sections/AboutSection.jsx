import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const metrics = ['24/7', 'Казахстан', 'IT-услуги', 'Партнерская сеть']

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="О проекте"
            title="О проекте AGGREGATOR 24/7"
            subtitle="AGGREGATOR 24/7 — это IT-проект, объединяющий услуги и специалистов по всему Казахстану. Мы помогаем быстро находить решения для ремонта техники, цифровой разработки и технической поддержки, выстраивая удобную систему взаимодействия между клиентом и исполнителем."
          />
          <p className="mt-4 text-slate-300">
            Мы развиваем сеть партнеров и региональных представителей, чтобы обеспечить доступ к качественным IT-услугам в разных городах и масштабировать единый стандарт сервиса.
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
