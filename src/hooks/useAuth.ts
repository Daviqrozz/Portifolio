import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type AuthUser = {
  id: string
  email: string | null
} | null

export function useAuth() {
  const [user, setUser] = useState<AuthUser>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(
        data.user
          ? { id: data.user.id, email: data.user.email }
          : null
      )
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(
        session?.user
          ? { id: session.user.id, email: session.user.email }
          : null
      )
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { user, loading }
}