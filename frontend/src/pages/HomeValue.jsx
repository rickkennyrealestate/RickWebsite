import { useState } from 'react'
import { FaCheckCircle, FaChartLine, FaMapMarkerAlt, FaTag } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { submitWeb3Form } from '../lib/submitForm'

const benefits = [
  {
    icon: FaChartLine,
    title: 'Real local data',
    description: 'Priced against recent Bryan-College Station sales, not a generic online estimate.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Neighborhood expertise',
    description: 'A finance-trained read on what buyers are actually paying in your area right now.',
  },
  {
    icon: FaTag,
    title: 'No cost, no pressure',
    description: 'A genuine, no-obligation valuation, whether you sell this year or in five.',
  },
]

function HomeValue() {
  const [status, setStatus] = useState('idle')

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
        title="Free Home Valuation | What's My Home Worth in Bryan-College Station"
        description="Get a free, no-obligation home valuation based on real Brazos Valley market data from REALTOR Rick Kenny."
      />

      <PageHeader
        eyebrow="Free Home Valuation"
        title="What's your home worth?"
        subtitle="Get a free, no-obligation estimate based on real Brazos Valley market data, prepared personally by Rick."
      />

      <section className="bg-background py-16">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Value props */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">More than an algorithm</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Online estimators guess. Rick prepares your valuation by hand, using recent local sales
              and current buyer demand so you get a number you can actually plan around.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <FaCheckCircle className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 text-2xl font-bold text-foreground">Request received!</h3>
                  <p className="mt-3 max-w-md text-base text-muted-foreground">
                    Rick will review your property and send over a personalized valuation shortly.
                    Keep an eye on your inbox and phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="hidden"
                    name="subject"
                    value="New Home Valuation Request — rickkenny.com"
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

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="(000) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input
                      id="address"
                      name="property_address"
                      required
                      placeholder="123 Main St, College Station, TX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Anything Rick should know? (optional)</Label>
                    <Textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Recent updates, timeline for selling, questions..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again, or call Rick directly at 281-608-1151.
                    </p>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Get My Free Valuation'}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    100% free and no obligation. Your information is never shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeValue
