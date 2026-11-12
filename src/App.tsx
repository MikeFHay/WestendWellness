import { Link } from "react-router";
import logo from "./assets/logo.jpg";
import { ExternalLink } from "./components/ui/external_link";
import barreClass from "./assets/gallery/2.jpeg";
import reformerClass from "./assets/gallery/12.jpeg";
import reformerStudio from "./assets/gallery/reformers.webp";
import matStudio from "./assets/gallery/studio.webp";
import street from "./assets/gallery/street.webp";

export function meta() {
  return [
    { title: "Westend Wellness" },
    { name: "description", content: "A welcoming Pilates and wellness studio on Perth Road, Dundee." },
  ];
}

// Portrait photos fill one column and two rows; the rest fill a two-by-two block.
const photos = [
  {
    src: street,
    alt: "The red sandstone Westend Wellness building, with a view down the lane to the River Tay",
    className: "col-span-2 row-span-2 object-[center_60%]",
  },
  {
    src: reformerStudio,
    alt: "The reformer studio, with rows of reformers beneath tall windows",
    className: "col-span-2 row-span-2",
  },
  {
    src: barreClass,
    alt: "A row of clients holding the barre during a Barre class",
    className: "row-span-2",
  },
  {
    src: matStudio,
    alt: "The mat and barre studio, with a mirrored wall and wooden floor",
    className: "col-span-2 row-span-2",
  },
  {
    src: reformerClass,
    alt: "Clients lunging on reformers with their arms raised overhead",
    className: "row-span-2",
  },
];

export default function WestEndWellness() {
  return (
    <div className="bg-[#f8f7f3] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#5F6446] py-5 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold mb-4 animate-fade-in-down justify-center">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Westend Wellness"
              className="w-48 md:w-64 mb-6 aspect-square text-[0]"
            />
          </div>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white">
          A welcoming Pilates and wellness studio on Perth Road, Dundee. Strengthen your body, improve flexibility, and restore balance in a calm, supportive environment.
        </p>
      </section>
      <section className="py-10 px-6 flex flex-col items-center text-center">
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#5F6446] font-semibold">
          Browse our <Link to="/classes" className="underline">classes</Link>,{" "}
          <Link to="/services" className="underline">services</Link>, and{" "}
          <Link to="/memberships" className="underline">memberships</Link>, or book on{" "}
          <ExternalLink to="https://momence.com/u/westend-wellness-iidzU6" className="underline">Momence</ExternalLink>
        </p>
      </section>
      <ul className="max-w-6xl mx-auto pb-6 px-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[10rem] md:auto-rows-[15rem] gap-3 md:gap-4">
        {photos.map(({ src, alt, className }) => (
          <li key={src} className="contents">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className={`w-full h-full object-cover rounded-2xl bg-[#5F6446]/10 ${className}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
