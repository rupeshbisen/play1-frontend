import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="mb-4 inline-block bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
              Play1
            </span>
            <p className="mb-4 max-w-md text-zinc-400">
              Open-source, real-time sports platform for live match scoring,
              streaming, and player auctions. Built for transparency and
              scalability.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/rupeshbisen/play1-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="Visit Play1 on GitHub"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable={false}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link
                  href="https://github.com/rupeshbisen/play1-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rupeshbisen/play1-frontend/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Report Bug
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rupeshbisen/play1-frontend/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Play1. Open-source under MIT
            License.
          </p>
        </div>
      </div>
    </footer>
  );
}
