import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

export async function markdownToHTML(markdown: string): Promise<string> {
  const result = await remark().use(gfm).use(html).process(markdown)
  return result.toString()
}

export function markdownToHTMLSync(markdown: string): string {
  return remark().use(gfm).use(html).processSync(markdown).toString()
}
