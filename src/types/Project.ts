export type Project = {
  id: string
  title: string
  slug: string
  description?: string
  thumbnail_url?: string
  live_url?: string
  github_url?: string
  tech_stack: string[]
  tags: string[]
  featured: boolean
  status: 'published' | 'draft' | 'archived'
  order_index: number
  created_at: string
  updated_at: string
}
