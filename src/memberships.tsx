import { ExternalLink } from './components/ui/external_link'

export function meta() {
  return [
    { title: 'Memberships | Westend Wellness' },
    {
      name: 'description',
      content: 'Memberships, class passes and drop-in prices at Westend Wellness, Dundee.',
    },
  ]
}

const MEMBERSHIP_BASE_URL = 'https://momence.com/Westend-Wellness/membership'

interface Membership {
  name: string
  price: number
  // Shown struck through next to the price, for discounted memberships
  usualPrice?: number
  // Short label shown above the name, e.g. which classes are included
  tag?: string
  // Path under MEMBERSHIP_BASE_URL
  path: string
}

interface MembershipGroup {
  title?: string
  description?: string
  memberships: Membership[]
}

interface MembershipSection {
  id: string
  title: string
  description: string
  // Appended to each price, e.g. '/month'
  priceSuffix?: string
  groups: MembershipGroup[]
}

const sections: MembershipSection[] = [
  {
    id: 'early-bird',
    title: 'Early bird deals!',
    description:
      'For a limited time only, discounted memberships for our first customers! Early Bird memberships come with a free guest pass every quarter, so you can bring a friend to your classes.',
    priceSuffix: '/month',
    groups: [
      {
        memberships: [
          {
            tag: 'All classes',
            name: '5 classes per month',
            price: 69,
            usualPrice: 85,
            path: 'Early-Bird-Membership-5-Classes-including-Reformer-(excluding-gym)-per-month/940472',
          },
          {
            tag: 'All classes',
            name: '10 classes per month',
            price: 115,
            usualPrice: 145,
            path: 'Early-Bird-Membership-10-Classes-including-Reformer-(excluding-gym)-per-month/927373',
          },
          {
            tag: 'All classes',
            name: '15 classes per month',
            price: 155,
            usualPrice: 195,
            path: 'Early-Bird-Membership-15-classes-including-Reformer-(excluding-gym)-per-month/927205',
          },
        ],
      },
      {
        memberships: [
          {
            tag: 'Non-reformer',
            name: '5 classes per month',
            price: 44,
            usualPrice: 55,
            path: 'Early-Bird-5-classes-per-month-(excludes-Reformer-classes-%26-gym)-Membership/978442',
          },
          {
            tag: 'Non-reformer',
            name: '10 classes per month',
            price: 84,
            usualPrice: 105,
            path: 'Early-Bird-10-classes-per-month-(excludes-Reformer-classes-%26-gym)-Membership/978438',
          },
          {
            tag: 'Non-reformer',
            name: '15 classes per month',
            price: 95,
            usualPrice: 120,
            path: 'Early-Bird-Membership-15-Classes-per-month-(excluding-Reformer-and-gym)/940477',
          },
        ]
      },
      {
        memberships: [
          {
            tag: 'Gym access',
            name: 'Unlimited gym access',
            price: 32,
            usualPrice: 40,
            path: 'Early-Bird-Gym-Only-Membership/940479',
          }
        ]
      }
    ],
  },
  {
    id: 'monthly',
    title: 'Monthly class pass',
    description: 'A set number of classes every month.',
    priceSuffix: '/month',
    groups: [
      {
        title: 'All classes',
        description: 'Access to all our classes: reformer and mat pilates, barre and yoga!',
        memberships: [
          {
            name: '5 classes per month',
            price: 85,
            path: '5-classes-including-Reformer-(excluding-gym)-per-month-Membership/927410',
          },
          {
            name: '10 classes per month',
            price: 145,
            path: '10-Classes-including-Reformer-(excluding-gym)-per-month-Membership/927409',
          },
          {
            name: '15 classes per month',
            price: 195,
            path: '15-Classes-including-Reformer-(excluding-gym)-per-month-Membership/927374',
          },
        ],
      },
      {
        title: 'Non-reformer',
        description: 'A cheaper option that excludes reformer classes.',
        memberships: [
          {
            name: '5 classes per month',
            price: 55,
            path: '5-classes-per-month-(excludes-Reformer-classes-%26-gym)-Membership/978444',
          },
          {
            name: '10 classes per month',
            price: 105,
            path: '10-classes-per-month-(excludes-Reformer-classes-%26-gym)-Membership/978443',
          },
          {
            name: '15 classes per month',
            price: 120,
            path: '15-classes-per-month-(excludes-Reformer-classes-%26-gym)-Membership/927411',
          },
        ],
      },
    ],
  },
  {
    id: 'drop-in',
    title: 'Drop-in & class packs',
    description:
      'A more flexible option for one-off classes. All class passes are valid for 3 months from purchase.',
    groups: [
      {
        title: 'Including reformer',
        memberships: [
          {
            name: 'Single reformer class',
            price: 22,
            path: 'Drop-in-Reformer-Only-Class/927514',
          },
          {
            tag: 'Intro offer',
            name: '2 reformer classes',
            price: 30,
            path: 'Introduction-offer---2-x-Any-Reformer-Classes-/927517',
          },
          {
            name: '5 class pass',
            price: 90,
            path: '5-Reformer%2FClass-pass-(Valid-3-Months%2C-excludes-gym)/927519',
          },
          {
            name: '10 class pass',
            price: 165,
            path: '10-Reformer%2FClass-pass-(Valid-5-Months-excludes-gym)/928619',
          },
        ],
      },
      {
        title: 'Excluding reformer',
        memberships: [
          {
            name: 'Single class',
            price: 13,
            path: 'Drop-in-Single-Class-Pass-(any-class-excluding-reformer-or-gym)/928654',
          },
          {
            tag: 'Intro offer',
            name: '3 classes',
            price: 30,
            path: 'Intro-offer---3-x-class-pass-(any-class-excluding-reformer-or-gym)/928656',
          },
          {
            name: '5 class pass',
            price: 55,
            path: '5-class-pass-Valid-3-months-(excludes-reformer-classes-or-gym)-/929791',
          },
          {
            name: '10 class pass',
            price: 105,
            path: '10-class-package--(Valid-5-months-excludes-reformer-classes-or-gym)/929793',
          },
        ],
      },
    ],
  },
]

function MembershipCard({
  membership: { name, price, usualPrice, tag, path },
  priceSuffix,
}: {
  membership: Membership
  priceSuffix?: string
}) {
  return (
    <li className="bg-white rounded-2xl border border-[#5F6446]/20 shadow-sm p-6 flex flex-col transition-shadow hover:shadow-md">
      {tag && (
        <p className="text-xs font-semibold uppercase tracking-wide text-[#5F6446]/80 mb-1">{tag}</p>
      )}
      <h4 className="text-xl font-semibold text-[#5F6446]">{name}</h4>
      <p className="mt-4 mb-6 flex items-baseline gap-2">
        {usualPrice && (
          <span className="text-gray-500 line-through">
            <span className="sr-only">Usually </span>£{usualPrice}
          </span>
        )}
        <span className="text-3xl font-semibold">£{price}</span>
        {priceSuffix && <span className="text-gray-600">{priceSuffix}</span>}
      </p>
      <ExternalLink
        to={`${MEMBERSHIP_BASE_URL}/${path}`}
        className="mt-auto inline-block self-start rounded-full bg-[#5F6446] px-5 py-2 font-semibold text-white transition-colors hover:bg-[#4b4f37] text-box-trim supports-text-box:py-3.5"
      >
        Buy now
      </ExternalLink>
    </li>
  )
}

export default function Memberships() {
  return (
    <div className="bg-[#f8f7f3] text-gray-900">
      <section className="bg-[#5F6446] py-10 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold">Memberships</h1>
      </section>

      <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col gap-16">
        {sections.map(({ id, title, description, priceSuffix, groups }) => (
          <section key={id} id={id} className="scroll-mt-6">
            <h2 className="text-3xl font-semibold text-[#5F6446]">{title}</h2>
            <p className="mt-2 max-w-3xl text-lg text-gray-700 leading-relaxed">{description}</p>

            <div className="mt-8 flex flex-col gap-5">
              {groups.map((group) => (
                <div key={group.title ?? id}>
                  {group.title && (
                    <h3 className="text-2xl font-semibold text-gray-900">{group.title}</h3>
                  )}
                  {group.description && <p className="mt-1 text-gray-700">{group.description}</p>}
                  <ul className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${group.title ? 'mt-4' : ''}`}>
                    {group.memberships.map((membership) => (
                      <MembershipCard
                        key={membership.path}
                        membership={membership}
                        priceSuffix={priceSuffix}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
