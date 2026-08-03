import PageHeader from '../components/PageHeader'

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Meet Rick Kenny"
        subtitle="A full-service REALTOR with deep Aggieland roots, helping families buy and sell across the Brazos Valley."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Rick&apos;s full biography, credentials, and client story are coming together here. This
          page is next up in the build.
        </p>
      </section>
    </div>
  )
}

export default About
