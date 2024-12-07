// middleware.ts
import { NextRequest, NextResponse, userAgent } from "next/server";

function getCookie(request: NextRequest): string | undefined {
  const access_token = request.cookies.get('access_token');
  return access_token?.value
}
export function middleware(request: NextRequest) {
  const { device }: any = userAgent(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  requestHeaders.set('x-device', device.model);
  requestHeaders.set('x-device-vendor', device.vendor);
  requestHeaders.set(
    'x-search-params',
    request.nextUrl.searchParams.toString(),
  );


  // Redirect if there is no locale

  const accessToken = getCookie(request);

  // // If the user is authenticated, continue as normal
  // if (!accessToken && !request.url.includes('/login')) {
  //   return NextResponse.redirect(new URL('/login', request.url), { headers: requestHeaders })

  // }
  return NextResponse.next({ headers: requestHeaders })

  // Redirect to login page if not authenticated
}
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|images/logo.svg).*)',],
};
