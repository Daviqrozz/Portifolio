import { useState } from "react"
import Button from "../ui/DefaultButton"
import { HashLink } from "react-router-hash-link"
import { X, Menu } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed bg-black top-0 left-0 w-full z-50">

            <div className="mx-auto max-w-6xl px-3 py-2 md:px-6 md:py-3 flex items-center justify-between">
                <span className="text-white font-extrabold text-lg">
                    <HashLink smooth to='/'><span className="hover:text-[#f9004d] transition-all">Davi QueirozDev</span></HashLink>
                </span>

                <div className="block md:hidden">
                    <Button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="py-1.5 px-3 flex items-center gap-2 md:py-2 md:px-4"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        <span className="font-bold">MENU</span>
                    </Button>
                </div>


                <nav className="hidden md:flex text-white gap-8 font-bold">
                    <HashLink smooth to="/#presentacaoSection" className="hover:text-[#f9004d] transition-colors">Sobre mim</HashLink>
                    <HashLink smooth to="/#projetosSection" className="hover:text-[#f9004d] transition-colors">Projetos</HashLink>
                    <HashLink smooth to="/contato" className="hover:text-[#f9004d] transition-colors">Contatos</HashLink>
                </nav>
            </div>


            <nav
                className={`
    md:hidden bg-black border-t border-white/10 px-4
    flex justify-around items-center overflow-hidden
    transition-all duration-200 ease-out
    ${isMenuOpen ? "py-3 max-h-16 opacity-100" : "py-0 max-h-0 opacity-0"}
  `}
            >
                <HashLink
                    smooth
                    to="/#presentacaoSection"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-bold hover:text-[#f9004d] transition-colors"
                >
                    Sobre mim
                </HashLink>

                <HashLink
                    smooth
                    to="/#projetosSection"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-bold hover:text-[#f9004d] transition-colors"
                >
                    Projetos
                </HashLink>

                <HashLink
                    smooth
                    to="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-bold hover:text-[#f9004d] transition-colors"
                >
                    Contatos
                </HashLink>
            </nav>
        </header>
    )
}
