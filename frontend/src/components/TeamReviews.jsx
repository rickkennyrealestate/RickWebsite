import { FaStar, FaGoogle, FaHome } from 'react-icons/fa'

function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {[0, 1, 2, 3, 4].map((i) => (
        <FaStar key={i} className="h-5 w-5" />
      ))}
    </div>
  )
}

function TeamReviews() {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Team Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted across the Brazos Valley
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Rick and the Aggieland Realtors team have earned a wall of 5-star reviews from local
            buyers and sellers.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Google */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <FaGoogle className="h-7 w-7 text-primary" />
            <div className="mt-4">
              <Stars />
            </div>
            <p className="mt-4 text-3xl font-bold text-foreground">5.0</p>
            <p className="mt-1 text-sm font-semibold text-foreground">38 Google Reviews</p>
            <p className="mt-1 text-sm text-muted-foreground">Aggieland Realtors</p>
          </div>

          {/* Zillow */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <FaHome className="h-7 w-7 text-primary" />
            <div className="mt-4">
              <Stars />
            </div>
            <p className="mt-4 text-3xl font-bold text-foreground">5.0</p>
            <p className="mt-1 text-sm font-semibold text-foreground">192 Zillow Reviews</p>
            <p className="mt-1 text-sm text-muted-foreground">Aggieland Realtors Team</p>
          </div>

          {/* Top Agent */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <img
              src="/assets/images/zillow-top-agent.webp"
              alt="Top Agent on Zillow"
              className="w-full max-w-[220px]"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rick Kenny and Aggieland Realtors, recognized for top-rated client service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamReviews
