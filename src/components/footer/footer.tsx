export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/90">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Davi QueirozDev</span>.  
          Todos os direitos reservados.
        </p>

        <div className="flex flex-wrap gap-4 text-xs md:text-sm">
          <span className="text-white/40">
            Construído com{" "}
            <span className="text-[#f9004d] font-semibold">React</span> e{" "}
            <span className="text-[#f9004d] font-semibold">TypeScript</span>.
          </span>
          <span className="text-white/40">
            Hospedado na <span className="font-medium">Netlify/Supabase</span>.
          </span>
        </div>
      </div>
    </footer>
  )
}