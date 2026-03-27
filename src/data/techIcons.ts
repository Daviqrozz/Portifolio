import {
  SiReact, SiTypescript, SiLaravel, SiMysql,
  SiPostgresql, SiDocker, SiDjango, SiBootstrap,
  SiGooglegemini, SiPhp
} from 'react-icons/si'
import type React from 'react'

export const techIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Laravel': SiLaravel,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Docker': SiDocker,
  'Django': SiDjango,
  'Bootstrap': SiBootstrap,
  'Gemini': SiGooglegemini,
  'PHP': SiPhp,
}