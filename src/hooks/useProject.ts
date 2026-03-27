import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Project } from '../types/Project'

export function useProject(slug: string | undefined) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    async function fetchProject() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) setError(error.message)
      else setProject(data)

      setLoading(false)
    }

    fetchProject()
  }, [slug])

  return { project, loading, error }
}