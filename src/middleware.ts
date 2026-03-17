import { NextRequest, NextResponse } from 'next/server';

const DASHBOARD_PREFIX = '/dashboard';
const LOGIN_PATH = '/login';

/**
 * Auth-token cookie name.
 *
 * TODO: Replace this placeholder with real session-token validation once
 * backend authentication is integrated (e.g. verify a JWT signature or
 * exchange the cookie value with an auth server). Checking mere cookie
 * presence is intentional here as a routing guard during early development;
 * do NOT rely on this alone in production.
 */
const AUTH_COOKIE = 'auth-token';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(DASHBOARD_PREFIX)) {
    // TODO: Replace cookie-presence check with real token validation once
    // the authentication backend is available.
    const isAuthenticated = request.cookies.has(AUTH_COOKIE);

    if (!isAuthenticated) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
