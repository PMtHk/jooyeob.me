export function RecentComments() {
  return (
    <section>
      <span className='text-default-lg text-alt-600'>최근 댓글</span>
      <ul className='list-none'>
        <li>
          <a
            href='#'
            className='mt-3 flex flex-col rounded-lg p-3 group bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900'
          >
            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-alt-200'></div>
              <span className='ml-2 font-bold text-body-sm'>EUNJI</span>
            </div>
            <div className='mt-2 text-body-sm text-alt-700 text-overflow dark:text-alt-500'>
              이렇게 자세하고 친절한 블로그 글을 발견하게 되어 도움 많이 받았습니다! 좋은 글
              감사합니다 :)
            </div>
            <div className='mt-2 text-default-xs text-alt-500 text-overflow group-hover:text-primary dark:text-alt-500'>
              Github Actions 과 AWS CodeDeploy 를 사용한 Blue/Green 배포 자동화
            </div>
          </a>
        </li>

        <li>
          <a
            href='#'
            className='mt-3 flex flex-col rounded-lg p-3 group bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900'
          >
            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-alt-200'></div>
              <span className='ml-2 font-bold text-body-sm'>chance</span>
            </div>
            <div className='mt-2 text-body-sm text-alt-700 text-overflow dark:text-alt-500'>
              공식 문서에서는 inter.variable 과 같이 className 에 variable 만 넣어주는데, font
              pretendard 도 같이 넣어줘야 하는 이유를 알 수 있을까요?
            </div>
            <div className='mt-2 text-default-xs text-alt-500 text-overflow group-hover:text-primary dark:text-alt-500'>
              Next.js LocalFont 적용하기 (feat. Pretendard)
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}
