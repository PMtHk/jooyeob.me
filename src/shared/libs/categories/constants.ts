export type ClientCategory = {
  id: number
  name: string
  slug: string
}

export const categories: Array<ClientCategory> = [
  {
    id: 1,
    name: '개발',
    slug: 'dev',
  },
  {
    id: 2,
    name: '학습',
    slug: 'study',
  },
  {
    id: 3,
    name: '회고',
    slug: 'review',
  },
] as const
