import PageHeader from '../components/PageHeader'

function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your move"
        subtitle="Reach out by phone, text, or email and Rick will get right back to you."
      />
      <section className="container py-16">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          A full contact form that emails Rick directly is coming in the next phase.
        </p>
      </section>
    </div>
  )
}

export default Contact
