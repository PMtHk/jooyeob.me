import type { ReactElement, ReactNode } from 'react'
import { redirect } from 'next/navigation'
import type { CreatePostDto } from '@/lib/types/post'
import { useWrite } from '@/lib/hooks/useWrite'
import { createPost } from '@/lib/actions/private/post'
import { Thumbnail } from '@/app/write/components/PublishDrawer/Thumbnail'
import { Summary } from '@/app/write/components/PublishDrawer/Summary'
import { Category } from '@/app/write/components/PublishDrawer/Category'
import Series from '@/app/write/components/PublishDrawer/Series'
import { Button } from '@/components/ui'
import { URL } from '@/app/write/components/PublishDrawer/URL'

interface PublishPanelProps {
  isOpen: boolean
  close: () => void
}

export default function PublishDrawer({ isOpen, close }: Readonly<PublishPanelProps>) {
  const { title, tags, content, thumbnailURL, summary, url, category, series } = useWrite()

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
      series_id: series === -1 ? undefined : series,
    }

    await createPost(newPost)

    // TODO: 글 작성 토스트 메시지 추가

    // page 이동
    close()

    redirect('/')
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
      className={`fixed bottom-0 z-10 flex h-screen w-screen items-center justify-center bg-background transition-transform duration-300 ${
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
    <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-y-4 px-4 md:flex-row md:items-start md:gap-x-6'>
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
    <div className='h-full w-full'>
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
  return <div className='flex w-full flex-col justify-between'>{children}</div>
}

function ControlGroup({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return <div className='mt-6 flex justify-end gap-2'>{children}</div>
}
