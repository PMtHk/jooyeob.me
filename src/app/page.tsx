export default function Home() {
  return (
    <div className='w-full min-h-screen bg-background text-foreground pb-12'>
      <div className='mx-auto flex justify-evenly max-w-[1100px] mt-6 mb-10 px-6'>
        <div className='border rounded-xl w-full h-[80px] md:h-[150px]'>배너 이미지</div>
        {/*<Image*/}
        {/*  src='/toss_tech.webp'*/}
        {/*  alt='banner'*/}
        {/*  width={0}*/}
        {/*  height={0}*/}
        {/*  sizes='100vw'*/}
        {/*  style={{ width: '100%', height: 'auto', maxHeight: '150px', objectFit: 'contain' }}*/}
        {/*  className='rounded-xl'*/}
        {/*/>*/}
      </div>

      <div className='mx-auto flex justify-evenly max-w-[1200px] break-keep'>
        <div className='w-full lg:max-w-[700px] flex flex-col px-6'>
          <div className='flex item w-full border-b text-default-xl sticky top-[60px] bg-background pt-3'>
            <button className='pb-2 px-4 font-semibold border-b-2 border-black dark:border-alt-700'>
              전체
            </button>
            <button className='pb-2 px-4 text-text-lg text-gray-400'>개발</button>
            <button className='pb-2 px-4 text-text-lg text-gray-400'>학습</button>
          </div>

          <ul className='flex flex-col list-none pt-[10px]'>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
            <li>
              <a href='#' className='group flex py-6'>
                <div className='flex flex-grow flex-col pr-5'>
                  <span className='text-display-xs md:text-display-sm mb-1.5 group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </span>
                  <span className='text-body-sm md:text-body-md text-alt-700 mb-4 dark:text-alt-500'>
                    고로시롤 서비스에 성능 개선을 위해 병렬 처리를 도입하면서, 문제가 된 외부 API
                    규칙을 RateLimiter 를 활용해 해결한 과정을 소개합니다.
                  </span>
                  <span className='text-body-sm text-alt-700 dark:text-alt-600'>
                    2024년 12월 23일
                  </span>
                </div>
                <div className='w-full border rounded-xl max-w-[130px]'></div>
              </a>
            </li>
          </ul>
        </div>

        <div className='hidden lg:flex border-l px-6'>
          <div className='flex flex-col w-[300px] h-full gap-4'>
            <div>
              <span className='text-default-sm text-alt-600'>최근 게시물</span>
              <ul className='list-none'>
                <li>
                  <a href='#' className='group flex py-3'>
                    <div className='flex flex-grow flex-col pr-5'>
                      <span className='text-default-lg mb-1.5 group-hover:text-primary'>
                        외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                      </span>
                      <span className='text-body-sm text-alt-700 dark:text-alt-500'>
                        2024년 12월 23일
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#' className='group flex py-3'>
                    <div className='flex flex-grow flex-col pr-5'>
                      <span className='text-default-lg mb-1.5 group-hover:text-primary'>
                        외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                      </span>
                      <span className='text-body-sm text-alt-700 dark:text-alt-500'>
                        2024년 12월 23일
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className='text-default-sm text-alt-600'>최근 댓글</span>
              <ul className='list-none'>
                <li>
                  <a
                    href='#'
                    className='group flex flex-col rounded-xl bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 mt-3 p-5'
                  >
                    <div className='flex items-center'>
                      <div className='w-8 h-8 rounded-full bg-alt-200'></div>
                      <span className='ml-2 text-body-sm font-bold'>나주엽</span>
                    </div>
                    <div className='mt-2 text-body-sm text-alt-700 dark:text-alt-500 text-overflow'>
                      감사합니다. 어쩌구 저쩌구의 댓글을 남겨주셔서. 텍스트가 길면 어쩌구 저쩌구.
                      텍스트가 길면 어쩌구 저쩌구. 텍스트가 길면 어쩌구 저쩌구
                    </div>
                    <div className='mt-2 text-default-xs text-alt-500 dark:text-alt-500 text-overflow group-hover:text-primary'>
                      외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='group flex flex-col rounded-xl bg-alt-50 hover:bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 mt-3 p-5'
                  >
                    <div className='flex items-center'>
                      <div className='w-8 h-8 rounded-full bg-alt-200'></div>
                      <span className='ml-2 text-body-sm font-bold'>나주엽</span>
                    </div>
                    <div className='mt-2 text-body-sm text-alt-700 dark:text-alt-500 text-overflow'>
                      감사합니다. 어쩌구 저쩌구의 댓글을 남겨주셔서. 텍스트가 길면 어쩌구 저쩌구.
                      텍스트가 길면 어쩌구 저쩌구. 텍스트가 길면 어쩌구 저쩌구
                    </div>
                    <div className='mt-2 text-default-xs text-alt-500 dark:text-alt-500 text-overflow group-hover:text-primary'>
                      외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className='text-default-sm text-alt-600'>태그</span>
              <div className='flex flex-wrap mt-3'>
                <span className='text-body-md text-alt-700 dark:text-alt-300 bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 rounded-full px-2 py-1 mr-1.5 mb-2 hover:bg-alt-200 cursor-pointer'>
                  JavaScript
                </span>
                <span className='text-body-md text-alt-700 dark:text-alt-300 bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 rounded-full px-2 py-1 mr-1.5 mb-2 hover:bg-alt-200 cursor-pointer'>
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
