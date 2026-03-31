import { techIcons } from "../../data/techIcons"

import { skills } from "../../data/skills"


export default function Skills() {
    return (
        <section id="skillsSection" className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-white space-y-10">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        Minhas <span className="text-[#f9004d]">Habilidades</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
                        Tecnologias que utilizo para construir aplicações web completas,
                        do front ao banco de dados.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.label}
                            className="bg-[#131313] border border-white/5 rounded-2xl px-5 py-4 shadow-md space-y-3"
                        >
                            <h3 className="font-semibold uppercase text-white mb-1">
                                {skill.label}
                            </h3>

                            <p className="text-xs md:text-sm text-white/60">
                                {skill.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {skill.skills.map((tech) => {
                                    const Icon = techIcons[tech]
                                    return (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-white/5"
                                        >
                                            {Icon ? (
                                                <Icon className="w-4 h-4 text-[#f9004d]" />
                                            ) : (
                                                <span className="w-4 h-4" />
                                            )}
                                            <span className="text-xs md:text-sm text-white/80">
                                                {tech}
                                            </span>
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}