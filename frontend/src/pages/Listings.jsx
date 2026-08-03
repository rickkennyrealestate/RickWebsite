import { Link } from 'react-router-dom'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import PageHeader from '../components/PageHeader'

function Listings() {
  return (
    <div>
      <PageHeader
        eyebrow="Listings"
        title="Search Brazos Valley Homes"
        subtitle="Browse live listings across College Station, Bryan, and the surrounding Brazos County communities, straight from the local MLS."
      />

      {/* Search helper bar */}
      <section className="border-b border-border bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaSearch className="h-4 w-4 text-primary" />
            Want listings sent to you automatically? Rick can set up a saved search for your criteria.
          </p>
          <Button asChild size="sm" variant="outline">
            <Link to="/contact">Set Up a Saved Search</Link>
          </Button>
        </div>
      </section>

      {/* Live IDX listings */}
      <section className="bg-background py-10">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src="https://bcs.mlsmatrix.com/Matrix/public/IDX.aspx?idx=ff26122"
              title="Brazos Valley MLS Listings Search"
              className="w-full"
              style={{ height: '1400px', border: '0' }}
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Listings are provided by the Bryan-College Station Regional MLS. If the search does not
            load, please{' '}
            <Link to="/contact" className="font-medium text-primary hover:underline">
              contact Rick
            </Link>{' '}
            and he&rsquo;ll send you matches directly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Found a few you love?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Send Rick the addresses and he&rsquo;ll arrange private showings and pull the full
              details on each one.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-background text-foreground shadow-lg hover:bg-background/90"
          >
            <Link to="/contact">
              Schedule a Showing
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Listings
