import type { Metadata } from 'next';
import { ArrowDown, CalendarDays, MapPin, Trophy } from 'lucide-react';
import { buildPageMetadata } from '@/src/lib/seo';
import TournamentCard from '@/src/components/tournaments/TournamentCard';
import TournamentFilters from '@/src/components/tournaments/TournamentFilters';
import type { Tournament } from '@/src/components/tournaments/TournamentCard';

export const metadata: Metadata = buildPageMetadata({
  title: 'Tournaments',
  description:
    'Browse all tournaments on Play1. Find live, upcoming, and completed sports tournaments with real-time scoring and streaming.',
  path: '/tournaments',
  keywords: [
    'sports tournaments',
    'live tournaments',
    'tournament registration',
  ],
});

const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'City Slam 3v3 Open',
    category: 'Basketball',
    date: 'June 12, 2024',
    location: 'Central Park, NY',
    players: '32/64',
    prize: '$5,000',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdjGKzAMXxz1wmA9owV4u8YC2ef22-1adnL1XPnpuD35BQJfH3MmwVJs3iAf6YVAYk9U59rrvbYPz24XHz19C1-X0sMWTXCdzisWyC0QcUscBxl1WS9Gy6AfvX3_1bQhg0HC3IWrv5UM8zTNCQnPl2cTFZxvHaXkxd_qSyF26VH22Yd43UMPGPHCsy9sFjrUM9LdK0Ayg1e3wTgTvraAnp7uFC3WrIybPcwawfKokiGUEN1FxnaLc7jmgHrRKM5awE4m_JPLeQneHU',
  },
  {
    id: 2,
    name: 'Apex Legends Duo Pro',
    category: 'Esports',
    date: 'June 20, 2024',
    location: 'Online Global',
    players: '128/128',
    prize: '$12,000',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARfeD4I3CX3EU2FF4NzAEzZi7dPEnMEBExIw1DiMc9kQ2_pqh86cYBW7UFhpLxxWRmNMLB1dLm45Y25TyptD2Xaopmt7Kr29rkowfh4Bfj707yTngcaDM73FZYfnsLnMLeLKi9I7uYx_u1RAOmazGnL7Ti3BidzSfMUBKl6xU8TQAbWDHnbgzLBCDLcBvVLgmwushPKxqTEKis5rU3uEugOvFJ5AzM3nDwJif-ZeY2wMEGRNm5tAjxtesuqagbULQFefrAS4vIFhWj',
  },
  {
    id: 3,
    name: 'Coastal Tennis Open',
    category: 'Tennis',
    date: 'June 25, 2024',
    location: 'San Diego, CA',
    players: '12/16',
    prize: '$2,500',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQo23oUpHwS10aIfwA7gsu2gy5zT55mjZK2DoodDP-LV959-5TU_Z4hXUYBlwolgV5H2YHef3aqA9wis0qDT2xIOY5GLh2WXYDpSRygGWhWMVbQKYSTRLt6hRrG-JoKgmawodvnNDkmpuvNVRKvjQXRbNs1xX944xePjJyPVctQTUenrXNoHKX224s5LnKi0GSSmG98Pdext5yVJWZQe7TLIb47AiY6nh38GHXxEbMlkNiAiZcwXiofqL8jEw-i-FhSvnC5_MqkiF',
  },
  {
    id: 4,
    name: 'Elite 5-a-side Cup',
    category: 'Soccer',
    date: 'July 05, 2024',
    location: 'Austin, TX',
    players: '4/16',
    prize: '$7,500',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHQ8rSQ3c5SRl7B68OAT-M2oehq3YG2xT-sD534t5wI6lPqCdkrm_iqdtUNhyezxFzrsdETMDPzflYwuHtyiqh7_9evC-TNFDIKTO67cxjKMuMo0MvX9oxbPDn4OEZQ1D4UHenGQ1uaMthIBgAniNnRQ6j0A6fhmhq2xQ-6kdnqtVVBFkRUkFnlLjr0wRHdo5Sl1vkGolsMiuz1HqIkMhzPyIuXGHSASKcO8Xi-1807zZ8XACn277TozBSUj9OuDgZqIwBBKwhFWto',
  },
  {
    id: 5,
    name: 'Masters Club Classic',
    category: 'Golf',
    date: 'July 10, 2024',
    location: 'Scottsdale, AZ',
    players: '28/40',
    prize: '$15,000',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0qxgNJ6gFKGnnTRcwxF6b1I6ZxD5FmhrxFvR1y_kEUHTGCEuCr6TEzXO3Wyz-SF8clR9ZBp5Cq7Pg6W5WxjOO1TyJlYjqmkZvBcXxvVrTXxs4gkRrWF9gt0mmrJOWGOjUOcm3jQXeZ6tTC9o_jjdAsKmuK6O1Kw_Q88dxiv2XMRt-4QDF96JHLXQlUuELlf1pT9d1jBhytBfts6g62iGUzMcpBiXtuRR3a7io_6wwmlkxIAuPgUIIJztqf3x6yfQ5AQ29Om76cdDt',
  },
  {
    id: 6,
    name: 'Rocket League Cup',
    category: 'Esports',
    date: 'July 12, 2024',
    location: 'Online - NA',
    players: '64/64',
    prize: '$3,000',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCawUDmdRUPYCS2NAGBMAhqNnWnhsyQXor__l0W1Rir-1emQVeVxra37f5csdGH5OayBEsFOAugaiWL0SLI-gJdwaH8-JqsrVXYbG473ikjJa2GvkzycuILw5J5XbV8D7WUqd3UpGjdLYqpb91t3X_iV4DKkBitT5qL-PLSTYSos-T9KFgwmAd8zBuhDp9iBW3Zy1Jw31eYp9U8BHVjAGjGnNbLQ-NvzThKFvuCExzu66uZCAaFjo06XEuljaw42GDolBUhlvmt3ayf',
  },
];

const sports = [
  { value: 'all', label: 'All Sports' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'esports', label: 'Esports' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'golf', label: 'Golf' },
];

const cities = [
  { value: 'all', label: 'Any City' },
  { value: 'new-york', label: 'New York' },
  { value: 'san-diego', label: 'San Diego' },
  { value: 'austin', label: 'Austin' },
  { value: 'scottsdale', label: 'Scottsdale' },
  { value: 'online', label: 'Online' },
];

const dateRanges = [
  { value: 'month', label: 'This Month' },
  { value: 'week', label: 'This Week' },
  { value: 'next-month', label: 'Next Month' },
  { value: 'all', label: 'Any Time' },
];

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-4 pb-20 pt-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-3xl bg-linear-to-r from-vibrant-purple via-deep-indigo to-electric-blue px-5 py-8 text-white shadow-lg sm:px-8 sm:py-14">
          <div className="flex min-h-64 flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-bright-orange px-4 py-1 text-xs font-bold tracking-wider text-white">
                FEATURED TOURNAMENT
              </p>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">
                Summer Masters Invitational 2024
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-semibold text-zinc-200">
                <span className="inline-flex items-center gap-2">
                  <Trophy
                    className="h-4 w-4 text-bright-orange"
                    aria-hidden="true"
                  />
                  $50,000 Pool
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 text-electric-blue"
                    aria-hidden="true"
                  />
                  July 15-20
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                  Miami, FL
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-white px-7 py-3 text-base font-semibold text-vibrant-purple shadow sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </section>

        <TournamentFilters
          sports={sports}
          cities={cities}
          dateRanges={dateRanges}
        />

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Active Tournaments
            </h2>
            <p className="text-sm text-zinc-500">Showing 12 results</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tournaments.map((tournament) => {
              return (
                <TournamentCard key={tournament.id} tournament={tournament} />
              );
            })}
          </div>
        </section>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700"
          >
            Load More Tournaments
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
