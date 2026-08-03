import { Link } from 'react-router-dom'
import {
  FaChartLine,
  FaHome,
  FaGraduationCap,
  FaKey,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'
import { Button } from '../components/ui/button'
import PageHeader from '../components/PageHeader'

const highlights = [
  {
    icon: FaChartLine,
    title: 'Mays Finance Background',
    description:
      'A finance major at Texas A&M’s Mays Business School, Rick brings a numbers-first eye to pricing, offers, and negotiation.',
  },
  {
    icon: FaHome,
    title: 'Family Real Estate Roots',
    description:
      'Raised around the business, with a lifelong instinct for what makes a house feel like the right home.',
  },
  {
    icon: FaGraduationCap,
    title: 'Aggie Through and Through',
    description:
      'A proud Aggie with deep ties to Texas A&M, the Aggie Real Estate Club, and the greater Brazos Valley community.',
  },
  {
    icon: FaKey,
    title: 'Investor Mindset',
    description:
      'Thinks in long-term value, not just today’s sale — an edge for first-time buyers and investor clients alike.',
  },
]

const stats = [
  { value: '30+', label: 'Years combined team experience' },
  { value: 'Mays', label: 'A&M finance background' },
  { value: 'Aggie', label: 'Real Estate Club member' },
  { value: 'Local', label: 'Brazos Valley through and through' },
]

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Meet Rick Kenny"
        subtitle="Aggie-raised, finance-trained, and backed by a team with decades of Brazos Valley experience."
      />

      {/* Story */}
      <section className="bg-background py-20">
        <div className="container grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary/10" />
              <img
                src="/assets/images/rick-headshot.png"
                alt="Rick Kenny, REALTOR"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">My Story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real estate has been part of my life for as long as I can remember
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Growing up in a family of real estate professionals, I learned early that a home is
                far more than a transaction. It is where life happens, and helping people find their
                place is something I genuinely love.
              </p>
              <p>
                Today I am a REALTOR&reg; with Aggieland Realtors and a finance major at Texas
                A&amp;M&rsquo;s Mays Business School. That finance training shapes the way I work: I
                read the market with a numbers-first mindset, structure offers strategically, and
                make sure my clients understand the real financial picture behind every decision.
              </p>
              <p>
                I am an active member of the Aggie Real Estate Club, I surround myself with investors
                and entrepreneurs, and I am building toward becoming an investor myself. For you, that
                means an agent who thinks about property the way a savvy buyer should &mdash;
                long-term value, not just today&rsquo;s sale.
              </p>
              <p>
                And I never work alone. I am backed by an Aggieland Realtors team with more than 30
                years of combined experience across the Brazos Valley, so you get fresh energy and
                sharp analysis with a deep, seasoned bench behind every deal.
              </p>
              <p>
                A proud Aggie &mdash; with a sister who is part of the Aggie family too &mdash; I know
                College Station, Bryan, and the surrounding Brazos Valley not as a market, but as
                home.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/contact">
                  Get In Touch
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/home-value">Free Home Valuation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I bring to your move
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A blend of analytical training, local roots, and a genuine passion for real estate.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Let&rsquo;s find your place in the Brazos Valley
            </h2>
            <p className="mt-4 flex items-center justify-center gap-2 text-base text-primary-foreground/80 md:justify-start">
              <FaCheckCircle className="h-4 w-4" />
              No pressure, no obligation &mdash; just honest guidance.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-background text-foreground shadow-lg hover:bg-background/90"
          >
            <Link to="/contact">
              Contact Rick
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default About
