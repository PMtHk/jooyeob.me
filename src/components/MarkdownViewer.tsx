import { cn } from '@/lib/util/cn'
import { markdownToHTMLSync } from '@/lib/util/markdownToHTML'

interface MarkdownViewerProps {
  markdown?: string
  html?: string
}

const MarkdownClasses = {
  default: 'prose',
  defaultDark: 'dark:prose-invert',
  code: 'prose-code:rounded-md prose-code:px-1 prose-code:before:content-none prose-code:after:content-none prose-code:bg-alt-300 prose-code:py-0.5 prose',
  codeDark: 'dark:prose-code:bg-alt-700',
  blockquote:
    'prose-blockquote:not-italic prose prose-blockquote:border-primary-200 prose-blockquote:pr-1 prose-blockquote:rounded-sm prose-blockquote:bg-alt-100',
  blockquoteDark: 'dark:prose-blockquote:bg-alt-800',
  a: 'prose-a:text-primary',
  customs: '[&>pre>code]:bg-transparent',
}

export function MarkdownViewer({ markdown, html }: MarkdownViewerProps) {
  const __html = html ?? markdownToHTMLSync(markdown ?? '')

  return (
    <div
      className={cn(Object.values(MarkdownClasses))}
      dangerouslySetInnerHTML={{ __html: __html }}
    />
  )
}
