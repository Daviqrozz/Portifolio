export type Project = {
    id: number,
    title: string,
    img: string
    type: string,
    codeUrl: string,
    appUrl ?: string,   
    description: string,
    techs: {
        name: string
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    }[]
}