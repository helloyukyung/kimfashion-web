'use server'
// import createSupabaseServerClient from '@/lib/supabase/server'

export interface Auth {
  email: string
  password: string
}
export async function postAuth(data: Auth) {
  //   const supabase = await createSupabaseServerClient()
  //   const res = supabase.auth.signUp(data)
}

export async function postRegister() {}
