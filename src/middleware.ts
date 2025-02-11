import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('yeob_token')?.value
  const callbackUrl = request.nextUrl.pathname + request.nextUrl.search

  if (!token) {
    return NextResponse.redirect(new URL(`/login?cb=${callbackUrl}`, request.url))
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    await jwtVerify(token, secret)

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL(`/login?cb=${error}`, request.url))
  }
}

export const config = {
  matcher: '/write:path*',
}
