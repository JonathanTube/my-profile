import { ReactNode } from "react"

export type SkillCategory = {
  category: string
  items: SkillItem[]
}

export type SkillItem = {
  icon: ReactNode
  name: string
  stars: number
  halfStars: number
}
