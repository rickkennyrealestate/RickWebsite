import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Listings', to: '/listings' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Free Home Valuation', to: '/home-value' },
  { label: 'Free Buyers Guide', to: '/buyers-guide' },
  { label: 'Mortgage Calculator', to: '/mortgage-calculator' },
  { label: 'Information About Brokerage Services', to: '/brokerage-services' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/rick.kenny.411029/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/rickrealestatetx/', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@rickrealestatetx', label: 'TikTok' },
]

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container grid grid-cols-1 gap-10 py-14 md:grid-cols-3 lg:gap-16">
        <div>
          <h3 className="text-lg font-bold">Rick Kenny</h3>
          <p className="mt-1 text-sm uppercase tracking-widest text-background/60">
            Aggieland Realtors
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Your trusted guide to buying and selling homes across College Station, Bryan, and the
            greater Brazos Valley.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background transition-colors duration-200 hover:bg-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-background/70 transition-colors duration-200 hover:text-primary-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-3.5 text-sm text-background/70">
            <li>
              <a
                href="tel:2816081151"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-primary-foreground"
              >
                <FaPhoneAlt className="h-4 w-4 shrink-0 text-primary" />
                281-608-1151
              </a>
            </li>
            <li>
              <a
                href="mailto:rickkennyrealestate@gmail.com"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-primary-foreground"
              >
                <FaEnvelope className="h-4 w-4 shrink-0 text-primary" />
                rickkennyrealestate@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-primary" />
              Bryan-College Station, TX
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col gap-4 text-xs text-background/60 md:flex-row md:items-center md:justify-between">
            <p>
              Rick Kenny <span className="text-background/30">&middot;</span> TX License #841696-SA{' '}
              <span className="text-background/30">&middot;</span> Aggieland Realtors
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/brokerage-services"
                className="transition-colors duration-200 hover:text-primary-foreground hover:underline"
              >
                Information About Brokerage Services
              </Link>
              <a
                href="https://www.trec.texas.gov/forms/consumer-protection-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary-foreground hover:underline"
              >
                TREC Consumer Protection Notice
              </a>
              <Link
                to="/privacy-policy"
                className="transition-colors duration-200 hover:text-primary-foreground hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-background/40">
            &copy; 2026 Rick Kenny, Aggieland Realtors. All rights reserved. Each office is
            independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
