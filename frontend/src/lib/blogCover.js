const coverModules = import.meta.glob(
  '../assets/blog-covers/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true }
)

const coverPool = Object.keys(coverModules)
  .sort()
  .map((key) => coverModules[key].default)

const fallbackPool = [
  '/assets/images/blog-1.jpg',
  '/assets/images/blog-2.jpg',
  '/assets/images/blog-3.jpg',
  '/assets/images/home-1.jpg',
  '/assets/images/home-2.jpg',
  '/assets/images/home-3.jpg',
  '/assets/images/home-5.jpg',
  '/assets/images/home-6.jpg',
]

const pool = coverPool.length > 0 ? coverPool : fallbackPool

function hashSlug(slug) {
  let hash = 0
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  return hash
}

export function getBlogCover(post) {
  if (post && post.image) return post.image
  const slug = (post && post.slug) || ''
  return pool[hashSlug(slug) % pool.length]
}

export const blogCoverCount = coverPool.length
