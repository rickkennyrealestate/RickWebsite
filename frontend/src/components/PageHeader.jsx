function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container py-16 md:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
