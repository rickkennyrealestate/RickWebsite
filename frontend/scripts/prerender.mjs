import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const SITE = 'https://rickkenny.com'
const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escAttr = (s) => esc(s).replace(/"/g, '&quot;')
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')

const MONTHS = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
}
function toIso(dateStr) {
  if (!dateStr) return null
  const m = String(dateStr).match(/([A-Za-z]+)\s+(?:(\d{1,2}),\s*)?(\d{4})/)
  if (!m) return null
  const mon = MONTHS[m[1].toLowerCase()]
  if (!mon) return null
  const day = (m[2] || '1').padStart(2, '0')
  return `${m[3]}-${mon}-${day}`
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[\\s\\S]*?(")`, 'i')
  if (re.test(html)) return html.replace(re, `$1${escAttr(value)}$2`)
  return html.replace('</head>', `    <meta ${attr}="${key}" content="${escAttr(value)}" />\n  </head>`)
}

function buildPage(template, { title, description, canonical, ogImage, article, rootHtml }) {
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`)
  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = setMeta(html, 'property', 'og:url', canonical)
  html = setMeta(html, 'property', 'og:image', ogImage)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)
  html = setMeta(html, 'name', 'twitter:image', ogImage)

  const head = []
  head.push(`<link rel="canonical" href="${escAttr(canonical)}" />`)
  head.push(`<meta name="robots" content="index, follow" />`)
  if (article) {
    head.push(
      `<script type="application/ld+json">${jsonLd({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        ...(article.datePublished ? { datePublished: article.datePublished, dateModified: article.datePublished } : {}),
        image: ogImage,
        author: { '@type': 'Person', name: 'Rick Kenny', url: `${SITE}/about` },
        publisher: { '@type': 'RealEstateAgent', name: 'Rick Kenny - Aggieland Realtors', url: SITE },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        url: canonical,
      })}</script>`
    )
  }
  if (rootHtml) {
    head.push(
      `<style id="prerender-style">#prerender-fallback{max-width:768px;margin:0 auto;padding:24px;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1c1917;line-height:1.6}#prerender-fallback h1{color:#7E1B1B;font-size:1.9rem;font-weight:700;margin:.5rem 0 1rem}#prerender-fallback h2{font-size:1.25rem;font-weight:700;margin:1.4rem 0 .5rem}#prerender-fallback a{color:#7E1B1B}#prerender-fallback nav a,#prerender-fallback header a{margin-right:14px;text-decoration:none}#prerender-fallback ul{padding-left:1.25rem}#prerender-fallback li{margin-bottom:.4rem}</style>`
    )
  }
  html = html.replace('</head>', `    ${head.join('\n    ')}\n  </head>`)

  if (rootHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`)
  }
  return html
}

function writeFile(rel, contents) {
  const full = resolve(distDir, rel)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, contents)
}

async function main() {
  const template = readFileSync(resolve(distDir, 'index.html'), 'utf8')
  const mod = await import(pathToFileURL(resolve(__dirname, '../src/data/blogPosts.js')).href)
  const blogPosts = mod.blogPosts || []
  const defaultOg = `${SITE}/assets/images/og-image.jpg`

  const NAV = [
    ['/', 'Home'], ['/about', 'About'], ['/listings', 'Search Homes'], ['/blog', 'Blog'],
    ['/home-value', 'Free Home Valuation'], ['/buyers-guide', 'Buyers Guide'],
    ['/mortgage-calculator', 'Mortgage Calculator'], ['/contact', 'Contact'],
  ]
  const navHtml = `<nav aria-label="Primary">${NAV.map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join('')}</nav>`

  const STATIC = [
    { p: '/', file: 'index.html', priority: '1.0', title: 'Rick Kenny | Brazos Valley Real Estate — Aggieland Realtors', desc: 'REALTOR serving College Station, Bryan, and the Brazos Valley. Search live listings, get a free home valuation, and buy or sell with a local, finance-trained agent.' },
    { p: '/about', file: 'about.html', priority: '0.8', title: 'About Rick Kenny | Bryan-College Station REALTOR®', desc: 'Meet Rick Kenny, a finance-trained REALTOR with Aggieland Realtors serving College Station, Bryan, and the Brazos Valley.' },
    { p: '/listings', file: 'listings.html', priority: '0.9', title: 'Search Brazos Valley Homes for Sale | Rick Kenny', desc: 'Browse live MLS listings across College Station and Bryan, or search by area, with REALTOR Rick Kenny of Aggieland Realtors.' },
    { p: '/home-value', file: 'home-value.html', priority: '0.8', title: "Free Home Valuation | What's My Home Worth in Bryan-College Station", desc: 'Get a free, no-obligation home valuation based on real Brazos Valley market data from REALTOR Rick Kenny.' },
    { p: '/buyers-guide', file: 'buyers-guide.html', priority: '0.7', title: 'Free Brazos Valley Buyers Guide | Rick Kenny', desc: 'Download a free, step-by-step guide to buying a home in College Station, Bryan, and Aggieland.' },
    { p: '/mortgage-calculator', file: 'mortgage-calculator.html', priority: '0.6', title: 'Mortgage Calculator | Bryan-College Station Homes', desc: 'Estimate your monthly mortgage payment for a Bryan-College Station home, including principal, interest, Texas property taxes, and insurance.' },
    { p: '/contact', file: 'contact.html', priority: '0.7', title: 'Contact Rick Kenny | Bryan-College Station REALTOR®', desc: 'Get in touch with Rick Kenny, REALTOR with Aggieland Realtors. Call or text 281-608-1151 for buying, selling, or a free home valuation.' },
    { p: '/privacy-policy', file: 'privacy-policy.html', priority: '0.3', title: 'Privacy Policy | Rick Kenny', desc: 'How Rick Kenny with Aggieland Realtors collects, uses, and protects your information on rickkenny.com, including form data, text-message consent, and your privacy choices.' },
    { p: '/brokerage-services', file: 'brokerage-services.html', priority: '0.3', title: 'Information About Brokerage Services | Rick Kenny', desc: 'Texas Real Estate Commission Information About Brokerage Services (IABS) disclosure for Rick Kenny with Aggieland Realtors, serving College Station and Bryan, TX.' },
  ]

  let written = 0
  const sitemap = []

  for (const r of STATIC) {
    try {
      const canonical = r.p === '/' ? `${SITE}/` : `${SITE}${r.p}`
      writeFile(r.file, buildPage(template, { title: r.title, description: r.desc, canonical, ogImage: defaultOg }))
      sitemap.push({ loc: canonical, priority: r.priority })
      written++
    } catch (e) {
      console.warn(`[prerender] skipped ${r.p}: ${e.message}`)
    }
  }

  // Blog index — crawlable list of every article
  try {
    const items = blogPosts
      .map((post) => `<li><h2><a href="/blog/${post.slug}">${esc(post.title)}</a></h2><p>${esc(post.excerpt)}</p><p>${esc(post.category)} · ${esc(post.date)} · ${esc(post.readTime)}</p></li>`)
      .join('')
    const rootHtml = `<div id="prerender-fallback"><header>${navHtml}</header><main><h1>Brazos Valley Market Insights</h1><p>Local market updates, buyer and seller tips, and honest guidance for real estate in College Station, Bryan, and Aggieland.</p><ul>${items}</ul></main></div>`
    writeFile('blog.html', buildPage(template, {
      title: 'Brazos Valley Real Estate Blog | Rick Kenny',
      description: 'Local market updates and practical buyer and seller tips for College Station, Bryan, and the Brazos Valley.',
      canonical: `${SITE}/blog`, ogImage: defaultOg, rootHtml,
    }))
    sitemap.push({ loc: `${SITE}/blog`, priority: '0.7' })
    written++
  } catch (e) {
    console.warn(`[prerender] skipped /blog: ${e.message}`)
  }

  // Individual articles — full crawlable content + BlogPosting schema
  for (const post of blogPosts) {
    try {
      const canonical = `${SITE}/blog/${post.slug}`
      const ogImage = post.image ? `${SITE}${post.image}` : defaultOg
      const body = (post.content || []).map((b) => {
        if (b.type === 'h2') return `<h2>${esc(b.text)}</h2>`
        if (b.type === 'ul') return `<ul>${(b.items || []).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
        return `<p>${esc(b.text)}</p>`
      }).join('')
      const rootHtml = `<div id="prerender-fallback"><header>${navHtml}</header><main><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Blog</a></nav><article><h1>${esc(post.title)}</h1><p>${esc(post.category)} · ${esc(post.date)} · ${esc(post.readTime)}</p>${body}</article><p><a href="/blog">← Back to all articles</a></p></main></div>`
      writeFile(`blog/${post.slug}.html`, buildPage(template, {
        title: `${post.title} | Rick Kenny`,
        description: post.metaDescription || post.excerpt || '',
        canonical, ogImage,
        article: { title: post.title, description: post.metaDescription || post.excerpt || '', datePublished: toIso(post.date) },
        rootHtml,
      }))
      sitemap.push({ loc: canonical, priority: '0.6', lastmod: toIso(post.date) })
      written++
    } catch (e) {
      console.warn(`[prerender] skipped /blog/${post.slug}: ${e.message}`)
    }
  }

  // Auto-generated sitemap — always complete, zero manual maintenance
  try {
    const urls = sitemap
      .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.priority}</priority></url>`)
      .join('\n')
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    writeFile('sitemap.xml', xml)
  } catch (e) {
    console.warn(`[prerender] sitemap failed: ${e.message}`)
  }

  console.log(`[prerender] wrote ${written} pages + sitemap (${sitemap.length} urls)`)
}

main().catch((e) => {
  console.warn(`[prerender] non-fatal error, shipping SPA as-is: ${e.message}`)
  process.exit(0)
})
