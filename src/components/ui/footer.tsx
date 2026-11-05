import { ExternalLink } from "./external_link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5F6446] text-white p-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div />
      <div className="flex items-center gap-2 text-center text-sm">
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
      <ExternalLink
        to="https://maps.app.goo.gl/QGHV4KmWFDCH1Y4t5"
        className="justify-self-end text-right underline"
      >
        <address className="not-italic">
          4 Taylor's Lane, DD2 1AQ
        </address>
      </ExternalLink>
    </footer>
  );
}
