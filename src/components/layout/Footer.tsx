import Link from 'next/link';
import BrandLogo from '@/src/components/BrandLogo';

export default function Footer() {
  return (
    <footer
      id="community"
      className="border-t border-slate-200 bg-slate-50 px-4 py-14 text-slate-600 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <BrandLogo
              className="mb-4"
              imageClassName="h-12 w-auto"
              showText
              textClassName="text-2xl font-black tracking-tight"
            />
            <p className="mb-6 max-w-md text-base text-slate-500">
              Revolutionizing local sports through technology and real-time data
              tracking. Build your legacy, one match at a time.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-slate-900">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/tournaments" className="hover:text-vibrant-purple">
                  Find Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/#leaderboard"
                  className="hover:text-vibrant-purple"
                >
                  Player Ranking
                </Link>
              </li>
              <li>
                <Link href="/#results" className="hover:text-vibrant-purple">
                  Live Scoreboards
                </Link>
              </li>
              <li>
                <Link href="/#community" className="hover:text-vibrant-purple">
                  For Organizers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-slate-900">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="#" className="hover:text-vibrant-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-vibrant-purple">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-vibrant-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-vibrant-purple">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-slate-900">Follow Us</h4>
            <div className="flex space-x-3">
              <Link
                href="https://github.com/rupeshbisen/play1-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-vibrant-purple"
                aria-label="Follow Play1 on Facebook"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.4l.6-3H13V9c0-.6.4-1 1-1z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/rupeshbisen/play1-frontend/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-vibrant-purple"
                aria-label="Follow Play1 on Twitter"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 6.2c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.9-2.6 1.1A4 4 0 0012 8.4c0 .3 0 .6.1.9-3.3-.2-6.2-1.8-8.2-4.2-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.9 3.4-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8A8 8 0 013 19.4a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.2 1.9-2"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-vibrant-purple"
                aria-label="Follow Play1 on Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="4" y="4" width="16" height="16" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle
                    cx="17"
                    cy="7"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} play1 sports tech. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-vibrant-purple">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-vibrant-purple">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
