import Link from 'next/link'
import Image from 'next/image'

export  function Header() {
  return (
    <nav className='sticky top-0 w-full h-[60px] bg-background border-b z-50 px-4'>
      <div className='h-full sm:px-6 md:w-[92%] lg:w-[92%] md:mx-auto lg:mx-auto'>
        <div className='flex items-center justify-between h-full'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/yeob.svg'
              alt='yeob_blog-logo'
              width={60}
              height={30}
              className='dark:invert'
            />
            <span className='ml-1.5 text-default-lg'>블로그</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
