import gymPhoto from './assets/gym.jpg'
import { ExternalLink } from './components/ui/external_link'

export function meta() {
  return [
    { title: 'Services | Westend Wellness' },
    {
      name: 'description',
      content: 'Gym access, personal training and massage at Westend Wellness, Dundee.',
    },
  ]
}

const GYM_MEMBERSHIP_URL = 'https://momence.com/m/940479'
const GYM_INDUCTION_URL =
  'https://momence.com/appointments/appointment-reservation/310814?boardId=259625&serviceId=374446&venueId=253871&staffId=397559'

const buttonClassName =
  'inline-block rounded-full bg-[#5F6446] px-5 py-2 font-semibold text-white transition-colors hover:bg-[#4b4f37] text-box-trim supports-text-box:py-3.5'

export default function Services() {
  return (
    <div className="bg-[#f8f7f3] text-gray-900">
      <section className="bg-[#5F6446] py-10 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold">Services</h1>
      </section>

      <div className="max-w-4xl mx-auto py-10 px-6 flex flex-col gap-6">
        <section
          id="gym"
          className="scroll-mt-6 bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm overflow-hidden flex flex-col sm:flex-row-reverse"
        >
          <div className="w-full aspect-[4/3] sm:aspect-auto sm:w-64 shrink-0 relative bg-[#5F6446]/10">
            <img
              src={gymPhoto}
              alt="The Westend Wellness gym"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-[#5F6446]">Gym</h2>
            <p className="mt-3 text-lg text-gray-700 leading-relaxed">
              Our small gym gives you access to everything you need for strength and conditioning.
            </p>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-gray-700">
              <dt className="font-semibold text-gray-900">Weekdays</dt>
              <dd>6am – 8pm</dd>
              <dt className="font-semibold text-gray-900">Weekends</dt>
              <dd>8am – 4pm</dd>
            </dl>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Gym access needs a separate membership and an induction. Become a member and book an
              induction to get started.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLink to={GYM_MEMBERSHIP_URL} className={buttonClassName}>
                Become a member
              </ExternalLink>
              <ExternalLink to={GYM_INDUCTION_URL} className={buttonClassName}>
                Book an induction
              </ExternalLink>
            </div>
          </div>
        </section>

        <section
          id="personal-training"
          className="scroll-mt-6 bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm p-6"
        >
          <h2 className="text-3xl font-semibold text-[#5F6446]">Personal training</h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Get 1:1 or group coaching with our personal trainers on your schedule.
            Prices range from £30 per session for group coaching to £60 for 1:1 training.
            Enquire at <a href="mailto:info@westendwellness.uk" className="text-[#5F6446] underline">info@westendwellness.uk</a> or
          </p>
          <div className="mt-6">
            <ExternalLink to="https://momence.com/appointments/appointment-reservation/310814?boardId=259625&serviceId=399216" className={buttonClassName}>
              Book a consultation
            </ExternalLink>
          </div>
        </section>

        <section
          id="massage"
          className="scroll-mt-6 bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm p-6"
        >
          <h2 className="text-3xl font-semibold text-[#5F6446]">Sports Therapy</h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">Endurance Sports Therapy offers services from our massage room. Contact them via{' '}
            <ExternalLink to="https://www.instagram.com/endurance.sports.therapy" className="text-[#5F6446] underline">
              Instagram
            </ExternalLink>
          </p>
        </section>
      </div>
    </div>
  )
}
