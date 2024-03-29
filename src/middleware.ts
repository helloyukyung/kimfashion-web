import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextRequest, NextResponse} from 'next/server'
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({req, res})
  const {
    data: {session}
  } = await supabase.auth.getSession()
  const {pathname} = req.nextUrl

  if (!session && pathname !== '/admin/sign-in') {
    return NextResponse.redirect(new URL('/admin/sign-in', req.url))
  }

  return res
}

export const config = {
  matcher: '/admin/:path*'
}
