import { useParams, Link } from "react-router-dom"
import { projects } from "../../data/projects"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { HashLink } from "react-router-hash-link"

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>()
    const project = projects.find(p => p.id === Number(id))

    if (!project) {
        return (
            <main className="min-h-screen bg-black pt-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-2xl text-white/70 text-center">
                        Projeto não encontrado
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-black pt-24 px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/#projectsSection"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <HashLink smooth to="/#projetosSection">
                        Voltar aos projetos
                    </HashLink>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="bg-[#0f0f0f] rounded-xl p-4">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 md:h-80 rounded-lg"
                            />
                        </div>

                        <div className="mt-2">
                            <h3 className="text-lg font-semibold text-white mb-3">
                                Tecnologias utilizadas
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.techs.map(tech => (
                                    <span
                                        key={tech.name}
                                        className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] rounded-full"
                                    >
                                        <tech.Icon className="w-4 h-4 text-[#f9004d]" />
                                        <span className="text-sm text-white/80">{tech.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita: texto + botões */}
                    <div className="order-1 lg:order-2">
                        <div className="sticky top-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1 bg-[#f9004d]/20 text-[#f9004d] text-sm font-medium rounded-full">
                                    {project.type}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                {project.title}
                            </h1>

                            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                                {project.description}
                            </p>

                            {/* Botões de ação */}
                            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                {/* GitHub */}
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#1a1a1a] hover:bg-[#f9004d] text-white font-medium rounded-lg transition-all group"
                                >
                                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-white">
                                        <Github className="w-5 h-5 text-white group-hover:text-black" />
                                    </div>
                                    <span>Ver código no GitHub</span>
                                </a>

                                {/* Aplicação / Em desenvolvimento */}
                                {project.appUrl ? (
                                    <a
                                        href={project.appUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#f9004d] hover:bg-[#f9004d]/90 text-white font-medium rounded-lg transition-all group"
                                    >
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-white">
                                            <Globe className="w-5 h-5 text-white group-hover:text-black" />
                                        </div>
                                        <span>Acessar Aplicação</span>
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#1a1a1a]/60 text-white/80 font-medium rounded-lg"
                                    >
                                        <div className="w-10 h-10 bg-black/70 rounded-lg flex items-center justify-center">
                                            <Globe className="w-5 h-5 text-white/70" />
                                        </div>
                                        <span>Em desenvolvimento!</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
