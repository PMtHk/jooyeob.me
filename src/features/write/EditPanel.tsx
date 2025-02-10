import type { ReactElement, ReactNode } from 'react'
import { redirect } from 'next/navigation'
import Editor from '@/features/editor'
import { Button } from '@/shared/ui'
import { TagInputList, Title } from '@/features/write/components'

interface EditPanelProps {
  openPublishPanel: () => void
}

export default function EditPanel({ openPublishPanel }: Readonly<EditPanelProps>) {
  const handleGoBack = () => {
    redirect('/')
  }

  return (
    <Panel>
      <Header>
        <Title />
        <Divider />
        <TagInputList />
      </Header>

      <Editor />

      <Footer>
        <Button variant='ghost' className='text-foreground' onClick={handleGoBack}>
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

export function EditPanelFallback() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      편집기를 불러오는 중입니다.
    </div>
  )
}

function Panel({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='flex h-screen max-h-screen w-full flex-col overflow-auto'>{children}</div>
}

function Header({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='px-3 pt-2 md:px-12 md:pt-8'>{children}</div>
}

function Divider() {
  return <div className='mt-2 ml-2 w-16 rounded-lg bg-alt-700 p-0.5' />
}

function Footer({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <div className='flex h-16 w-full shrink-0 items-center justify-between px-4 bg-alt-800'>
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
