import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation, useNavigation } from 'react-router'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import './index.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/wew_icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  const navigation = useNavigation()
  const location = useLocation()
  // Fade the current page out as soon as a navigation to another page starts, to mask
  // loading time. The view transition then cross-fades from here to the new page.
  const isLeaving =
    navigation.state === 'loading' && navigation.location.pathname !== location.pathname

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-[#f8f7f3] text-gray-900">
        <div className={isLeaving ? 'opacity-0 transition-opacity duration-200 ease-out' : undefined}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
