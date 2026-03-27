import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import type { Session, User } from "@supabase/supabase-js"

type AuthUser =
  | {
      id: string
      email: string | null
    }
  | null

type GetUserResponse = {
  user: User | null
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const { user } = data as GetUserResponse
      setUser(
        user
          ? { id: user.id, email: user.email ?? null }
          : null
      )
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setUser(
          session?.user
            ? { id: session.user.id, email: session.user.email ?? null }
            : null
        )
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { user, loading }
}