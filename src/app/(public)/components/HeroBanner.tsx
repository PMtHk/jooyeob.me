import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className='mx-auto mt-6 mb-10 flex px-6 max-w-[1100px] h-[80px] md:h-[150px]'>
      <Image
        src='/banner.png'
        alt='banner'
        width={0}
        height={0}
        sizes='100vw'
        className='h-full w-full rounded-lg object-cover object-center'
      />
    </div>
  )
}
