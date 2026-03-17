import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildPageMetadata, siteConfig } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Score Your Local Matches Like a Pro',
  description:
    'The ultimate platform for local athletes to track stats, manage tournaments, and climb the ranks with real-time match updates.',
  path: '/',
  keywords: [
    'local sports',
    'match tracking',
    'sports leaderboard',
    'tournament platform',
  ],
});

const tournaments = [
  {
    name: 'Metro Elite Summer Slam',
    subtitle: 'Downtown Sports Center - 24 Teams',
    prize: '$5,000',
    status: 'LIVE',
    statusClass: 'bg-red-500 text-white',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl2naFU28UZ-hp1SEUW7zlaq5He-JfdpqxCbb8yWcpYH41-Q3WU0sVhb96aUUMDcoUb0mGTnVQGGrI-DUcHMFyCL7M4-OBUDlDi3cXgE_bRSdET-mYaIZnxLCUPUoW2NcaJW25oZdQ2bBzTyve8DinmmGWl9_QIAssOyZNQdPIxhVQtCV4_ScM1BHtf7m3nqyWBI3TzhNUb95JpUOoaDBkAcwSvB-nJdBz_zlMykZavzhMf1fDqAenzKDxxE08qVbmGkyDiTAqa-0-',
  },
  {
    name: 'City Champions League',
    subtitle: 'Westside Stadium - 32 Teams',
    prize: '$2,500',
    status: 'REGISTERING',
    statusClass: 'bg-bright-orange text-white',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9dw7b3AvLmtV_1sr0ui9aTpwuq-Smlgv7UF-ts2bXU2H9uDNNSD9BnI5q86PNN0Pmvl4iI49jVJ8wZEAbcpNiNe0ZVBeOsp2N20v45Ov7mY72E7OJSglXx0dUW363klevG1JhOgk8hrfMcq0grIDn1XCRrqCFlcpyoBJkjSVpkj-YkGxu6MW6ErHD8EkAVWVkD7aB8WZvuyqljgMn0uNqcPg3ks8amxUu-ba2HaOzAKpjp28lFe-uAOOsN3yHqV2ZsjJUl1Ekw5CE',
  },
  {
    name: 'Midnight Madness 3v3',
    subtitle: 'The Warehouse Gym - 16 Teams',
    prize: '$1,200',
    status: 'LIVE',
    statusClass: 'bg-red-500 text-white',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2hEmYGaC-zcME9nMtVH6qedbllfhNF2_cazJGNa2P6Ix-cqMgT6q1nHDdhv5-_v7lgmdjVO87Uh4rGLSYwfy_vAkoTi3jffQPYRKb7H1wS8VlcECRqTm20pr8fxuVGhgvIdJhQcID-JyY50d35yFK92hAS0INv9VrErLoXa0rBLuC6UNd8GEXCUHm4FY9fj8ykK1tlprmQznCzEhTEbHXu6ZL_TOXDs8rhUz6vUI6ATIpmSUHRylmXVi6G4SrCyyInQoj9eDOzMJw',
  },
];

const players = [
  {
    rank: 1,
    rankClass: 'text-bright-orange',
    name: 'Alex Rivera',
    role: 'Point Guard - NYC Bulls',
    points: 2450,
    ringClass: 'ring-bright-orange',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBv4kuzGEujIMN_2vgQgcRiwaW54IaO-fE_7d3_iBzCLq7WDs8jR7H6lceNCmIwKOgqtKBysDe2tMoCIDKoBJni3q_VHzSRCuLpEAQI2nFZmbU0qrZn7GYQPFwjWfaDt5PSiIuGsnfIpbHPtjQwLNUVG1_Y6_-mbH7x6aFuKeNJKXaUuiZnWK7rpZJdpqS_VTdrvo1Td5CdhyqBj_ZQXnSrOYjmuVQZEEY_NQAScDMizfJ32vcxzwnX0E2R8eJmgiVpz9Xh08jio_PS',
  },
  {
    rank: 2,
    rankClass: 'text-slate-400',
    name: 'Sarah Chen',
    role: 'Forward - SF Warriors',
    points: 2180,
    ringClass: 'ring-slate-200',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvnf_HuKi75IcBFEbLWsxpHaEWmMKkrXPWkxk3m7n3oiDzGkIHzZzLGn0Hn_OhYCAcXRklD3BNMloFyhTurbF4xfzJdi247SpWyQJIS4kkjQ8suCF0bKwc8rS_If2PbJvKuXG7f_X9Sk3oo6hLbW72ZWQxtZ5fW834Fw7FJtXev0WGACQumr0D3SmJeGjy6XQP0xDzeL-w8a3QcOf_Nk7dLK7F-gX06Pv_cFaGWtk2MiJ6PXTuPjdiQAJR5gnJ2u6ziFsuGzNS5Vcl',
  },
  {
    rank: 3,
    rankClass: 'text-slate-400',
    name: 'Marcus Jordan',
    role: 'Guard - CHI Sky',
    points: 1945,
    ringClass: 'ring-slate-200',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDdGIbBQhNXEB-GjDAqzpsV52RnrtvceceKDv6tJ4QsxxLAPY8wvTlew7LW7hQyTLk9AIb1spag0jKgBbnWq1f4nLhwDUNgHgGbLpTicB6ZSQNdC1nJa71lrt-3ucGw6LkvsIlbKyHU6uNGgNALoctTJLCGrswkd2_WZ7xewSDHSgT6rvu_-Pmfwjc1fnVlubjXUuqI_GCKI9AwEvAaP7FKBIGSFp2ANsdTkL-zswm8BHgeFz0NY2LbsIe-QaJviIxzG_Q1_bAydqI',
  },
];

const results = [
  {
    home: 'Titans',
    homeScore: 88,
    away: 'Falcons',
    awayScore: 92,
    date: 'May 12, 2024',
    borderClass: 'border-l-vibrant-purple',
    homeClass: 'text-slate-900',
    awayClass: 'text-bright-orange',
  },
  {
    home: 'Strikers',
    homeScore: 104,
    away: 'Eagles',
    awayScore: 76,
    date: 'May 11, 2024',
    borderClass: 'border-l-bright-orange',
    homeClass: 'text-bright-orange',
    awayClass: 'text-slate-900',
  },
  {
    home: 'Heat',
    homeScore: 82,
    away: 'Wolves',
    awayScore: 85,
    date: 'May 11, 2024',
    borderClass: 'border-l-slate-200',
    homeClass: 'text-slate-900',
    awayClass: 'text-bright-orange',
  },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/tournaments`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: structuredData is a server-side constant with no user input, serialised by JSON.stringify */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        className="border-b border-slate-100 pb-24 pt-20"
        style={{
          background:
            'radial-gradient(circle at top right, #f5f3ff 0%, #ffffff 100%)',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl leading-[1.1] font-black text-slate-900 md:text-7xl">
            Score Your Local <br />
            <span className="bg-linear-to-r from-indigo-500 to-bright-orange bg-clip-text text-transparent">
              Matches Like a Pro
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            The ultimate platform for local athletes to track stats, manage
            tournaments, and climb the ranks. Your game, elevated.
          </p>

          <form className="group relative mx-auto max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-vibrant-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <label htmlFor="home-search" className="sr-only">
              Search tournaments, players, or teams
            </label>
            <input
              id="home-search"
              type="text"
              placeholder="Search tournaments, players, or teams..."
              className="block w-full rounded-full border border-slate-200 bg-white py-5 pl-14 pr-32 text-slate-900 shadow-xl shadow-slate-200/50 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-vibrant-purple"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 rounded-full bg-vibrant-purple px-8 font-bold text-white transition-colors hover:bg-deep-indigo"
            >
              Search
            </button>
          </form>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-black text-slate-900">12.5k+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                Active Players
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">450+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                Tournaments
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">85k+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                Matches Played
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-bright-orange">99.9%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                Live Uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                Live Tournaments
              </h2>
              <p className="mt-1 text-slate-500">
                Join or follow active competitions in your area.
              </p>
            </div>
            <Link
              href="/tournaments"
              className="flex items-center gap-2 font-bold text-vibrant-purple transition-all hover:gap-3"
            >
              View All
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {tournaments.map((item) => (
              <article
                key={item.name}
                className="group mx-auto w-full max-w-107.5 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl md:max-w-none"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className={`absolute top-4 left-4 rounded px-2 py-1 text-[10px] font-black tracking-wider uppercase ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Prize Pool
                      </p>
                      <p className="text-xl font-black text-vibrant-purple">
                        {item.prize}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div id="leaderboard">
              <h2 className="mb-8 text-3xl font-black text-slate-900">
                Players of the Week
              </h2>
              <div className="space-y-4">
                {players.map((player) => (
                  <article
                    key={player.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span
                      className={`w-6 text-2xl font-black ${player.rankClass}`}
                    >
                      {player.rank}
                    </span>
                    <Image
                      src={player.image}
                      alt={player.name}
                      width={48}
                      height={48}
                      className={`h-12 w-12 rounded-full ring-2 ring-offset-2 ${player.ringClass}`}
                    />
                    <div className="grow">
                      <p className="font-bold text-slate-900">{player.name}</p>
                      <p className="text-xs text-slate-500">{player.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-slate-900">
                        {player.points}
                      </p>
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Points
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="results">
              <h2 className="mb-8 text-3xl font-black text-slate-900">
                Recent Results
              </h2>
              <div className="space-y-4">
                {results.map((item) => (
                  <article
                    key={`${item.home}-${item.date}`}
                    className={`rounded-2xl border border-slate-200 border-l-4 bg-white p-6 shadow-sm ${item.borderClass}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-24 text-center">
                        <p className="mb-1 text-[10px] font-bold uppercase text-slate-400">
                          {item.home}
                        </p>
                        <p className={`text-2xl font-black ${item.homeClass}`}>
                          {item.homeScore}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="mb-1 text-[10px] font-bold uppercase text-vibrant-purple">
                          Final
                        </p>
                        <p className="text-xs text-slate-400">{item.date}</p>
                      </div>
                      <div className="w-24 text-center">
                        <p className="mb-1 text-[10px] font-bold uppercase text-slate-400">
                          {item.away}
                        </p>
                        <p className={`text-2xl font-black ${item.awayClass}`}>
                          {item.awayScore}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-r from-[#071539] via-[#0b1740] to-[#232a67] p-12 lg:p-20">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-vibrant-purple/12 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="text-4xl leading-tight font-black text-white lg:text-5xl">
                  Stats in your pocket.
                  <br />
                  <span className="bg-linear-to-r from-indigo-400 to-vibrant-purple bg-clip-text text-transparent">
                    Anytime. Anywhere.
                  </span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  Get real-time notifications, view your performance charts, and
                  register for tournaments instantly with the play1 mobile app.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 transition-all hover:bg-white/20"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.05 20.28c-.96.95-2.22 1.5-3.55 1.5-2.6 0-4.73-2.1-4.73-4.7s2.13-4.7 4.73-4.7c1.33 0 2.59.55 3.55 1.5l1.41-1.41c-1.33-1.33-3.14-2.09-4.96-2.09-3.72 0-6.73 3.01-6.73 6.7s3.01 6.7 6.73 6.7c1.82 0 3.63-.76 4.96-2.09l-1.41-1.41z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] leading-none font-bold tracking-wide text-slate-400 uppercase">
                        Download on the
                      </p>
                      <p className="mt-1 text-lg leading-none font-bold text-white">
                        App Store
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 transition-all hover:bg-white/20"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM14.4 12.71L16.79 15.1L4.82 21.88C4.54 22.04 4.26 22.12 4 22.12C4.1 22.12 4.21 22.11 4.32 22.05L14.4 12.71ZM14.4 11.29L4.32 1.95C4.21 1.89 4.1 1.88 4 1.88C4.26 1.88 4.54 1.96 4.82 2.12L16.79 8.9L14.4 11.29ZM17.5 12.71L20.41 11.05C21.05 10.68 21.05 9.32 20.41 8.95L17.5 7.29L15.1 9.69L17.5 12.09L15.1 14.31L17.5 12.71Z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] leading-none font-bold tracking-wide text-slate-400 uppercase">
                        Get it on
                      </p>
                      <p className="mt-1 text-lg leading-none font-bold text-white">
                        Google Play
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:w-1/2 lg:justify-end">
                <div className="relative h-125 w-64 overflow-hidden rounded-[3rem] border-8 border-slate-700 bg-slate-800 shadow-2xl">
                  <div className="p-6">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/Logo_play1.png"
                        alt="play1 logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
                    <div className="mt-6 h-4 rounded-full bg-slate-600" />
                    <div className="mt-6 h-36 rounded-2xl bg-slate-600/50" />
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="h-18 rounded-2xl bg-indigo-500/35" />
                      <div className="h-18 rounded-2xl bg-slate-600/60" />
                    </div>
                    <div className="mt-5 h-4 w-2/3 rounded-full bg-slate-600" />
                  </div>
                  <Image
                    src="/Logo_play1.png"
                    alt="play1 watermark"
                    width={120}
                    height={120}
                    className="pointer-events-none absolute right-1 bottom-0 h-28 w-28 opacity-35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
