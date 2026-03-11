import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login | Play1 - Real-Time Sports Platform',
  description: 'Access your Play1 account.',
};

const backdropStyle = {
  background:
    'radial-gradient(1200px at 20% 15%, rgba(56, 189, 248, 0.16), transparent 50%), radial-gradient(900px at 80% 0%, rgba(251, 191, 36, 0.12), transparent 45%), linear-gradient(120deg, rgba(15, 23, 42, 0.9), rgba(8, 47, 73, 0.75))',
};

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-80" style={backdropStyle} />
        <div className="absolute left-16 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-12 bottom-6 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-x-8 inset-y-12 rounded-3xl border border-white/5 bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <section className="flex-1 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-50/70 ring-1 ring-white/10">
            <span>Welcome back</span>
            <span
              className="h-1 w-1 rounded-full bg-amber-300/80"
              aria-hidden="true"
            />
            <span>Secure access</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Sign in to Play1
            </h1>
            <p className="max-w-2xl text-base text-slate-200/80 sm:text-lg">
              Join your team, review arena updates, and keep your sessions in
              sync. Everything you need sits behind a secure, focused sign-in.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-100/80 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
              <div
                className="mb-2 h-2 w-12 rounded-full bg-cyan-300/70"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-white">
                Session continuity
              </h3>
              <p className="mt-1 text-sm text-slate-200/75">
                Resume where you left off with synced layouts and saved
                preferences on every device.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
              <div
                className="mb-2 h-2 w-12 rounded-full bg-amber-300/70"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-white">
                Strong security
              </h3>
              <p className="mt-1 text-sm text-slate-200/75">
                Modern encryption, device checks, and session alerts help keep
                your arena secure.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full max-w-lg">
          <div
            className="absolute -inset-x-4 -top-8 h-24 rounded-3xl bg-cyan-400/20 blur-3xl"
            aria-hidden="true"
          />
          <form className="relative flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-900/30 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-200/60">
                  Sign in
                </p>
                <h2 className="text-xl font-semibold text-white">
                  Welcome back
                </h2>
              </div>
              <Link
                href="/"
                className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                Back to site
              </Link>
            </div>

            <label
              htmlFor="email"
              className="space-y-2 text-sm font-medium text-slate-100/90"
            >
              <span>Email</span>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
              />
            </label>

            <label
              htmlFor="password"
              className="space-y-2 text-sm font-medium text-slate-100/90"
            >
              <span>Password</span>
              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="********"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
              />
            </label>

            <div className="flex items-center justify-between text-sm text-slate-200/80">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-white/30 bg-white/10 text-cyan-300 focus:ring-0"
                />
                <span>Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Forgot access?
              </Link>
            </div>

            <button
              type="submit"
              disabled
              className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 to-amber-300 px-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              title="Backend integration pending"
            >
              Continue
            </button>

            <p className="text-center text-sm text-slate-200/80">
              Need an account?
              <span className="mx-1">|</span>
              <Link
                href="/register"
                className="font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Sign up
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
