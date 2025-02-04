import { getTags } from '@/shared/libs/posts/actions'

export async function Tags() {
  const tags = await getTags()

  return (
    <section>
      <span className='text-default-lg text-alt-600'>태그</span>
      <div className='mt-3 flex flex-wrap'>
        {tags.map((tag) => (
          <span
            key={tag.id}
            className='mb-2 cursor-pointer rounded-full px-2 py-1 text-body-md text-alt-700 bg-alt-100 mr-1.5 hover:bg-alt-200 dark:text-alt-300 dark:bg-alt-800 dark:hover:bg-alt-900'
          >
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  )
}
