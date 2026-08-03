import { useState } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaCheckCircle,
} from 'react-icons/fa'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import PageHeader from '../components/PageHeader'
import { submitWeb3Form } from '../lib/submitForm'

const contactMethods = [
  { icon: FaPhoneAlt, label: 'Call or Text', value: '281-608-1151', href: 'tel:2816081151' },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rickkennyrealestate@gmail.com',
    href: 'mailto:rickkennyrealestate@gmail.com',
  },
  { icon: FaMapMarkerAlt, label: 'Serving', value: 'Bryan-College Station & the Brazos Valley' },
]

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/rick.kenny.411029/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/rickrealestatetx/', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@rickrealestatetx', label: 'TikTok' },
]

function Contact() {
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
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your move"
        subtitle="Call, text, or send a message and Rick will get right back to you, usually the same day."
      />

      <section className="bg-background py-16">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Whether you&rsquo;re buying, selling, or just exploring your options, no question is
              too small. Reach out however works best for you.
            </p>

            <div className="mt-8 space-y-6">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <method.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-base font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-foreground">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <FaCheckCircle className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 text-2xl font-bold text-foreground">Message sent!</h3>
                  <p className="mt-3 max-w-md text-base text-muted-foreground">
                    Thanks for reaching out. Rick has your message and will be in touch shortly,
                    usually within a few hours.
                  </p>
                  <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="subject" value="New Contact Inquiry — rickkenny.com" />
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
                      <Input id="phone" name="phone" type="tel" placeholder="(000) 000-0000" />
                    </div>
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
                    <Label htmlFor="message">How can Rick help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell Rick a little about what you're looking for..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-destructive">
                      Something went wrong sending your message. Please try again, or call Rick
                      directly at 281-608-1151.
                    </p>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
