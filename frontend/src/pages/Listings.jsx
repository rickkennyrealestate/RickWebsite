import PageHeader from '../components/PageHeader'

function Listings() {
  return (
    <div>
      <PageHeader
        eyebrow="Listings"
        title="Homes in the Brazos Valley"
        subtitle="Featured properties across College Station, Bryan, and the surrounding Aggieland communities."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          The full listings gallery is coming together here. This page is next up in the build.
        </p>
      </section>
    </div>
  )
}

export default Listings
