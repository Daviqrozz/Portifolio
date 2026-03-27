import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Project } from '../types/Project'

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .order('order_index')

      if (error) setError(error.message)
      else setProjects(data ?? [])

      setLoading(false)
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}
