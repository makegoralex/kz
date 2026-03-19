export default function ContactButtons({ phoneHref, waHref, compact = false }) {
  return (
    <div className={`flex ${compact ? 'flex-wrap gap-2' : 'flex-col gap-3 sm:flex-row sm:items-center'}`}>
      <a href={phoneHref} className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
        Позвонить
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-cyan-300/50 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/10"
      >
        Написать в WhatsApp
      </a>
    </div>
  )
}
