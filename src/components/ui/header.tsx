import { Link, NavLink } from "react-router";
import { ExternalLink } from "./external_link";

const MOMENCE_URL = "https://momence.com/u/westend-wellness-iidzU6";

export default function Header() {
  return (
    <header className="w-full bg-[#5F6446] text-white">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 border-white border-b">
        <Link to="/" aria-label="Westend Wellness home" className="shrink-0">
          <img src="/wew_icon.svg" alt="Westend Wellness" className="h-10 w-10" />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold">
          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              `hover:opacity-80 ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Instructors
          </NavLink>
          <ExternalLink
            to={MOMENCE_URL}
            className="rounded-full bg-white px-4 py-1.5 text-[#5F6446] transition-colors hover:bg-[#f8f7f3]"
          >
            Book on Momence
          </ExternalLink>
        </nav>
      </div>
    </header>
  );
}
