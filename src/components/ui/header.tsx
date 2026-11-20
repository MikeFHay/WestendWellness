import { useState } from "react";
import { Link, NavLink, useNavigation } from "react-router";
import { Menu, X } from "lucide-react";
import { ExternalLink } from "./external_link";

const MOMENCE_URL = "https://momence.com/u/westend-wellness-iidzU6";

const pages = [
  { to: "/classes", label: "Classes" },
  { to: "/services", label: "Services" },
  { to: "/memberships", label: "Memberships" },
  { to: "/instructors", label: "Instructors" },
  { to: "/faq", label: "FAQ" },
];

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `hover:opacity-80 text-box-trim p-2 ${isActive ? "underline underline-offset-4" : ""}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const isNavigating = useNavigation().state !== "idle";

  return (
    <header className="relative z-20 w-full bg-[#5F6446] text-white">
      <div className="relative mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link viewTransition to="/" aria-label="Westend Wellness home" className="shrink-0 pr-4" onClick={closeMenu}>
          <img src="/wew_icon.svg" alt="Home" className="h-10 w-10 text-xs" />
        </Link>

        <div className="flex items-center gap-2 md:gap-4 text-sm sm:text-base font-semibold">
          <nav aria-label="Main" className="hidden md:flex items-center gap-4">
            {pages.map(({ to, label }) => (
              <NavLink viewTransition key={to} to={to} className={navLinkClassName}>
                {label}
              </NavLink>
            ))}
          </nav>
          <ExternalLink
            to={MOMENCE_URL}
            className="rounded-full bg-white px-4 py-1.5 ml-1 text-[#5F6446] text-box-trim supports-text-box:py-[11px] sm:supports-text-box:py-3 transition-colors hover:bg-[#f8f7f3]"
          >
            Book<span className="hidden sm:inline"> on Momence</span>
          </ExternalLink>
          <button
            type="button"
            className="md:hidden -mr-2 p-2 hover:opacity-80"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Bottom border, which dims while navigating */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-px transition-colors ${
            isNavigating ? "bg-white/10 delay-150" : "bg-white"
          }`}
        />

        {/* Progress indicator, drawn just below the header. The page content fades out
            while navigating (see root.tsx), so it sits on the cream background. */}
        {isNavigating && (
          <div aria-hidden="true" className="absolute inset-x-0 top-full z-10 h-0.5 overflow-hidden">
            <div className="h-full w-1/3 animate-nav-progress bg-[#5F6446]" />
          </div>
        )}
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={`${menuOpen ? "flex" : "hidden"} md:hidden absolute inset-x-0 top-full flex-col bg-[#5F6446] px-4 sm:px-6 py-2 border-white border-b text-lg font-semibold shadow-lg`}
      >
        {pages.map(({ to, label }) => (
          <NavLink
            viewTransition
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-3 hover:opacity-80 ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
