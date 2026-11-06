import { Link } from "react-router";
import logo from "./assets/logo.jpg";
import { ExternalLink } from "./components/ui/external_link";

export function meta() {
  return [
    { title: "Westend Wellness" },
    { name: "description", content: "A welcoming Pilates and wellness studio on Perth Road, Dundee." },
  ];
}

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
    </div>
  );
}
