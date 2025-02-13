'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import type { ClientTags } from '@/lib/types/tag'


interface TagsProps {
  tags: ClientTags
  selectedTags: string[]
}

export function Tags({ tags, selectedTags }: TagsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleTagClick = (tagName: string) => {
    const updatedTags = selectedTags.includes(tagName)
      ? selectedTags.filter((t) => t !== tagName)
      : [...selectedTags, tagName]

    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.delete('tag')

    if (updatedTags.length) {
      updatedTags.forEach((tag) => newSearchParams.append('tag', tag))
    }

    router.push(`${pathname}?${newSearchParams.toString()}`)
  }

  return (
    <section>
      <span className='text-default-lg text-alt-600'>태그</span>
      <div className='mt-3 flex flex-wrap'>
        {tags.map((tag) => {
          if (!tag.name) return null

          const isSelected = selectedTags.includes(tag.name)
          const baseClasses = 'mb-2 cursor-pointer rounded-full px-2 py-1 text-body-md mr-1.5'
          const selectedClasses = 'bg-blue-500 text-white hover:bg-blue-600'
          const unselectedClasses =
            'bg-alt-100 text-alt-700 hover:bg-alt-200 dark:text-alt-300 dark:bg-alt-800 dark:hover:bg-alt-900'

          return (
            <span
              key={tag.id}
              onClick={() => handleTagClick(tag.name!)}
              className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
            >
              {tag.name}
            </span>
          )
        })}
      </div>
    </section>
  )
}
