import type { ReactElement, ReactNode } from 'react'
import { Editor } from '@/features/editor'
import { TagInputList, Title } from '@/features/write/components'
import { Button } from '@/shared/ui'

interface EditPanelProps {
  openPublishPanel: () => void
}

export function EditPanel({ openPublishPanel }: Readonly<EditPanelProps>) {
  return (
    <Panel>
      <Header>
        <Title />
        <Divider />
        <TagInputList />
      </Header>

      <Editor />

      <Footer>
        <Button variant='ghost' className='text-foreground'>
          뒤로가기
        </Button>
        <FooterGroup>
          <Button variant='ghost' disabled>
            임시저장
          </Button>
          <Button onClick={openPublishPanel}>작성하기</Button>
        </FooterGroup>
      </Footer>
    </Panel>
  )
}

function Panel({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='w-screen h-screen flex flex-col'>{children}</div>
}

function Header({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='pt-2 px-3 md:pt-8 md:px-12'>{children}</div>
}

function Divider() {
  return <div className='w-16 mt-2 ml-2 bg-alt-700 p-0.5 rounded-lg' />
}

function Footer({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <div className='w-full bg-alt-800 h-16 shrink-0 flex items-center justify-between px-4'>
      {children}
    </div>
  )
}

function FooterGroup({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='flex items-center gap-2'>{children}</div>
}
