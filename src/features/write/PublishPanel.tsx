import type { ReactElement, ReactNode } from 'react'
import { Button } from '@/shared/ui'
import { useWrite } from '@/features/write/hooks/useWrite'

import { Category, Series, Summary, Thumbnail, URL } from '@/features/write/components'
import { createPost } from '@/features/write/actions'
import type { CreatePostDto } from '@/features/write/actions'

interface PublishPanelProps {
  isOpen: boolean
  close: () => void
}

export default function PublishPanel({ isOpen, close }: Readonly<PublishPanelProps>) {
  const { title, tags, content, thumbnailURL, summary, url, category } = useWrite()

  const getCategoryId = (category: 'dev' | 'study' | 'review') => {
    switch (category) {
      case 'dev':
        return 1
      case 'study':
        return 2
      case 'review':
        return 3
      default:
        return 1
    }
  }

  const handlePublish = async () => {
    const newPost: CreatePostDto = {
      title,
      content,
      tags,
      thumbnail_url: thumbnailURL,
      summary,
      category_id: getCategoryId(category),
      slug: url,
    }

    await createPost(newPost)
  }

  return (
    <Panel isOpen={isOpen}>
      <Container>
        <PreviewSection>
          <Thumbnail />
          <Summary />
        </PreviewSection>

        <InfoSection>
          <div className='flex flex-col'>
            <Category />
            <URL />
            <Series />
          </div>

          <ControlGroup>
            <Button variant='ghost' onClick={close}>
              취소
            </Button>
            <Button onClick={handlePublish}>출간하기</Button>
          </ControlGroup>
        </InfoSection>
      </Container>
    </Panel>
  )
}

function Panel({
  isOpen,
  children,
}: Readonly<{
  isOpen: boolean
  children: ReactNode
}>): ReactElement {
  return (
    <div
      className={`fixed bottom-0 w-screen h-screen bg-background z-10 transition-transform duration-300 flex items-center justify-center ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {children}
    </div>
  )
}

function Container({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <div className='w-full px-4 flex flex-col gap-y-4 md:gap-x-6 md:flex-row items-center md:items-start justify-center max-w-3xl'>
      {children}
    </div>
  )
}

function PreviewSection({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <div className='w-full h-full'>
      <h3 className='text-display-sm'>포스트 미리보기</h3>
      {children}
    </div>
  )
}

function InfoSection({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='w-full flex flex-col justify-between'>{children}</div>
}

function ControlGroup({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='mt-6 flex justify-end gap-2'>{children}</div>
}
