import { NextRequest, NextResponse } from 'next/server';
import { getUserNumber } from './utils/getUserNumber';
import type { UserData } from './domains/auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/mypage')) {
    const userInfoCookie = request.cookies.get('user_info');

    if (!userInfoCookie?.value) {
      const url = new URL('/', request.url);
      url.searchParams.set('showLogin', 'true');
      return NextResponse.redirect(url);
    }

    try {
      const user: UserData = JSON.parse(userInfoCookie.value);
      const userNumber = getUserNumber(user);

      if (!userNumber) {
        const url = new URL('/', request.url);
        url.searchParams.set('showLogin', 'true');
        return NextResponse.redirect(url);
      }

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-number', userNumber.toString());

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      const url = new URL('/', request.url);
      url.searchParams.set('showLogin', 'true');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/mypage/:path*'],
};
