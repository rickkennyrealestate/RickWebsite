import PageHeader from '../components/PageHeader'

function BuyersGuide() {
  return (
    <div>
      <PageHeader
        eyebrow="Free Download"
        title="The Brazos Valley Buyers Guide"
        subtitle="A step-by-step guide to buying a home in College Station, Bryan, and Aggieland — from getting pre-approved to closing day."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          The download form to get your free guide by email is coming in the next phase.
        </p>
      </section>
    </div>
  )
}

export default BuyersGuide
