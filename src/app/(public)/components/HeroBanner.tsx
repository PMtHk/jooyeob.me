import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className='mx-auto my-4 flex justify-evenly overflow-hidden px-6 max-w-[1100px] max-h-[100px] md:max-h-[150px] md:my-8'>
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
