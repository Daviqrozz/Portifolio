// components/ContactSection.tsx (novo componente lateral)
import { ExternalLink, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react"

const SOCIAL_LINKS = {
  whatsapp: "(85) 98700-4830",
  email: "daviqrozz2@gmail.com",
  github: "https://github.com/DaviQrozz",
  linkedin: "https://www.linkedin.com/in/davi-queiroz-648218231/",
  instagram: "https://instagram.com/daviqrozz",
}

export default function ContactSection() {
  return (
    <aside className="w-full md:w-80 lg:w-96 space-y-6 p-6 bg-[#0f0f0f] rounded-xl border border-[#1a1a1a]">
      <h3 className="text-2xl font-bold text-white mb-6">Contato direto</h3>
      
      
      <div id="contatos" className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all">
        <a target="blank" 
          href={`https://wa.me/558598704430`}
          className="group flex items-center gap-3 flex-1"
        >
          <Phone className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-sm text-white/70">WhatsApp</p>
            <p className="font-medium text-white">{SOCIAL_LINKS.whatsapp}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/50 ml-auto" />
        </a>
      </div>

      
      <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all">
        <a target="blank" 
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="group flex items-center gap-3 flex-1"
        >
          <Mail className="w-5 h-5 text-[#f9004d] group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-sm text-white/70">Email</p>
            <p className="font-medium text-white break-all">{SOCIAL_LINKS.email}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/50 ml-auto" />
        </a>
      </div>

      
      <div>
        <p className="text-white/80 font-medium mb-4">Redes sociais</p>
        <div className="space-y-2">
          <a target="blank" 
            href={SOCIAL_LINKS.github}
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-[#f9004d]">
              <Github className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">GitHub</span>
          </a>

          <a target="blank" 
            href={SOCIAL_LINKS.linkedin}
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">LinkedIn</span>
          </a>

          <a target="blank" 
            href={SOCIAL_LINKS.instagram}
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-gradient from-[#E4405F] to-[#F77737] rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
