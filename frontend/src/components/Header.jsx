import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Listings', to: '/listings' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/assets/images/logo.png"
            alt="Aggieland Realtors"
            className="h-11 w-auto md:h-14"
          />
          <span className="hidden text-lg font-bold leading-tight tracking-tight text-foreground sm:block">
            Rick Kenny
            <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              REALTOR&reg;
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:2816081151"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-primary"
          >
            <FaPhoneAlt className="h-3.5 w-3.5" />
            281-608-1151
          </a>
          <Button asChild size="sm" variant="outline">
            <Link to="/buyers-guide">Free Buyers Guide</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/home-value">Free Home Valuation</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors duration-200 hover:bg-accent lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-accent text-primary' : 'text-foreground/80 hover:bg-accent hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href="tel:2816081151"
                className="flex items-center gap-2 px-3 text-sm font-medium text-foreground/80"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                281-608-1151
              </a>
              <Button asChild variant="outline" className="w-full" onClick={() => setOpen(false)}>
                <Link to="/buyers-guide">Free Buyers Guide</Link>
              </Button>
              <Button asChild className="w-full" onClick={() => setOpen(false)}>
                <Link to="/home-value">Free Home Valuation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
