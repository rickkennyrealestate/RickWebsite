import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col pb-14 lg:pb-0">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Mobile quick-contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur lg:hidden">
        <a
          href="tel:2816081151"
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground"
        >
          <FaPhoneAlt className="h-4 w-4 text-primary" />
          Call
        </a>
        <a
          href="sms:2816081151"
          className="flex flex-1 items-center justify-center gap-2 border-x border-border py-3.5 text-sm font-semibold text-foreground"
        >
          <FaCommentDots className="h-4 w-4 text-primary" />
          Text
        </a>
        <a
          href="tel:2816081151"
          className="flex flex-[1.3] items-center justify-center bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
        >
          281-608-1151
        </a>
      </div>
    </div>
  )
}

export default Layout
