import { Link, NavLink } from "react-router";
import { ExternalLink } from "./external_link";

const MOMENCE_URL = "https://momence.com/u/westend-wellness-iidzU6";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `hover:opacity-80 text-box-trim p-2 ${isActive ? "underline underline-offset-4" : ""}`;

export default function Header() {
  return (
    <header className="w-full bg-[#5F6446] text-white">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 border-white border-b">
        <Link to="/" aria-label="Westend Wellness home" className="shrink-0 pr-4">
          <img src="/wew_icon.svg" alt="Westend Wellness" className="h-10 w-10" />
        </Link>

        <nav className="flex items-center gap-2 md:gap-4 text-sm sm:text-base font-semibold">
          <NavLink to="/memberships" className={navLinkClassName}>
            Memberships
          </NavLink>
          <NavLink to="/instructors" className={navLinkClassName}>
            Instructors
          </NavLink>
          <ExternalLink
            to={MOMENCE_URL}
            className="rounded-full bg-white px-4 py-1.5 text-[#5F6446] text-box-trim supports-text-box:py-[11px] sm:supports-text-box:py-3 transition-colors hover:bg-[#f8f7f3]"
          >
            Book<span className="hidden sm:inline"> on Momence</span>
          </ExternalLink>
        </nav>
      </div>
    </header>
  );
}
