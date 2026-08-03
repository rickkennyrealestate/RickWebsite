import { Link } from 'react-router-dom'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import PageHeader from '../components/PageHeader'
import ListingCard from '../components/ListingCard'

const listings = [
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
  {
    image: '/assets/images/home-2.jpg',
    price: '$289,000',
    status: 'For Sale',
    address: '2811 Broadmoor Dr, Bryan',
    beds: 3,
    baths: 2,
    sqft: '1,640',
  },
  {
    image: '/assets/images/home-3.jpg',
    price: '$612,000',
    status: 'New Listing',
    address: '4500 Nash St, College Station',
    beds: 5,
    baths: 4,
    sqft: '3,540',
  },
  {
    image: '/assets/images/home-4.jpg',
    price: '$375,000',
    status: 'For Sale',
    address: '1804 Whispering Oaks Dr, Bryan',
    beds: 4,
    baths: 2,
    sqft: '2,120',
  },
]

function Listings() {
  return (
    <div>
      <PageHeader
        eyebrow="Listings"
        title="Homes in the Brazos Valley"
        subtitle="A selection of properties across College Station, Bryan, and the surrounding Brazos County communities."
      />

      {/* Search prompt */}
      <section className="border-b border-border bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaSearch className="h-4 w-4 text-primary" />
            Looking for something specific? Rick can set up a custom search across the full MLS.
          </p>
          <Button asChild size="sm" variant="outline">
            <Link to="/contact">Request a Custom Search</Link>
          </Button>
        </div>
      </section>

      {/* Listings grid */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.address} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Don&rsquo;t see the right fit yet?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              New homes hit the Brazos Valley market every day. Tell Rick what you&rsquo;re looking
              for and he&rsquo;ll send matches straight to your inbox.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-background text-foreground shadow-lg hover:bg-background/90"
          >
            <Link to="/contact">
              Get Matched
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Listings
