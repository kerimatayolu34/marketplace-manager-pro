import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()

  const links = [
    {
      href: "/",
      label: "Dashboard"
    },
    {
      href: "/products",
      label: "Ürünler"
    },
    {
      href: "/orders",
      label: "Siparişler"
    },
    {
      href: "/integrations",
      label: "Entegrasyonlar"
    }
  ]

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <span className="hidden font-bold sm:inline-block">
              Lovable
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  href === window.location.pathname ? "text-foreground" : "text-foreground/60"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}