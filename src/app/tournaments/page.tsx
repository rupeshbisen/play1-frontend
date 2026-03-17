import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tournaments | Play1 - Real-Time Sports Platform',
  description:
    'Browse all tournaments on Play1. Find live, upcoming, and completed sports tournaments with real-time scoring and streaming.',
};

type Tournament = {
  id: number;
  name: string;
  category: 'Basketball' | 'Esports' | 'Tennis' | 'Soccer' | 'Golf';
  date: string;
  location: string;
  players: string;
  prize: string;
};

const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'City Slam 3v3 Open',
    category: 'Basketball',
    date: 'June 12, 2024',
    location: 'Central Park, NY',
    players: '32/64',
    prize: '$5,000',
  },
  {
    id: 2,
    name: 'Apex Legends Duo Pro',
    category: 'Esports',
    date: 'June 20, 2024',
    location: 'Online Global',
    players: '128/128',
    prize: '$12,000',
  },
  {
    id: 3,
    name: 'Coastal Tennis Open',
    category: 'Tennis',
    date: 'June 25, 2024',
    location: 'San Diego, CA',
    players: '12/16',
    prize: '$2,500',
  },
  {
    id: 4,
    name: 'Elite 5-a-side Cup',
    category: 'Soccer',
    date: 'July 05, 2024',
    location: 'Austin, TX',
    players: '4/16',
    prize: '$7,500',
  },
  {
    id: 5,
    name: 'Masters Club Classic',
    category: 'Golf',
    date: 'July 10, 2024',
    location: 'Scottsdale, AZ',
    players: '28/40',
    prize: '$15,000',
  },
  {
    id: 6,
    name: 'Rocket League Cup',
    category: 'Esports',
    date: 'July 12, 2024',
    location: 'Online - NA',
    players: '64/64',
    prize: '$3,000',
  },
];

const categoryStyles: Record<Tournament['category'], string> = {
  Basketball: 'bg-vibrant-purple text-white',
  Esports: 'bg-electric-blue text-white',
  Tennis: 'bg-bright-orange text-white',
  Soccer: 'bg-vibrant-purple text-white',
  Golf: 'bg-bright-orange text-white',
};

const coverStyles: Record<Tournament['category'], string> = {
  Basketball: 'bg-linear-to-r from-zinc-500 via-zinc-200 to-zinc-400',
  Esports: 'bg-linear-to-r from-zinc-700 via-zinc-400 to-zinc-600',
  Tennis: 'bg-linear-to-r from-slate-900 via-zinc-300 to-zinc-800',
  Soccer: 'bg-linear-to-r from-amber-900 via-zinc-100 to-amber-800',
  Golf: 'bg-linear-to-r from-zinc-200 via-slate-900 to-zinc-200',
};

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
                <span>$50,000 Pool</span>
                <span>July 15-20</span>
                <span>Miami, FL</span>
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

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-64 grow rounded-xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500">
              Search by tournament name or sport...
            </div>
            <FilterPill label="All Sports" />
            <FilterPill label="Any City" />
            <FilterPill label="This Month" />
            <button
              type="button"
              aria-label="Filters"
              className="rounded-xl bg-bright-orange p-3 text-white shadow"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 7h16M7 12h10M10 17h4" />
              </svg>
            </button>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Active Tournaments
            </h2>
            <p className="text-sm text-zinc-500">Showing 12 results</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </section>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="rounded-xl border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700"
          >
            Load More Tournaments
          </button>
        </div>
      </div>
    </div>
  );
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className={`relative h-44 p-4 ${coverStyles[tournament.category]}`}>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${categoryStyles[tournament.category]}`}
        >
          {tournament.category}
        </span>
        <span className="absolute right-4 top-4 rounded bg-zinc-900/80 px-2 py-1 text-xs font-semibold text-white">
          {tournament.players}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold leading-tight text-zinc-900">
            {tournament.name}
          </h3>
          <span className="text-lg font-bold text-bright-orange">
            {tournament.prize}
          </span>
        </div>

        <div className="mb-5 space-y-2 text-sm text-zinc-500">
          <p>{tournament.date}</p>
          <p>{tournament.location}</p>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-zinc-100 py-3 text-base font-semibold text-zinc-800"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-600"
    >
      {label}
      <svg
        className="ml-2 h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
