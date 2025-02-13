import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className='mx-auto flex w-fit break-keep p-6 h-[60px] gap-3 text-alt-600 text-default-md'>
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
