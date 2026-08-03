import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaRegClock } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import { getPostBySlug } from '../data/blogPosts'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="container py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          The article you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Button asChild className="mt-8">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </section>
    )
  }

  return (
    <article>
      {/* Header */}
      <header className="border-b border-border bg-secondary">
        <div className="container max-w-3xl py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            All Articles
          </Link>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <FaRegClock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Hero image */}
      <div className="bg-secondary">
        <div className="container max-w-3xl pb-14">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/9] w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>

      {/* Body */}
      <div className="bg-background py-14">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="pt-4 text-2xl font-bold tracking-tight text-foreground">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Sources */}
          {post.sources?.length > 0 && (
            <div className="mt-10 rounded-xl border border-border bg-secondary p-6">
              <p className="text-sm font-semibold text-foreground">Sources &amp; data</p>
              <ul className="mt-3 space-y-1.5">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            Market figures are compiled from third-party sources, reflect the dates noted, and vary
            by source and neighborhood. This article is general information, not financial, tax, or
            legal advice, and is not a guarantee of value or future performance. Rick Kenny is a
            licensed Texas REALTOR&reg; (License #841696-SA) with Aggieland Realtors. Aggieland
            Realtors is an Equal Housing Opportunity brokerage.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Questions about your move in the Brazos Valley?
            </h2>
            <p className="mt-3 text-base text-primary-foreground/80">
              Rick is happy to talk through your options, no pressure, no obligation.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-background text-foreground shadow-lg hover:bg-background/90"
          >
            <Link to="/contact">
              Get In Touch
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  )
}

export default BlogPost
