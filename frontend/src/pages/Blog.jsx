import { Link } from 'react-router-dom'
import { FaArrowRight, FaRegClock } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { blogPosts } from '../data/blogPosts'
import { getBlogCover } from '../lib/blogCover'

function Blog() {
  return (
    <div>
      <Seo
        title="Brazos Valley Real Estate Blog | Rick Kenny"
        description="Local market updates and practical buyer and seller tips for College Station, Bryan, and the Brazos Valley."
      />

      <PageHeader
        eyebrow="Blog"
        title="Brazos Valley Market Insights"
        subtitle="Local market updates, buyer and seller tips, and honest guidance for real estate in College Station, Bryan, and Aggieland."
      />

      <section className="bg-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={getBlogCover(post)}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <FaRegClock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-foreground">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="transition-colors duration-200 hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:gap-3"
                  >
                    Read Article
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
