import { ExternalLink } from "./external_link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5F6446] text-white p-4 mx-auto flex">
      <div className="max-w-6xl mx-auto flex items-center gap-2 text-center text-sm">
        <ExternalLink
          to="https://www.instagram.com/westendwellnessdundee/"
        >
          <img
            src="/Instagram_Glyph_White.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </ExternalLink>
        <a href="mailto:lucy@westendwellness.uk">
          <img
            src="/email.svg"
            alt="Email"
            className="w-6 h-6"
          />
        </a>
      </div>
    </footer>
  );
}
