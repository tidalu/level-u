// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  const restrictedPages = ['/schedule'];

  

  if (restrictedPages.includes(pathname) ) {
    return NextResponse.redirect(new URL('/_not-found', request.url));
  }

  return NextResponse.next(); 
}


export const config = {
  matcher: ['/schedule'],
};
