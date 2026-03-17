'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BrandLogo from '@/src/components/BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo
          href="/"
          imageClassName="h-12 w-auto"
          showText
          textClassName="text-2xl font-black tracking-tight"
          priority
        />

        <nav
          className="hidden items-center space-x-8 md:flex"
          aria-label="Primary"
        >
          <Link
            href="/tournaments"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-vibrant-purple"
          >
            Tournaments
          </Link>
          <Link
            href="/#leaderboard"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-vibrant-purple"
          >
            Leaderboard
          </Link>
          <Link
            href="/#results"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-vibrant-purple"
          >
            Matches
          </Link>
          <Link
            href="/#community"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-vibrant-purple"
          >
            Community
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-vibrant-purple"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-linear-to-r from-electric-blue via-vibrant-purple to-deep-indigo px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-vibrant-purple/20 transition-all hover:brightness-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
