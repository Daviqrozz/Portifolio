// components/ContactForm.tsx
import { useState } from "react"
import Button from "../ui/DefaultButton"

type FormData = {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enviando:", formData)
   
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#050505] rounded-xl p-8 max-w-md w-full space-y-6 mb-10"
    >
      
      <div>
        <label htmlFor="nome" className="block text-white/80 font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          placeholder="Seu nome"
        />
      </div>

   
      <div>
        <label htmlFor="email" className="block text-white/80 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          placeholder="seu@email.com"
        />
      </div>

    
      <div>
        <label htmlFor="telefone" className="block text-white/80 font-medium mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          placeholder="(85) 99999-9999"
        />
      </div>

     
      <div>
        <label htmlFor="mensagem" className="block text-white/80 font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          required
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 resize-vertical focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          placeholder="Escreva aqui sua mensagem..."
        />
      </div>

   
      <div>
        <label htmlFor="assunto" className="block text-white/80 font-medium mb-2">
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          <option value="freelance">Freelance / Trabalho</option>
          <option value="projeto">Projeto conjunto</option>
          <option value="duvida">Dúvida / Suporte</option>
          <option value="outros">Outros</option>
        </select>
      </div>

   
      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </form>
  )
}
