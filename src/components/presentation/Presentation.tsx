import { HashLink } from "react-router-hash-link"
import Button from "../ui/DefaultButton"

export default function Presentation() {
    return (
        <>
            <section id="presentacaoSection" className="background-home min-h-screen px-6 sm:px-10">
                <div className="min-h-screen flex items-center">
                    <div className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
                        <p className="text-4xl sm:text-4xl font-extrabold">Olá, sou Davi</p>
                        <h1 className="text-4xl sm:text-4xl font-extrabold leading-tight">
                            <span className="text-[#f9004d]">Desenvolvedor Fullstack</span>
                        </h1>
                        <p className="text-lg sm:text-1xl font-sans font-semibold">Sou um entusiasta de tecnologia viciado em aprender coisas novas. Confira mais sobre mim e alguns de meus projetos logo abaixo!</p>
                        <div className="text-2xl sm:text-3x1 mt-5 ">
                           <HashLink smooth to="/contato"> <Button className="h-14 px-8 text-sm flex items-center justify-center"><span className="">Fale comigo</span></Button></HashLink>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}