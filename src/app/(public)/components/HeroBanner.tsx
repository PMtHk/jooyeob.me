import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className='mx-auto my-4 flex max-h-[100px] max-w-[1100px] justify-evenly overflow-hidden px-6 md:my-8 md:max-h-[150px]'>
      <Image
        src='/banner.png'
        alt='banner'
        width={1100}
        height={150}
        className='rounded-md object-cover object-center'
      />
    </div>
  )
}
