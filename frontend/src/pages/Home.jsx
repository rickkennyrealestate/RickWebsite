import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaMapMarkedAlt,
  FaHeadset,
  FaHandshake,
  FaHome,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaArrowRight,
  FaCheckCircle,
  FaFileDownload,
  FaDollarSign,
} from 'react-icons/fa'
import { Button } from '../components/ui/button'

const heroImages = [
  '/assets/images/home-1.jpg',
  '/assets/images/home-2.jpg',
  '/assets/images/home-3.jpg',
  '/assets/images/home-4.jpg',
  '/assets/images/home-5.jpg',
  '/assets/images/home-6.jpg',
]

const valueProps = [
  {
    icon: FaMapMarkedAlt,
    title: 'Aggieland Roots',
    description:
      'Born-and-raised local knowledge of College Station, Bryan, and every neighborhood in between.',
  },
  {
    icon: FaHeadset,
    title: 'Responsive Service',
    description:
      'Calls and texts returned the same day. You are never left wondering where things stand.',
  },
  {
    icon: FaHandshake,
    title: 'Smart Negotiation',
    description:
      'Data-driven strategy that protects your bottom line whether you are buying or selling.',
  },
  {
    icon: FaHome,
    title: 'Full-Service Support',
    description:
      'From first showing to closing table, every detail is handled so you can move with confidence.',
  },
]

const featuredListings = [
  {
    image: '/assets/images/listing-1.jpg',
    price: '$425,000',
    status: 'For Sale',
    address: '4207 Hollow Stone Dr, College Station',
    beds: 4,
    baths: 3,
    sqft: '2,480',
  },
  {
    image: '/assets/images/listing-2.jpg',
    price: '$318,500',
    status: 'For Sale',
    address: '1512 Austin Ave, Bryan',
    beds: 3,
    baths: 2,
    sqft: '1,860',
  },
  {
    image: '/assets/images/listing-3.jpg',
    price: '$549,900',
    status: 'New Listing',
    address: '3320 Wildwood Ln, College Station',
    beds: 4,
    baths: 3,
    sqft: '3,120',
  },
]

function Home() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>

        <div className="container relative flex min-h-[600px] flex-col justify-center py-24 md:min-h-[680px]">
          <div className="max-w-2xl animate-slideUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              REALTOR serving the Brazos Valley
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl">
              Your Trusted Guide to Brazos Valley Real Estate
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              Buying or selling in College Station, Bryan, or the surrounding Aggieland communities?
              Rick Kenny brings local roots, sharp negotiation, and full-service care to every move.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <Link to="/listings">
                  View Listings
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-background/10 text-background backdrop-blur-sm hover:bg-background hover:text-foreground"
              >
                <Link to="/home-value">
                  <FaDollarSign className="mr-2 h-4 w-4" />
                  Free Home Valuation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-background/10 text-background backdrop-blur-sm hover:bg-background hover:text-foreground"
              >
                <Link to="/buyers-guide">
                  <FaFileDownload className="mr-2 h-4 w-4" />
                  Free Buyers Guide
                </Link>
              </Button>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-background/70">
              <FaCheckCircle className="h-4 w-4 text-primary" />
              100% Free &middot; No obligation &middot; No pressure
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show home ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-background' : 'w-2 bg-background/50 hover:bg-background/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-border bg-background py-20">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary/10" />
              <img
                src="/assets/images/rick-headshot.png"
                alt="Rick Kenny, REALTOR"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet Rick Kenny
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A local partner who treats your move like his own
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Real estate in the Brazos Valley is personal. Rick pairs deep Aggieland knowledge with
              a straightforward, no-pressure approach, so whether you are putting down roots near
              campus or selling the family home, you have a steady hand from first conversation to
              closing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The result is simple: honest guidance, quick answers, and a plan built around your
              goals, not a quota.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">
                  More About Rick
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why work with Rick
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Four things you can count on at every stage of your real estate journey.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, i) => (
              <div
                key={prop.title}
                className={`group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  i % 2 === 1 ? 'lg:mt-8' : ''
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <prop.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Featured Homes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Currently on the market
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/listings">
                See All Listings
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <article
                key={listing.address}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {listing.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold text-foreground">{listing.price}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{listing.address}</p>
                  <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm text-foreground/80">
                    <span className="flex items-center gap-2">
                      <FaBed className="h-4 w-4 text-primary" />
                      {listing.beds} bd
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBath className="h-4 w-4 text-primary" />
                      {listing.baths} ba
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRulerCombined className="h-4 w-4 text-primary" />
                      {listing.sqft} sqft
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Home value CTA */}
      <section className="bg-primary py-16">
        <div className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Thinking of selling? Find out what your home is worth.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Get a free, no-obligation home valuation based on real Brazos Valley market data.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-background text-foreground shadow-lg hover:bg-background/90"
          >
            <Link to="/home-value">
              Free Home Valuation
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
