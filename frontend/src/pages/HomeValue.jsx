import PageHeader from '../components/PageHeader'

function HomeValue() {
  return (
    <div>
      <PageHeader
        eyebrow="Home Valuation"
        title="What's My Home Worth?"
        subtitle="Get a free, no-obligation estimate based on real Brazos Valley market data."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          The home valuation request form is coming in the next phase.
        </p>
      </section>
    </div>
  )
}

export default HomeValue
