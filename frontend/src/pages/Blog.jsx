import PageHeader from '../components/PageHeader'

function Blog() {
  return (
    <div>
      <PageHeader
        eyebrow="Blog"
        title="Brazos Valley Market Insights"
        subtitle="Tips, trends, and local market updates for buyers and sellers in Aggieland."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Articles and market updates are coming together here. This page is next up in the build.
        </p>
      </section>
    </div>
  )
}

export default Blog
