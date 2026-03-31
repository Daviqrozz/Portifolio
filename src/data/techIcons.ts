import {
  SiReact, SiTypescript, SiLaravel, SiMysql,
  SiPostgresql, SiDocker, SiDjango, SiBootstrap,
  SiGooglegemini, SiPhp,
  SiTailwindcss,
  SiPython,
  SiSqlite,
  SiNodedotjs,
  SiJavascript,
  SiClaude,
  SiN8N,
  SiGithubactions,
  SiHtml5,
  SiCss,
  SiSqlalchemy,
  SiFastapi
} from 'react-icons/si'
import type React from 'react'

export const techIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Laravel': SiLaravel,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Docker': SiDocker,
  'Typescript':SiTypescript,
  'Django': SiDjango,
  'Bootstrap': SiBootstrap,
  'Gemini': SiGooglegemini,
  'PHP': SiPhp,
  'Tailwind':SiTailwindcss,
  'Python':SiPython,
  'Sqlite':SiSqlite,
  'Js':SiJavascript,
  'Node':SiNodedotjs,
  'Claude':SiClaude,
  'n8n':SiN8N,
  'GithubActions':SiGithubactions,
  'HTML':SiHtml5,
  'CSS':SiCss,
  'ALCHSQL':SiSqlalchemy,
  "FastApi":SiFastapi
}