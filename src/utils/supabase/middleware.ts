import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Memeriksa status login user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Jika user belum login dan mencoba mengakses rute admin (kecuali halaman login admin)
  if (
    !user &&
    request.nextUrl.pathname.startsWith('/management') &&
    !request.nextUrl.pathname.startsWith('/management/login')
  ) {
    // Redirect ke halaman login
    const url = request.nextUrl.clone()
    url.pathname = '/management/login'
    return NextResponse.redirect(url)
  }

  // Jika user sudah login dan mencoba mengakses halaman login admin, redirect ke dashboard
  if (
    user &&
    request.nextUrl.pathname.startsWith('/management/login')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/management'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
