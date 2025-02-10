import MDEditor from '@uiw/react-md-editor'
import { divider } from '@uiw/react-md-editor/commands'
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Strikethrough,
  Quote,
  Link,
  Image,
  CodeBlock,
} from '@/lib/react-md-editor/commands'
import { useWrite } from '@/app/(private)/write/hooks/useWrite'
import './editor.css'

const commandsList = [
  Heading1,
  Heading2,
  Heading3,
  divider,
  Bold,
  Italic,
  Strikethrough,
  divider,
  Quote,
  Link,
  Image,
  CodeBlock,
]

export default function Editor() {
  const { content, setContent } = useWrite()

  const handleChange = (value?: string) => {
    // TODO: 줄바꿈을 관리할 필요가 있다.
    setContent(value || '')
  }

  return (
    <MDEditor
      commands={commandsList}
      extraCommands={[]}
      value={content}
      onChange={handleChange}
      preview='edit'
    />
  )
}
