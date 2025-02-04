export function RecentComments() {
  return (
    <section>
      <span className='text-default-lg text-alt-600'>최근 댓글</span>
      <ul className='list-none'>
        <li>
          <a
            href='#'
            className='mt-3 flex flex-col rounded-lg p-5 group bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900'
          >
            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-alt-200'></div>
              <span className='ml-2 font-bold text-body-sm'>나주엽</span>
            </div>
            <div className='mt-2 text-body-sm text-alt-700 text-overflow dark:text-alt-500'>
              감사합니다. 어쩌구 저쩌구의 댓글을 남겨주셔서. 텍스트가 길면 어쩌구 저쩌구. 텍스트가
              길면 어쩌구 저쩌구. 텍스트가 길면 어쩌구 저쩌구
            </div>
            <div className='mt-2 text-default-xs text-alt-500 text-overflow group-hover:text-primary dark:text-alt-500'>
              외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
            </div>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='mt-3 flex flex-col rounded-lg p-5 group bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900'
          >
            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-alt-200'></div>
              <span className='ml-2 font-bold text-body-sm'>나주엽</span>
            </div>
            <div className='mt-2 text-body-sm text-alt-700 text-overflow dark:text-alt-500'>
              감사합니다. 어쩌구 저쩌구의 댓글을 남겨주셔서. 텍스트가 길면 어쩌구 저쩌구. 텍스트가
              길면 어쩌구 저쩌구. 텍스트가 길면 어쩌구 저쩌구
            </div>
            <div className='mt-2 text-default-xs text-alt-500 text-overflow group-hover:text-primary dark:text-alt-500'>
              외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}
