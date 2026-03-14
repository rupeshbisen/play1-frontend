import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-900 via-zinc-950 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
                Play1
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#features"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="https://github.com/rupeshbisen/play1-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                GitHub
              </a>
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
                className="rounded-lg bg-linear-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-orange-600 hover:to-red-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                Real-Time Sports
              </span>
              <br />
              Platform for Everyone
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400 sm:text-2xl">
              Open-source platform for live match scoring, streaming, and player
              auctions. From grassroots to professional leagues.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="w-full rounded-lg bg-linear-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-orange-600 hover:to-red-700 sm:w-auto"
              >
                Start Free Trial
              </Link>
              <a
                href="https://github.com/rupeshbisen/play1-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg border border-zinc-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-zinc-600 hover:bg-zinc-900 sm:w-auto"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl">
          <div className="h-40 w-52 rounded-full bg-linear-to-r from-orange-500/20 to-red-600/20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Everything you need to run professional sports tournaments with
              real-time updates
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-orange-500/10 p-3">
                <svg
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  focusable={false}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Real-Time Scoring</h3>
              <p className="text-zinc-400">
                Instant score updates with WebSocket technology. Keep fans
                engaged with live match data updated in milliseconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-red-500/10 p-3">
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Live Streaming</h3>
              <p className="text-zinc-400">
                HD video streaming with score overlays using HLS/Video.js.
                Broadcast matches to thousands of viewers simultaneously.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-orange-500/10 p-3">
                <svg
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Player Auctions</h3>
              <p className="text-zinc-400">
                Live bidding system for player auctions with real-time updates.
                Perfect for fantasy leagues and team formations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-red-500/10 p-3">
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">SEO Optimized</h3>
              <p className="text-zinc-400">
                SEO-friendly match pages built with Next.js. Improve
                discoverability and reach more fans organically.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-orange-500/10 p-3">
                <svg
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Mobile Ready</h3>
              <p className="text-zinc-400">
                Responsive design optimized for all devices. PWA-ready for
                native app-like experience on mobile.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700">
              <div className="mb-4 inline-block rounded-lg bg-red-500/10 p-3">
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Open Source</h3>
              <p className="text-zinc-400">
                100% open-source and transparent. Customize, extend, and
                contribute to build the best sports platform together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Built for Scalability & Low Latency
              </h2>
              <p className="mb-6 text-lg text-zinc-400">
                Play1 is designed from the ground up to handle everything from
                grassroots tournaments to professional leagues. Our architecture
                ensures your matches, streams, and auctions run smoothly
                regardless of scale.
              </p>
              <p className="mb-8 text-lg text-zinc-400">
                Powered by modern web technologies like Next.js, React, and
                Socket.io, Play1 delivers real-time updates with minimal
                latency. Your fans stay engaged with instant score updates and
                live interactions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">WebSocket Real-Time</h4>
                    <p className="text-zinc-400">
                      Millisecond updates for scores and live events
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Horizontally Scalable</h4>
                    <p className="text-zinc-400">
                      Handle thousands of concurrent viewers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Complete Transparency</h4>
                    <p className="text-zinc-400">
                      Open-source code you can trust and verify
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-linear-to-r from-orange-500 to-red-600 opacity-75 blur-2xl"></div>
                <div className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-8">
                  <h3 className="mb-4 text-2xl font-bold">Tech Stack</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Next.js 14 with App Router
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      React 19 & TypeScript
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Tailwind CSS 4
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      Redux Toolkit
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                      Socket.io Client
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      HLS.js / Video.js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-linear-to-r from-orange-500/10 to-red-600/10 p-12 text-center">
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
                Join the revolution in sports technology. Start running your
                tournaments with real-time updates, live streaming, and player
                auctions today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="w-full rounded-lg bg-linear-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-orange-600 hover:to-red-700 sm:w-auto"
                >
                  Create Free Account
                </Link>
                <a
                  href="https://github.com/rupeshbisen/play1-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg border border-zinc-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-zinc-600 hover:bg-zinc-900 sm:w-auto"
                >
                  Explore Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
