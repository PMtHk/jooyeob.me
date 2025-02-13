import { MarkdownViewer } from '@/components/MarkdownViewer'
import { useWrite } from '@/lib/hooks/useWrite'

export default function Preview() {
  const { content } = useWrite()

  return (
    <div className='hidden h-screen w-full overflow-auto border-l px-4 py-12 lg:block'>
      <MarkdownViewer markdown={content} />
    </div>
  )
}
