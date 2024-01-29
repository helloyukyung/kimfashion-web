import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextRequest, NextResponse} from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({req, res})
  const {
    data: {session}
  } = await supabase.auth.getSession()

  console.log('middleware work')
  // if (!session) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/admin/sign-in'
  //   console.log('로그인 페이지로 이동해랏')
  //   return NextResponse.redirect(redirectUrl)
  // }
  console.log(req.url)
  if (!session) {
    console.log('sessin null', session)
    return NextResponse.rewrite(new URL('/admin/sign-in', req.url))
  }

  return res
}

export const config = {
  matcher: '/admin/:path*'
}
