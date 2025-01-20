'use client'

import dynamic from 'next/dynamic'
import { type MDEditorProps } from '@uiw/react-md-editor'
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
} from '@/components/editor/commands'
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

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
  ssr: false,
})

export default function Editor({ ...props }) {
  return <MDEditor commands={commandsList} extraCommands={[]} preview={'edit'} {...props} />
}
