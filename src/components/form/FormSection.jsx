export default function FormSection({ step, title, children }) {
  return (
    <section className="space-y-5">
      <h2 className="flex items-center gap-3 text-base text-ink">
        <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-medium text-page">
          {step}
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}
