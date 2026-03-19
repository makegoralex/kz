import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function GeographySection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-stroke bg-panel p-8 backdrop-blur-xl sm:p-10">
        <Reveal>
          <SectionTitle
            eyebrow="География"
            title="Работаем по Казахстану"
            subtitle="География остается важной, но вторичной частью сервиса: в приоритете качество услуг по ремонту, продаже техники и IT-обслуживанию для клиентов в разных городах."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Алматы — сервис и партнерские проекты', 'Астана — обслуживание бизнеса и IT-задач', 'Другие регионы Казахстана — подключение по запросу'].map((item) => (
              <div key={item} className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Мы поэтапно расширяем присутствие в регионах Казахстана, чтобы клиенты могли получать ремонт, поставку техники, установку программ и другие IT-услуги в удобном формате.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
