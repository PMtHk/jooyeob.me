import Link from 'next/link'
import Image from 'next/image'
import { WritePostButton } from '@/app/components/WritePostButton'
import { LogoutButton } from '@/app/components/LogoutButton'
import { AuthProvider } from '@/contexts/auth/authContext'

export async function Header() {
  return (
    <nav className='sticky top-0 z-50 h-[60px] w-full border-b bg-background px-4'>
      <div className='h-full sm:px-6 md:mx-auto md:w-[92%] lg:mx-auto lg:w-[92%]'>
        <div className='flex h-full items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/yeob.svg'
              alt='yeob_blog-logo'
              width={60}
              height={30}
              className='dark:invert'
            />
            <span className='ml-1.5 text-default-sm'>블로그</span>
          </Link>

          <div className='flex gap-x-1 text-default-md'>
            <AuthProvider>
              <LogoutButton />
              <WritePostButton />
            </AuthProvider>
          </div>
        </div>
      </div>
    </nav>
  )
}
