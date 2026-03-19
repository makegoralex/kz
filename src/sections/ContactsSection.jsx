import SectionTitle from '../components/SectionTitle'
import { contacts } from '../data/siteData'

export default function ContactsSection() {
  return (
    <section id="contacts" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Контакты" subtitle="Связь по вопросам IT-услуг, партнерства и цифровых решений." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contacts.phones.map((phone, i) => (
            <article key={phone} className="rounded-2xl border border-stroke bg-panel p-6">
              <p className="text-sm text-slate-400">Телефон {i + 1}</p>
              <a href={contacts.telLinks[i]} className="mt-2 block text-2xl font-semibold text-white hover:text-cyan-300">
                {phone}
              </a>
              <div className="mt-4 flex gap-3">
                <a href={contacts.telLinks[i]} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
                  Позвонить
                </a>
                <a href={contacts.waLinks[i]} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100">
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
