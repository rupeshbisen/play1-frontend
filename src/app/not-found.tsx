import Link from 'next/link';
import {
  Gamepad,
  Home,
  LifeBuoy,
  Newspaper,
  Trophy,
  Users,
} from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex grow items-center justify-center overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--electric-blue-rgb),0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(var(--vibrant-purple-rgb),0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <div className="absolute left-1/2 top-20 h-80 w-full max-w-5xl -translate-x-1/2 rounded-full bg-linear-to-r from-electric-blue/25 via-vibrant-purple/20 to-bright-orange/20 blur-[110px] sm:top-16 sm:h-104" />

        <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/15 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-bright-orange" />
          Error 404 • Out of bounds
        </div>

        <div className="relative mb-6 sm:mb-12" aria-hidden="true">
          <div className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 rounded-full bg-linear-to-r from-electric-blue/12 via-vibrant-purple/10 to-bright-orange/12 blur-3xl sm:h-52" />

          <div className="relative flex items-center justify-center gap-4 sm:gap-8">
            <span
              className="select-none text-9xl sm:text-[12rem] font-black leading-none text-slate-100/95 drop-shadow-[0_12px_30px_rgba(148,163,184,0.32)]"
              style={{ WebkitTextStroke: '1px rgba(203,213,225,0.95)' }}
            >
              4
            </span>

            <div className="relative flex h-20 w-20 sm:h-36 sm:w-36 rotate-12 items-center justify-center rounded-3xl bg-linear-to-br from-electric-blue to-vibrant-purple text-white shadow-2xl shadow-electric-blue/25 transition-transform duration-500 hover:rotate-0">
              <Gamepad
                className="h-12 w-12 sm:h-18 sm:w-18"
                strokeWidth={2.2}
              />
              <span className="absolute h-1 w-14 rotate-[-35deg] rounded-full bg-white shadow-md sm:w-24 sm:h-1.5" />
            </div>

            <span
              className="select-none text-9xl sm:text-[12rem] font-black leading-none text-slate-100/95 drop-shadow-[0_12px_30px_rgba(148,163,184,0.32)]"
              style={{ WebkitTextStroke: '1px rgba(203,213,225,0.95)' }}
            >
              4
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Oops! You&apos;ve{' '}
            <span className="bg-linear-to-r from-electric-blue via-vibrant-purple to-bright-orange bg-clip-text text-transparent">
              wandered out of bounds
            </span>
          </h1>

          <p className="text-lg font-medium text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to a different address. Let&apos;s get you back in the game.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-electric-blue/25 transition-all hover:scale-105 hover:bg-electric-blue/90 sm:w-auto"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/tournaments"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-vibrant-purple px-8 py-4 text-base font-bold text-white shadow-lg shadow-vibrant-purple/25 transition-all hover:scale-105 hover:bg-vibrant-purple/90 sm:w-auto"
          >
            <Trophy className="h-5 w-5" />
            Explore Tournaments
          </Link>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-3xl border-t border-slate-200 pt-8">
          <div className="mb-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
              Looking for something else?
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://github.com/rupeshbisen/play1-frontend/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-bright-orange hover:bg-bright-orange/10 hover:text-bright-orange"
            >
              <LifeBuoy className="h-4 w-4" />
              Support Center
            </Link>

            <Link
              href="/#results"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue"
            >
              <Newspaper className="h-4 w-4" />
              Latest Results
            </Link>

            <Link
              href="/#leaderboard"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-vibrant-purple hover:bg-vibrant-purple/10 hover:text-vibrant-purple"
            >
              <Trophy className="h-4 w-4" />
              Leaderboard
            </Link>

            <Link
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-deep-indigo hover:bg-deep-indigo/10 hover:text-deep-indigo"
            >
              <Users className="h-4 w-4" />
              Community Discord
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
