import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { processSteps } from '../data/siteData'

export default function ProcessSection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle title="Как мы работаем" subtitle="Простой сценарий взаимодействия — от запроса до результата и сопровождения." />
        </Reveal>
        <div className="mt-8 space-y-3">
          {processSteps.map((step, idx) => (
            <Reveal key={step} delay={idx * 0.06}>
              <div className="flex gap-4 rounded-2xl border border-stroke bg-panel p-5 backdrop-blur-xl">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-100 sm:text-base">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
