import cat from './assets/instructors/cat.jpg'
import evy from './assets/instructors/evy.jpg'
import fran from './assets/instructors/fran.jpg'
import helena from './assets/instructors/helena.jpg'
import kirsty from './assets/instructors/kirsty.jpg'
import sarah from './assets/instructors/sarah.jpg'

export function meta() {
  return [
    { title: 'Instructors | Westend Wellness' },
    { name: 'description', content: 'Meet the instructors at Westend Wellness, Dundee.' },
  ]
}

interface Instructor {
  name: string
  photo?: string
  // Tailwind object-position class, for photos that crop badly when centred
  photoPosition?: string
  bio?: string[]
}

const instructors: Instructor[] = [
  {
    name: 'Cat',
    photo: cat,
    photoPosition: 'object-top',
    bio: [
      'As a Physiotherapist and APPI Pilates Instructor, I apply my clinical experience and knowledge into every session. My approach combines injury prevention, rehabilitation and long-term strengthening.',
      'My professional and personal experiences have shown me how beneficial pilates can be for both physical and mental wellbeing and this is what makes me so passionate about teaching, and why I love my job. I love nothing more than working with and helping people achieve their goals.',
      'I’m looking forward to being a part of Westend Wellness, joining an amazing team, meeting some lovely new clients and working in the most beautiful venue.',
    ],
  },
  {
    name: 'Evy',
    photo: evy,
    photoPosition: 'object-[30%_center]',
    bio: [
      'Originally from Chicago, Evy is a yoga teacher and mobility coach currently based in Dundee, Scotland. In 2012, she completed her 200-hour teacher training in Power Vinyasa. Over the years, she has pursued certification in Restorative and Yin practices, with additional qualification as a Mobility Specialist. Currently, she is enrolled in a 300-hour teacher training, and believes deeply in the importance of ongoing study.',
      'As a teacher, she strives to provide an inclusive and supportive environment- a place for people to gather, move, breathe, expand, and explore together. Classes will stretch the mind and soften tension, while building strength and mobility in a considered manner. Evy guides practice with a heartfelt invitation for students to meet themselves and each other with curiosity and compassion.',
      'I feel delighted to join the team at Westend Wellness! The considered offerings of pilates, yoga, a weight room, and sports massage are amazing, and I look forward to the community that will grow in this gorgeous space!',
    ],
  },
  {
    name: 'Fran',
    photo: fran,
    photoPosition: 'object-top',
    bio: ["Fran's Bio is yet to be written!"],
  },
  {
    name: 'Helena',
    photo: helena,
    bio: [
      'My name is Helena. I teach Reformer, Barre and I am also a Personal Trainer. I love combining Pilates with strength elements to help you feel amazing and strong. I have a passion for movement and hope that you feel that when you come to my class. My playlist is really important to me and I believe the right songs can push you & get you through challenging exercises.',
    ],
  },
  {
    name: 'Kama',
    bio: [
      'Heyyy, I’m Kama - I’ve worked within the fitness industry for a few years now, finding the art of Pilates along the way. Over the last year I have been teaching Reformer and Mat Pilates, which is where my heart lies. Teaching has allowed me to move slower and appreciate the now.',
      'I find passion in creating strong classes, with the intention to find both challenge and enjoyment through the experience. I look to create a space that focuses on controlled movement, polished technique and an atmosphere which allows you to feel confident in your body, moving with grace. I like to add my own spin on the classical pilates method, whether that’s through my playlist, the class structure or bringing a more modern energy to Pilates.',
      'I don’t believe that Pilates has to feel overly serious or fit into one particular mould - if you work hard and allow yourself to let go for the hour, I can guarantee you’ll leave feeling that little bit lighter🪽',
      'I’m excited to meet some new faces in the gorgeous Westend Wellness studio, connecting with those who are seeking a fresh take on Pilates🤍',
    ],
  },
  {
    name: 'Kirsty',
    photo: kirsty,
    photoPosition: 'object-top',
    bio: [
      'Come as you are. I’ll meet you there.',
      'You don’t need to be flexible. You don’t need to be strong. And you definitely don’t need to know what you’re doing before you walk through the door.',
      'That’s what I’m here for.',
      'I’m Kirsty, a qualified Mat & Reformer Pilates Instructor, and I want my classes to be somewhere you can switch off, challenge yourself and maybe surprise yourself a little along the way.',
      'Pilates has been part of my life for many years, but it became something much more personal after the birth of my daughter in 2024. Following a C-section, Pilates helped me rebuild my strength, reconnect with my body and realise just how powerful movement can be both physically and mentally. That experience ultimately led me to become an instructor.',
      'Now, I get to share that feeling with others.',
      'My classes are supportive, encouraging and designed to challenge you. I’ll guide you, help you understand the movement and encourage you to push that little bit more when you think you’ve reached your limit, whilst always respecting where your body is at that day.',
      'Because for me, the best part of Pilates isn’t performing the perfect exercise. It’s walking out of the studio thinking, “I didn’t know I could do that.” So, whether it’s your first ever class or your hundredth, I can’t wait to move with you at Westend Wellness.',
    ],
  },
  {
    name: 'Sarah',
    photo: sarah,
    photoPosition: 'object-top',
    bio: [
      'Hi I’m Sarah !! 💋',
      'I’ve been teaching Pilates for the past year and I’m all about classes that make you feel strong and challenged.',
      'Expect strength-focused classes with plenty of spicy core burners (my favourite), vibey playlists and a fun, welcoming atmosphere.',
      'I love helping people build confidence whilst making sure everyone feels comfortable, whether it’s your first class or your hundredth.',
      'Outside the studio, I’m all about balance. I love my wellness routines but I love heading out for a dance with cocktail (or 10). For me, Pilates is about feeling good, moving well and enjoying the process without taking life too seriously.',
      'I can’t wait to meet you in the studio and move together 🌶️ ❤️‍🔥',
    ],
  },
]

export default function Instructors() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-gray-900">
      <section className="bg-[#5F6446] py-10 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold">Our instructors</h1>
      </section>

      <ul className="max-w-4xl mx-auto py-10 px-6 flex flex-col gap-8">
        {instructors.map(({ name, photo, photoPosition = 'object-center', bio = [] }) => (
          <li
            key={name}
            className="bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm overflow-hidden flex flex-col sm:flex-row"
          >
            <div className="w-full aspect-[4/3] sm:aspect-auto sm:w-56 sm:min-h-72 shrink-0 relative bg-[#5F6446]/10">
              {photo && (
                <img
                  src={photo}
                  alt={name}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover ${photoPosition}`}
                />
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#5F6446] mb-3">{name}</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                {bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
