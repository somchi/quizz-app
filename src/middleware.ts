import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_KEYS } from './app/lib/constants';

export const config = {
  matcher: ['/:quizId/participant'],
};

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(COOKIE_KEYS.AccessToken);
  const token = req.cookies.get(COOKIE_KEYS.Token);
  if (accessToken?.value && token?.value) {
    return NextResponse.next();
  }

  const signinUrl = new URL('/participant', req.url);
  return NextResponse.redirect(signinUrl);
}
