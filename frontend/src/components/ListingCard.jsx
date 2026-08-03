import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'

function ListingCard({ listing }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
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
  )
}

export default ListingCard
