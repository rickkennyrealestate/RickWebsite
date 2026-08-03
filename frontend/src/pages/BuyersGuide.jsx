import { useState, useEffect } from 'react'
import { FaCheckCircle, FaDownload, FaRegCheckCircle } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { submitWeb3Form } from '../lib/submitForm'

const GUIDE_PDF = '/brazos-valley-buyers-guide.pdf'

const included = [
  'How much home you can actually afford in Bryan-College Station',
  'The step-by-step path from pre-approval to closing day',
  'What to budget beyond the price: taxes, insurance, and closing costs',
  'Neighborhoods and commutes to know around Texas A&M',
  'Red flags to watch for during showings and inspections',
]

function BuyersGuide() {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status === 'success') {
      const link = document.createElement('a')
      link.href = GUIDE_PDF
      link.download = 'Brazos-Valley-Buyers-Guide.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const data = await submitWeb3Form(e.target)
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <Seo
        title="Free Brazos Valley Buyers Guide | Rick Kenny"
        description="Download a free, step-by-step guide to buying a home in College Station, Bryan, and Aggieland."
      />

      <PageHeader
        eyebrow="Free Download"
        title="The Brazos Valley Buyers Guide"
        subtitle="A plain-English, step-by-step guide to buying a home in College Station, Bryan, and Aggieland, from pre-approval to keys in hand."
      />

      <section className="bg-background py-16">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* What's inside */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">What&rsquo;s inside</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Everything a first-time or relocating buyer needs to move through the Brazos Valley
              market with confidence.
            </p>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaRegCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <FaCheckCircle className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 text-2xl font-bold text-foreground">Your guide is on the way!</h3>
                  <p className="mt-3 max-w-md text-base text-muted-foreground">
                    Your download should start automatically. If it doesn&rsquo;t, use the button
                    below. Rick also has your info and may reach out to answer any questions.
                  </p>
                  <Button asChild className="mt-6" size="lg">
                    <a href={GUIDE_PDF} download="Brazos-Valley-Buyers-Guide.pdf">
                      <FaDownload className="mr-2 h-4 w-4" />
                      Download Your Guide
                    </a>
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-foreground">Get your free copy</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Enter your details and the guide downloads instantly.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <input
                      type="hidden"
                      name="subject"
                      value="New Buyers Guide Download — rickkenny.com"
                    />
                    <input type="hidden" name="from_name" value="Rick Kenny Website" />
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      style={{ display: 'none' }}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(000) 000-0000"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-destructive">
                        Something went wrong. Please try again, or call Rick at 281-608-1151.
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Me the Free Guide'}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      We&rsquo;ll never share or sell your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuyersGuide
