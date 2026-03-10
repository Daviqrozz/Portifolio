import type { Project } from "../types/Project"
import { SiReact, SiTypescript, SiLaravel, SiMysql, SiPostgresql, SiDocker, SiDjango, SiBootstrap, SiGooglegemini, SiPhp } from "react-icons/si"

import thumbRevenda from '../images/revendaEstoca_thumb.png'
import thumbEstocar from '../images/estocar_thumb.png'
import thumbBitGraph from '../images/BitGraph_thumb.png'
import estocarAgent_thumb from '../images/estocarAgent_thumb.png'

export const projects: Project[] = [
    {
        id: 1,
        title: 'RevendaEstoque',
        img: thumbRevenda,
        type: 'FullStack',
        codeUrl: 'https://github.com/Daviqrozz/Revenda_estoque',
        appUrl: 'https://daviqrozz.pythonanywhere.com/',
        description: 'Sistema de Gerenciamento de Estoque (MVP) construído com Django 5, MySQL e Docker Compose. Focado em agilidade e CRUD via Django Admin.',
        techs: [
            { name: "Django", Icon: SiDjango },
            { name: "Docker", Icon: SiDocker },
            { name: "MySql", Icon: SiMysql },
            { name: "Bootstrap", Icon: SiBootstrap },
        ],
    },
    {
        id: 2,
        title: 'Estocar',
        img: thumbEstocar,
        type: 'FullStack',
        codeUrl: 'https://github.com/Daviqrozz/Estocar-Front-Laravel',
        description: 'Sistema ERP de gerenciamento de veiculos, servindo para lojas de automoveis. Sistema conta com cadastro de usuarios,clientes,veiculos,serviços alem de ter o controle de serviço atraves da criação de ordem de serviços.Tudo isso com uma interface amigavel e altamente intuitiva',
        techs: [
            { name: "Php", Icon: SiPhp },
            { name: "Laravel", Icon: SiLaravel },
            { name: "Docker", Icon: SiDocker },
            { name: "Postgreesql", Icon: SiPostgresql },
            { name: "Bootstrap", Icon: SiBootstrap },
        ],
    },
    {
        id: 3,
        title: 'BitGraph',
        img: thumbBitGraph,
        type: 'SPA',
        codeUrl: 'https://github.com/Daviqrozz/BitGraph',
        description: 'Sistema desenvolvido para mostrar informações sobre valores de criptomodas em tempo real (baseado na API da binance) de forma minimalista para usuarios que não gostam do exagero de informações de plataformas tradicionais',
        techs: [
            { name: "React", Icon: SiReact },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Bootstrap", Icon: SiBootstrap },
            { name: "Docker", Icon: SiDocker },
        ],
    },
    {
        id: 4,
        title: 'EstocarAgent',
        img: estocarAgent_thumb,
        type: 'FullStack',
        codeUrl: 'https://github.com/Daviqrozz/Agent_requester_laravel',
        description: 'Chatweb que integra com modelo de IA inteligente capaz de interpretar,filtrar e realizar requisições para apis externas de acordo com o necessario. (Feito para integrar o projeto Estocar)',
        techs: [
            { name: "Php", Icon: SiPhp },
            { name: "React", Icon: SiReact },
            { name: "TypeScript", Icon: SiTypescript },
            { name: 'Gemini', Icon: SiGooglegemini },
        ],
    }

]
