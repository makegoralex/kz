export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-300">{subtitle}</p>}
    </div>
  )
}
