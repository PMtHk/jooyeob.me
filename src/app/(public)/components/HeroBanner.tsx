import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className='relative mt-6 mb-6 md:mb-10 flex mx-6 max-w-[1100px] h-[100px] md:h-[150px]'>
      <Image
        src='/banner.png'
        alt='banner'
        fill
        sizes='100vw'
        className='h-full w-full rounded-lg object-cover object-center'
      />
    </div>
  )
}
