import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import Seo from '../components/Seo'

function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Seo title="Page Not Found | Rick Kenny" description="The page you are looking for could not be found." />
      <p className="text-6xl font-bold text-primary sm:text-7xl">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you
        back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/">Back Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/listings">Search Homes</Link>
        </Button>
      </div>
    </section>
  )
}

export default NotFound
