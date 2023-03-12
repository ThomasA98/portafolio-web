export type Level = 1 | 2 | 3 | 4 | 5 | null

export interface Technology {
    name: string
    level: Level
    href: string
}

export interface Language {
    name: string
    level: Level
    href: string | null
    technologies: Array<Technology>
}