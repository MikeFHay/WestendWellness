import barre from './assets/classes/barre.jpeg'
import mat from './assets/classes/mat.jpeg'
import reformer from './assets/classes/reformer.jpeg'
import yoga from './assets/classes/yoga.jpeg'

export function meta() {
  return [
    { title: 'Classes | Westend Wellness' },
    {
      name: 'description',
      content: 'Reformer Pilates, mat Pilates, barre and yoga classes at Westend Wellness, Dundee.',
    },
  ]
}

interface Offering {
  title: string
  description: string
  photo: string
  alt: string
  // Tailwind object-position class, to keep people in frame when the portrait photo is cropped
  photoPosition: string
}

const offerings: Offering[] = [
  {
    title: 'Reformer Pilates',
    photo: reformer,
    alt: 'Two clients kneeling on reformers during a Reformer Pilates class',
    photoPosition: 'object-[center_75%]',
    description:
      'Spring-resistance work on the reformer to build core strength, control and posture, with options for beginners through to advanced.',
  },
  {
    title: 'Mat Pilates',
    photo: mat,
    alt: 'Clients lying on mats with legs raised during a Mat Pilates class',
    photoPosition: 'object-bottom',
    description:
      'Classic floor-based Pilates focused on breath, alignment and deep core strength, using just your own body weight.',
  },
  {
    title: 'Barre',
    photo: barre,
    alt: 'A row of clients holding the barre during a Barre class',
    photoPosition: 'object-[center_75%]',
    description:
      'Low-impact, ballet-inspired conditioning that tones and sculpts through small, controlled movements.',
  },
  {
    title: 'Yoga',
    photo: yoga,
    alt: "Clients resting in child's pose on mats during a Yoga class",
    photoPosition: 'object-bottom',
    description:
      'Mindful movement to improve flexibility, ease tension and leave you feeling calm and balanced.',
  },
]

export default function Classes() {
  return (
    <div className="bg-[#f8f7f3] text-gray-900">
      <section className="bg-[#5F6446] py-10 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold">Classes</h1>
      </section>

      <section className="max-w-6xl mx-auto py-10 px-6 flex flex-col items-center text-center">
        <p className="text-lg max-w-2xl mb-8 text-gray-700">
          Something for every body and every level, from your first class to your hundredth.
        </p>
        <ul className="grid gap-6 w-full lg:grid-cols-2 text-left">
          {offerings.map(({ title, description, photo, alt, photoPosition }) => (
            <li
              key={title}
              className="bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm overflow-hidden flex transition-shadow hover:shadow-md"
            >
              <img
                src={photo}
                alt={alt}
                loading="lazy"
                className={`w-2/5 sm:w-48 shrink-0 self-start aspect-[3/4] object-cover bg-[#5F6446]/10 ${photoPosition}`}
              />
              <div className="p-4 sm:p-6 self-center">
                <h3 className="text-xl font-semibold text-[#5F6446] mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
