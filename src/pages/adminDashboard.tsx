import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { signOut } from '../services/auth'
import { useAuth } from '../hooks/useAuth'
import type { Project } from '../types/Project'
import { Pencil, Trash2, ChevronUp, ChevronDown, Plus } from 'lucide-react'

const EMPTY_FORM: Omit<Project, 'id' | 'created_at' | 'updated_at'> = {
  title: '',
  slug: '',
  description: '',
  thumbnail_url: '',
  live_url: '',
  github_url: '',
  tech_stack: [],
  tags: [],
  featured: false,
  status: 'published',
  order_index: 0,
}

export default function AdminDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(true) // ← controla colapso

  async function fetchProjects() {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('order_index')
    setProjects(data ?? [])
    setLoading(false)
  }

  useEffect(() => { fetchProjects() }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    const payload = {
      ...form,
      tech_stack: typeof form.tech_stack === 'string'
        ? (form.tech_stack as string).split(',').map(s => s.trim()).filter(Boolean)
        : form.tech_stack,
      tags: typeof form.tags === 'string'
        ? (form.tags as string).split(',').map(s => s.trim()).filter(Boolean)
        : form.tags,
      updated_at: new Date().toISOString(),
    }

    if (editingId) {
      const { error } = await supabase.from('projects').update(payload).eq('id', editingId)
      setMessage(error ? `Erro: ${error.message}` : 'Projeto atualizado!')
    } else {
      const { error } = await supabase.from('projects').insert(payload)
      setMessage(error ? `Erro: ${error.message}` : 'Projeto criado!')
    }

    setForm(EMPTY_FORM)
    setEditingId(null)
    setSaving(false)
    fetchProjects()
  }

  function handleEdit(project: Project) {
    setEditingId(project.id)
    setFormOpen(true)
    setForm({
      title: project.title,
      slug: project.slug,
      description: project.description ?? '',
      thumbnail_url: project.thumbnail_url ?? '',
      live_url: project.live_url ?? '',
      github_url: project.github_url ?? '',
      tech_stack: project.tech_stack,
      tags: project.tags,
      featured: project.featured,
      status: project.status,
      order_index: project.order_index,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleDelete(id: string) {
    if (!confirm('Tem certeza que quer deletar esse projeto?')) return
    const { error } = await supabase.from('projects').delete().eq('id', id)
    setMessage(error ? `Erro ao deletar: ${error.message}` : 'Projeto deletado.')
    fetchProjects()
  }

  async function handleLogout() {
    await signOut()
    navigate('/admin/login', { replace: true })
  }

  return (
    <main className="my-15 min-h-screen bg-[#0d0d0d] text-white">
      <div className="flex h-screen overflow-hidden">

        {/* ── SIDEBAR ─────────────────────────────────── */}
        <aside className="w-72 bg-[#141414] border-r border-white/5 flex flex-col overflow-hidden">
          {/* Header sidebar */}
          <div className="px-5 py-5 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">Projetos</h2>
              <p className="text-white/40 text-xs mt-0.5">{projects.length} cadastrados</p>
            </div>
            <button
              onClick={() => {
                setForm(EMPTY_FORM)
                setEditingId(null)
                setFormOpen(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              title="Novo projeto"
              className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Lista */}
          <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
            {loading ? (
              <p className="text-white/40 text-xs px-2 pt-2">Carregando...</p>
            ) : projects.length === 0 ? (
              <p className="text-white/40 text-xs px-2 pt-2">Nenhum projeto.</p>
            ) : (
              projects.map(project => (
                <div
                  key={project.id}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg group transition
                    ${editingId === project.id ? 'bg-[#f9004d]/10 border border-[#f9004d]/30' : 'hover:bg-white/5'}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{project.title}</p>
                    <p className="text-white/30 text-xs truncate">/{project.slug}</p>
                  </div>
                  <div className="flex gap-1 ml-2 shrink-0">
                    <button
                      onClick={() => handleEdit(project)}
                      title="Editar"
                      className="p-1.5 rounded hover:bg-white/10 text-white/50 hover:text-white transition"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      title="Deletar"
                      className="p-1.5 rounded hover:bg-red-600 text-white/50 hover:text-white transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer sidebar */}
          <div className="px-4 py-4 border-t border-white/5 space-y-2">
            <p className="text-white/30 text-xs truncate">{user?.email}</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-sm transition"
            >
              Sair
            </button>
          </div>
        </aside>

        {/* ── CONTEÚDO PRINCIPAL ──────────────────────── */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">

          {/* Feedback */}
          {message && (
            <p className={`text-sm px-4 py-2 rounded-lg ${message.startsWith('Erro')
              ? 'bg-red-900/40 text-red-300'
              : 'bg-green-900/40 text-green-300'}`}>
              {message}
            </p>
          )}

          {/* Formulário com toggle */}
          <section className="bg-[#141414] rounded-xl overflow-hidden">
            {/* Cabeçalho clicável */}
            <button
              onClick={() => setFormOpen(o => !o)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition"
            >
              <h2 className="text-lg font-semibold">
                {editingId ? 'Editar projeto' : 'Novo projeto'}
              </h2>
              {formOpen
                ? <ChevronUp className="w-5 h-5 text-white/50" />
                : <ChevronDown className="w-5 h-5 text-white/50" />
              }
            </button>

            {/* Corpo colapsável */}
            {formOpen && (
              <form onSubmit={handleSubmit} className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Título *</label>
                  <input required className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Slug *</label>
                  <input required className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-sm text-white/70">Descrição</label>
                  <textarea rows={3} className="bg-black border border-white/10 rounded px-3 py-2 text-sm resize-none"
                    value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-sm text-white/70">Thumbnail URL</label>
                  <input className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.thumbnail_url} onChange={e => setForm(f => ({ ...f, thumbnail_url: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">GitHub URL</label>
                  <input className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.github_url} onChange={e => setForm(f => ({ ...f, github_url: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Live URL</label>
                  <input className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.live_url} onChange={e => setForm(f => ({ ...f, live_url: e.target.value }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Tech Stack (vírgula)</label>
                  <input className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={Array.isArray(form.tech_stack) ? form.tech_stack.join(', ') : form.tech_stack}
                    onChange={e => setForm(f => ({ ...f, tech_stack: e.target.value as unknown as string[] }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Tags (vírgula)</label>
                  <input className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={Array.isArray(form.tags) ? form.tags.join(', ') : form.tags}
                    onChange={e => setForm(f => ({ ...f, tags: e.target.value as unknown as string[] }))} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Status</label>
                  <select className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Project['status'] }))}>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">Ordem</label>
                  <input type="number" className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    value={form.order_index} onChange={e => setForm(f => ({ ...f, order_index: Number(e.target.value) }))} />
                </div>

                <div className="flex items-center gap-2 sm:col-span-2">
                  <input type="checkbox" id="featured" checked={form.featured}
                    onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} />
                  <label htmlFor="featured" className="text-sm text-white/70">Projeto em destaque</label>
                </div>

                <div className="flex gap-3 sm:col-span-2">
                  <button type="submit" disabled={saving}
                    className="px-6 py-2 bg-[#f9004d] rounded-lg text-sm font-medium hover:bg-[#f9004d]/90 transition">
                    {saving ? 'Salvando...' : editingId ? 'Salvar alterações' : 'Criar projeto'}
                  </button>
                  {editingId && (
                    <button type="button"
                      onClick={() => { setForm(EMPTY_FORM); setEditingId(null) }}
                      className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm hover:bg-white/10 transition">
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}