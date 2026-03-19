import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function GeographySection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-stroke bg-panel p-8 backdrop-blur-xl sm:p-10">
        <Reveal>
          <SectionTitle
            eyebrow="География"
            title="Работаем по всему Казахстану"
            subtitle="Мы развиваем сеть партнеров и IT-специалистов в разных городах, чтобы клиенты могли быстро получать нужные услуги в своем регионе."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Алматы (развитие партнерства)', 'Астана (масштабирование сети)', 'Регионы Казахстана (поэтапное подключение)'].map((item) => (
              <div key={item} className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Проект ориентирован на работу по всему Казахстану и поэтапно расширяет партнерское присутствие в регионах. В ближайшей перспективе сайт подготовлен к отображению нескольких городов и партнеров.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
