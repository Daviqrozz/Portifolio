import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/auth'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await signIn(email, password)

    if (error) {
      setError('Credenciais inválidas')
    } else {
      navigate('/admin', { replace: true })
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#141414] p-6 rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-white text-center">Login admin</h1>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div className="space-y-2">
          <label className="block text-sm text-white/80">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-black text-white border border-white/10"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-white/80">Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-black text-white border border-white/10"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded bg-[#f9004d] text-white font-medium hover:bg-[#f9004d]/90 transition"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}