import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className='mx-auto flex h-[60px] w-fit gap-3 break-keep p-6 text-default-md text-alt-600'>
        <Link href='https://github.com/PMtHk'>
          <span>Github</span>
        </Link>
        <Link href='https://velog.io/@pmthk__'>
          <span>Velog</span>
        </Link>
        {/*<Link href='#' d>*/}
        {/*  <span>Résumé</span>*/}
        {/*</Link>*/}
        <Link href='mailto:zooby88@gmail.com'>
          <span>Contact</span>
        </Link>
      </div>
    </footer>
  )
}
