import {SupabaseClient, createClientComponentClient} from '@supabase/auth-helpers-nextjs'

export const supabase: SupabaseClient = createClientComponentClient()
