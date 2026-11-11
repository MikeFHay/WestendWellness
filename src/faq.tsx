import { ExternalLink } from './components/ui/external_link'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

export function meta() {
  return [
    { title: 'FAQ | Westend Wellness' },
    {
      name: 'description',
      content:
        'Frequently asked questions about classes, bookings, memberships and the gym at Westend Wellness, Dundee.',
    },
  ]
}

const linkClassName = 'text-[#5F6446] underline'

interface Faq {
  question: string
  answer: ReactNode
}

interface FaqSection {
  id: string
  title: string
  faqs: Faq[]
}

const sections: FaqSection[] = [
  {
    id: 'general',
    title: 'General',
    faqs: [
      {
        question: 'Where can I park?',
        answer: (
          <>
            <p>
              The car park across from the studio is permit only, so please don’t park there. We
              have a cycle rack at the back of the building and are close to the main bus routes.
            </p>
            <p>
              The closest car park is on Pennycook Lane, which is a 2 minute walk from the studio.
              There is also a car park on Union Street behind Sainsbury’s. Both offer free parking
              for up to two hours.
            </p>
          </>
        ),
      },
      {
        question: 'I’ve never done Pilates before. Is that okay?',
        answer: (
          <>
            <p>
              Absolutely – everyone is welcome, whatever your experience. Our instructors offer
              options to make each exercise easier or harder, so you can work at the level that’s
              right for you. Just let your instructor know it’s your first class when you arrive.
            </p>
            <p>
              Our Foundation reformer flow class is a slower paced class built around the
              fundamentals. Our mixed ability reformer class is suitable for anyone ready to move at
              a brisker pace, with in-class modifications so beginners can jump straight into this
              class rather than start slower.
            </p>
          </>
        ),
      },
      {
        question: 'What’s the difference between reformer and mat Pilates?',
        answer: (
          <p>
            Reformer Pilates uses a sliding carriage with springs and straps that add resistance or
            support, so you get a full-body workout that can be adjusted to any level. Mat Pilates
            uses your own body weight (sometimes with small props) on a mat. Both build core
            strength, flexibility, posture and balance – many people enjoy doing both.
          </p>
        ),
      },
      {
        question: 'What classes do you offer?',
        answer: (
          <p>
            Reformer Pilates in our dedicated reformer studio, and mat Pilates, barre and yoga in
            our studio room. We’ll be adding more classes as we grow – keep an eye on the{' '}
            <ExternalLink to="https://momence.com/u/westend-wellness-iidzU6" className={linkClassName}>
              timetable
            </ExternalLink>{' '}
            and our <ExternalLink to="https://www.instagram.com/westendwellnessdundee" className={linkClassName}>
              social media
            </ExternalLink>.
          </p>
        ),
      },
      {
        question: 'Do you offer pre/post-natal classes?',
        answer: (
          <>
            <p>
              We don’t currently offer these classes, however some of our instructors are trained
              in this and can modify exercises to suit your needs.
            </p>
            <p>
              If you are pregnant, you must tell us before taking part and keep us informed of any
              relevant changes. Group classes may not be suitable after 16 weeks of pregnancy,
              depending on the class, your individual circumstances and any advice from your
              healthcare professional. Please contact us before booking any classes so that we can
              discuss suitable alternatives, such as a private or modified session.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'booking',
    title: 'Booking and memberships',
    faqs: [
      {
        question: 'What membership options do you have?',
        answer: (
          <p>
            We offer monthly memberships plus class packs of 5, 10 or 15 classes, as well as single
            drop-in classes. See{' '}
            <Link to="/memberships" className={linkClassName}>
              memberships
            </Link>{' '}
            for details.
          </p>
        ),
      },
      {
        question: 'Is there an early bird offer?',
        answer: (
          <p>
            Yes – our{' '}
            <Link to="/memberships#early-bird" className={linkClassName}>
              early bird members
            </Link>{' '}
            get 20% off their membership for their first 12 months. Please note this offer ends on
            November 30th or when all places are taken, whichever is first.
          </p>
        ),
      },
      {
        question: 'What if I need to cancel a class?',
        answer: (
          <p>
            Please cancel at least 24 hours before your class so someone else can take your space.
            Late cancellations and no-shows will be charged in full or lose the class from their
            pack. If an emergency prevents you from attending we may be able to accommodate and
            refund, so please get in touch with the studio in that case.
          </p>
        ),
      },
      {
        question: 'What happens if a class is full?',
        answer: (
          <p>
            Join the waitlist in Momence and you’ll be notified if a space opens up. When a spot in
            the class becomes available, the system automatically books the first person on the
            waitlist.
          </p>
        ),
      },
      {
        question: 'Do you sell gift cards?',
        answer: (
          <p>
            Yes, these can be purchased online and you can choose a custom value. They make great
            gifts for family and friends.
          </p>
        ),
      },
    ],
  },
  {
    id: 'studio',
    title: 'In the studio',
    faqs: [
      {
        question: 'What should I wear?',
        answer: (
          <p>
            Comfortable, fitted clothing that lets you move freely – loose clothing can get caught
            in reformer springs. You may also want to tie your hair back. Grip socks are required
            for reformer classes; you can buy them at reception. Please note we don’t accept cash
            payments.
          </p>
        ),
      },
      {
        question: 'What should I bring?',
        answer: (
          <p>
            We provide mats and all equipment, so you just need a water bottle – but don’t worry,
            if you forget yours, we also sell these at reception.
          </p>
        ),
      },
      {
        question: 'How early should I arrive?',
        answer: (
          <p>
            Please arrive 10 minutes before your class, or 15 minutes if it’s your first visit, so
            we can get you settled in. For safety reasons you will not be able to join a class more
            than 10 minutes after it has started. Arriving after this point will be treated as a
            late cancellation and charged in full.
          </p>
        ),
      },
    ],
  },
  {
    id: 'gym',
    title: 'The gym',
    faqs: [
      {
        question: 'What equipment is in the gym?',
        answer: (
          <p>
            A ski machine, rower, bike, Smith machine, cable pulley, weight bench, dumbbells and
            kettlebells.
          </p>
        ),
      },
      {
        question: 'When is the gym open?',
        answer: <p>6am–8pm Monday to Friday, and 8am–4pm on Saturday and Sunday.</p>,
      },
      {
        question: 'How does gym access work?',
        answer: (
          <p>
            The gym is for members only. Book your session in the Momence app and use the app to
            get in. To keep it quiet and spacious, there’s a maximum of 4 people at any time.
          </p>
        ),
      },
      {
        question: 'Do I need an induction?',
        answer: (
          <p>
            Yes. All new gym members complete a short health questionnaire and a gym induction
            before their first session, so you know how to use the equipment safely and how to
            enter the building. Please make sure your induction is booked before booking your open
            gym slot.
          </p>
        ),
      },
      {
        question: 'Do you offer personal training?',
        answer: (
          <p>
            Yes – personal training is available to gym members, charged on top of your membership.
            See{' '}
            <Link to="/services#personal-training" className={linkClassName}>
              personal training
            </Link>{' '}
            for details.
          </p>
        ),
      },
    ],
  },
]

export default function FAQ() {
  return (
    <div className="bg-[#f8f7f3] text-gray-900">
      <section className="bg-[#5F6446] py-10 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold">Frequently asked questions</h1>
      </section>

      <div className="max-w-4xl mx-auto py-10 px-6 flex flex-col gap-10">
        {sections.map(({ id, title, faqs }) => (
          <section key={id} id={id} className="scroll-mt-6">
            <h2 className="text-3xl font-semibold text-[#5F6446]">{title}</h2>
            <div className="mt-4 flex flex-col gap-3">
              {faqs.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    {question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl leading-none text-[#5F6446] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 flex flex-col gap-3 text-gray-700 leading-relaxed">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
