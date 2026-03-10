import type { Project } from '../../types/Project'
import { projects } from '../../data/projects'


export default function Project() {

    function truncadeText(text: string, maxLength: number) {
        if (text.length <= maxLength ) return text
        return text.slice(0,maxLength).trimEnd() + '...'
    }

    return (
        <>
            <section id='projetosSection' className="bg-[#141414] px-6 py-4">
                <div className='text-white text-center'><h2 className='text-4xl font-semibold mx-0 my-0'>Projetos!</h2></div>
                <div className="max-w-6xl mx-auto mt-6 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {projects.map((project =>

                            <a key={project.id} href={`projetos/${project.id}`}>

                                <article className="bg-black rounded-md overflow-hidden flex flex-col 
                                shadow-md shadow-black/40 hover:shadow-xl hover:shadow-white/20
                                hover:border hover:border-white/30
                                transition-all duration-300-[#000000]">

                                    <img src={project.img} className="h-auto w-full object-cover" alt={project.title} />

                                    <div className="p-6 flex flex-col gap-4 flex-1">
                                        <span className=" inline-block bg-[#f9004d] text-xs font-bold text-white px-4 py-1  self-start">
                                            {project.type}
                                        </span>

                                        <h3 className="text-2xl font-extrabold text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-white">
                                            {truncadeText(project.description ,127)}
                                        </p>
                                    </div>
                                </article></a>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}