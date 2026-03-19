import ContactButtons from '../components/ContactButtons'
import { contacts } from '../data/siteData'

export default function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 via-slate-900 to-violet-500/15 p-8 shadow-glow sm:p-10">
        <h2 className="text-3xl font-bold text-white">Нужен ремонт, покупка техники или настройка программ?</h2>
        <p className="mt-4 max-w-3xl text-slate-200">
          Свяжитесь с AGGREGATOR 24/7: поможем с ремонтом оргтехники, подбором и продажей оборудования, установкой программ, настройкой бухгалтерского ПО, а также с разработкой сайтов и приложений.
        </p>
        <div className="mt-8">
          <ContactButtons phoneHref={contacts.telLinks[0]} waHref={contacts.waLinks[0]} />
        </div>
      </div>
    </section>
  )
}
