import { MarkdownViewer } from '@/shared/components/MarkdownViewer'
import { useWrite } from '@/features/write/hooks/useWrite'

export function Preview() {
  const { content } = useWrite()

  return (
    <div className='hidden h-screen w-full overflow-auto border-l px-4 py-12 lg:block'>
      <MarkdownViewer markdown={content} />
    </div>
  )
}
