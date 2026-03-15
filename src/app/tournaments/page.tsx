import type { Metadata } from 'next';
import Link from 'next/link';
import BrandLogo from '@/src/components/BrandLogo';

export const metadata: Metadata = {
  title: 'Tournaments | Play1 - Real-Time Sports Platform',
  description:
    'Browse all tournaments on Play1. Find live, upcoming, and completed sports tournaments with real-time scoring and streaming.',
};

type TournamentStatus = 'live' | 'upcoming' | 'completed';

interface Tournament {
  id: number;
  name: string;
  sport: string;
  status: TournamentStatus;
  startDate: string;
  endDate: string;
  location: string;
  teams: number;
  prizePool: string;
  organizer: string;
}

const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'Premier Cricket League 2026',
    sport: 'Cricket',
    status: 'live',
    startDate: 'Mar 10, 2026',
    endDate: 'Apr 5, 2026',
    location: 'Mumbai, India',
    teams: 8,
    prizePool: '₹50,00,000',
    organizer: 'Sports Authority of India',
  },
  {
    id: 2,
    name: 'City Football Championship',
    sport: 'Football',
    status: 'live',
    startDate: 'Mar 12, 2026',
    endDate: 'Mar 28, 2026',
    location: 'Bengaluru, India',
    teams: 16,
    prizePool: '₹10,00,000',
    organizer: 'Bengaluru Sports Club',
  },
  {
    id: 3,
    name: 'National Badminton Open',
    sport: 'Badminton',
    status: 'upcoming',
    startDate: 'Apr 1, 2026',
    endDate: 'Apr 10, 2026',
    location: 'Hyderabad, India',
    teams: 32,
    prizePool: '₹5,00,000',
    organizer: 'Badminton Association of India',
  },
  {
    id: 4,
    name: 'Regional Basketball Cup',
    sport: 'Basketball',
    status: 'upcoming',
    startDate: 'Apr 15, 2026',
    endDate: 'Apr 22, 2026',
    location: 'Chennai, India',
    teams: 12,
    prizePool: '₹3,00,000',
    organizer: 'Tamil Nadu Basketball Federation',
  },
  {
    id: 5,
    name: 'Inter-State Kabaddi Series',
    sport: 'Kabaddi',
    status: 'upcoming',
    startDate: 'May 2, 2026',
    endDate: 'May 15, 2026',
    location: 'Pune, India',
    teams: 10,
    prizePool: '₹8,00,000',
    organizer: 'Amateur Kabaddi Federation',
  },
  {
    id: 6,
    name: 'Classic Tennis Invitational',
    sport: 'Tennis',
    status: 'completed',
    startDate: 'Feb 5, 2026',
    endDate: 'Feb 20, 2026',
    location: 'Delhi, India',
    teams: 24,
    prizePool: '₹12,00,000',
    organizer: 'All India Tennis Association',
  },
  {
    id: 7,
    name: 'Winter Volleyball League',
    sport: 'Volleyball',
    status: 'completed',
    startDate: 'Jan 10, 2026',
    endDate: 'Feb 1, 2026',
    location: 'Kolkata, India',
    teams: 8,
    prizePool: '₹2,00,000',
    organizer: 'Volleyball Federation of India',
  },
  {
    id: 8,
    name: 'Grand Hockey Tournament',
    sport: 'Hockey',
    status: 'completed',
    startDate: 'Dec 20, 2025',
    endDate: 'Jan 5, 2026',
    location: 'Bhopal, India',
    teams: 12,
    prizePool: '₹6,00,000',
    organizer: 'Hockey India',
  },
];

const statusConfig: Record<
  TournamentStatus,
  { label: string; className: string }
> = {
  live: {
    label: 'Live',
    className:
      'bg-electric-blue/20 text-electric-blue ring-1 ring-electric-blue/30',
  },
  upcoming: {
    label: 'Upcoming',
    className:
      'bg-bright-orange/20 text-bright-orange ring-1 ring-bright-orange/30',
  },
  completed: {
    label: 'Completed',
    className: 'bg-zinc-700/50 text-zinc-400 ring-1 ring-zinc-600/30',
  },
};

const sportIcons: Record<string, string> = {
  Cricket: '🏏',
  Football: '⚽',
  Badminton: '🏸',
  Basketball: '🏀',
  Kabaddi: '🤼',
  Tennis: '🎾',
  Volleyball: '🏐',
  Hockey: '🏑',
};

export default function TournamentsPage() {
  const liveTournaments = tournaments.filter((t) => t.status === 'live');
  const upcomingTournaments = tournaments.filter(
    (t) => t.status === 'upcoming'
  );
  const completedTournaments = tournaments.filter(
    (t) => t.status === 'completed'
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-900 via-zinc-950 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <BrandLogo
                imageClassName="h-10 w-10"
                textClassName="text-2xl"
                priority
              />
              <div className="hidden space-x-6 md:flex">
                <Link
                  href="/#features"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/tournaments"
                  className="font-medium text-white transition-colors"
                  aria-current="page"
                >
                  Tournaments
                </Link>
                <a
                  href="https://github.com/rupeshbisen/play1-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-linear-to-r from-electric-blue via-deep-indigo to-bright-orange px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bright-orange/20 bg-bright-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bright-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-bright-orange" />
              Tournament Hub
            </div>
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tournament Listings
            </h1>
            <p className="max-w-2xl text-lg text-zinc-400">
              Discover live, upcoming, and past tournaments across all sports.
              Follow your favorite teams and get real-time score updates.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-electric-blue shadow-[0_0_6px_2px_rgba(0,174,239,0.5)]" />
              <span className="font-semibold text-white">
                {liveTournaments.length}
              </span>
              <span className="text-zinc-400">Live now</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-bright-orange" />
              <span className="font-semibold text-white">
                {upcomingTournaments.length}
              </span>
              <span className="text-zinc-400">Upcoming</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
              <span className="font-semibold text-white">
                {completedTournaments.length}
              </span>
              <span className="text-zinc-400">Completed</span>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl">
          <div className="h-40 w-52 rounded-full bg-linear-to-r from-electric-blue/20 to-bright-orange/20" />
        </div>
      </section>

      {/* Live Tournaments */}
      {liveTournaments.length > 0 && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-electric-blue shadow-[0_0_6px_2px_rgba(0,174,239,0.5)]" />
              <h2 className="text-xl font-bold">Live Tournaments</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Tournaments */}
      {upcomingTournaments.length > 0 && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-bright-orange" />
              <h2 className="text-xl font-bold">Upcoming Tournaments</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Tournaments */}
      {completedTournaments.length > 0 && (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
              <h2 className="text-xl font-bold">Completed Tournaments</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {completedTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  const status = statusConfig[tournament.status];
  const icon = sportIcons[tournament.sport] ?? '🏆';
  const isLive = tournament.status === 'live';

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-zinc-900/50 p-6 transition-all hover:bg-zinc-900/80 ${
        isLive
          ? 'border-electric-blue/30 hover:border-electric-blue/50'
          : 'border-zinc-800 hover:border-zinc-700'
      }`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
              isLive ? 'bg-electric-blue/10' : 'bg-bright-orange/10'
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-semibold leading-snug text-white group-hover:text-bright-orange/90">
              {tournament.name}
            </h3>
            <p className="mt-0.5 text-sm text-zinc-400">{tournament.sport}</p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}
        >
          {isLive && (
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-electric-blue align-middle" />
          )}
          {status.label}
        </span>
      </div>

      {/* Details */}
      <dl className="mb-5 grid grid-cols-2 gap-y-3 text-sm">
        <div>
          <dt className="text-xs text-zinc-500">Dates</dt>
          <dd className="mt-0.5 font-medium text-zinc-200">
            {tournament.startDate}
            <span className="mx-1 text-zinc-600">–</span>
            {tournament.endDate}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-zinc-500">Location</dt>
          <dd className="mt-0.5 font-medium text-zinc-200">
            {tournament.location}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-zinc-500">Teams</dt>
          <dd className="mt-0.5 font-medium text-zinc-200">
            {tournament.teams} teams
          </dd>
        </div>
        <div>
          <dt className="text-xs text-zinc-500">Prize Pool</dt>
          <dd className="mt-0.5 font-medium text-zinc-200">
            {tournament.prizePool}
          </dd>
        </div>
      </dl>

      {/* Organizer */}
      <p className="mb-5 text-xs text-zinc-500">
        Organised by{' '}
        <span className="text-zinc-400">{tournament.organizer}</span>
      </p>

      {/* Action */}
      <div className="mt-auto">
        <button
          type="button"
          disabled
          title="Backend integration pending"
          className={`w-full cursor-not-allowed rounded-xl py-2.5 text-sm font-semibold transition-all disabled:opacity-60 ${
            isLive
              ? 'bg-linear-to-r from-electric-blue via-deep-indigo to-bright-orange text-white'
              : tournament.status === 'upcoming'
                ? 'border border-bright-orange/40 text-bright-orange hover:bg-bright-orange/10'
                : 'border border-zinc-700 text-zinc-400'
          }`}
        >
          {isLive
            ? 'Watch Live'
            : tournament.status === 'upcoming'
              ? 'Set Reminder'
              : 'View Results'}
        </button>
      </div>
    </article>
  );
}
