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
} from '@/features/editor/commands'
import { useWrite } from '@/features/write/hooks/useWrite'
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

  const handleChange = (value: string = '') => {
    setContent(value)
  }

  return (
    <MDEditor
      commands={commandsList}
      extraCommands={[]}
      preview={'edit'}
      value={content}
      onChange={handleChange}
    />
  )
}
