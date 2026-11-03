import logo from "./assets/logo.jpg";
import { ExternalLink } from "./components/ui/external_link";

export function meta() {
  return [
    { title: "Westend Wellness" },
    { name: "description", content: "A welcoming Pilates and wellness studio on Perth Road, Dundee." },
  ];
}

const offerings = [
  {
    title: "Reformer Pilates",
    description:
      "Spring-resistance work on the reformer to build core strength, control and posture, with options for beginners through to advanced.",
  },
  {
    title: "Mat Pilates",
    description:
      "Classic floor-based Pilates focused on breath, alignment and deep core strength, using just your own body weight.",
  },
  {
    title: "Barre",
    description:
      "Low-impact, ballet-inspired conditioning that tones and sculpts through small, controlled movements.",
  },
  {
    title: "Yoga",
    description:
      "Mindful movement to improve flexibility, ease tension and leave you feeling calm and balanced.",
  },
  {
    title: "Gym",
    description:
      "Gym access to train in your own time, with the equipment you need for strength and conditioning.",
  },
];

export default function WestEndWellness() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#5F6446] py-5 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold mb-4 animate-fade-in-down justify-center">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Westend Wellness"
              className="w-48 md:w-64 mb-6 aspect-square"
            />
          </div>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white">
          A welcoming Pilates and wellness studio on Perth Road, Dundee. Strengthen your body, improve flexibility, and restore balance in a calm, supportive environment.
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white font-semibold">
          Book a class or gym access at <ExternalLink to="https://momence.com/u/westend-wellness-iidzU6" className="underline">Momence</ExternalLink>
        </p>
        {/* <WaitlistForm /> */}
      </section>

      <section className="bg-[#f8f7f3] text-gray-900 py-6 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold mb-4 animate-fade-in-down">
          What we offer
        </h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-700">
          Something for every body and every level, from your first class to your hundredth.
        </p>
        <ul className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 text-left">
          {offerings.map(({ title, description }) => (
            <li
              key={title}
              className="bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#5F6446] mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
        <ExternalLink
          to="https://momence.com/u/westend-wellness-iidzU6"
          className="mt-10 inline-block rounded-full bg-[#5F6446] px-8 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#4b4f37]"
        >
          Book now
        </ExternalLink>
      </section>
    </div>
  );
}
