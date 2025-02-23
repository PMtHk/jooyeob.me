import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('yeob_token')?.value
  const callbackUrl = request.nextUrl.pathname + request.nextUrl.search

  if (!token) {
    const url = new URL('/login', request.url)
    url.searchParams.set('cb', callbackUrl)
    return NextResponse.redirect(url)
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    await jwtVerify(token, secret)

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL(`/login`, request.url))
  }
}

export const config = {
  matcher: '/write:path*',
}
