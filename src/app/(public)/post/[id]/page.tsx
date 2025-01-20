export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  return (
    <div className='w-full min-h-screen'>
      <div className='mx-auto flex flex-col max-w-[700px] break-keep p-6'>
        <article>
          <header className='pt-9'>
            <h1 className='mt-9 text-display-lg md:text-display-xl'>
              {id} 외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
            </h1>
            <div className='flex flex-wrap mt-5'>
              <span className='text-default-sm text-alt-700 dark:text-alt-300 bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 rounded-full px-2 py-1 mr-1.5 mb-2 hover:bg-alt-200 cursor-pointer'>
                #JavaScript
              </span>
            </div>
            <section className='mt-5'>
              <div className='css-zn4dem esnk6d53'>
                <div className='pt-2'>
                  <span className='text-default-xl'>나주엽</span>
                </div>
                <div className='text-default-md pt-1'>2024년 12월 19일</div>
              </div>
            </section>
          </header>
          <div className='mt-12 text-default-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate in diam id
            interdum. Donec vel libero sodales, interdum nibh nec, porttitor risus. Morbi ac congue
            magna. Sed interdum semper purus quis ullamcorper. Quisque vulputate orci eu velit
            scelerisque, sed finibus orci fringilla. Integer felis elit, semper scelerisque
            ullamcorper vitae, tempus a nisi. Ut tempus lorem a interdum lobortis. Aenean sit amet
            porttitor lectus. Donec ac lorem at eros eleifend ornare quis sed neque. Suspendisse vel
            rutrum metus. Vestibulum ac arcu felis. Curabitur auctor fermentum urna, eu dictum augue
            congue eu. In vitae quam orci. Integer in felis tristique, gravida mauris at, viverra
            lectus. Pellentesque elit sem, mattis dignissim turpis sit amet, condimentum luctus
            tortor. Pellentesque sit amet magna at purus consectetur varius et in neque. Donec
            molestie mattis dui vitae egestas. Nam molestie ante eget ante hendrerit euismod. Sed
            finibus, purus non iaculis pulvinar, est enim vehicula risus, sit amet scelerisque
            lectus risus non lacus. Ut consectetur diam tincidunt massa ultrices dictum. Ut
            condimentum convallis dui, vel sodales purus eleifend quis. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Proin vestibulum congue erat,
            condimentum imperdiet nisi rutrum sit amet. Morbi at dui dapibus, consectetur lorem
            eget, commodo sem. Cras egestas sed tortor ut mattis. Phasellus sit amet feugiat eros.
            Mauris vel laoreet dui. Donec ut arcu ac est vulputate sodales. Donec dignissim, mi
            vestibulum feugiat vestibulum, leo lectus suscipit ex, ac condimentum sem metus at sem.
            Mauris dictum ligula quis lacinia rhoncus. Etiam id blandit risus. Donec non eleifend
            tellus, et ornare ipsum. Donec aliquam fringilla nunc a hendrerit. Morbi dolor lectus,
            mattis eget nisi id, cursus laoreet ipsum. Curabitur purus massa, aliquam a tincidunt
            et, faucibus id purus. Proin nec ligula quis felis varius auctor id nec sem. Praesent eu
            ultricies nunc. Aenean laoreet ex vitae elit faucibus fringilla. Vestibulum sed nulla et
            lorem mollis semper id vel diam. Quisque porttitor libero at bibendum maximus. Nunc
            scelerisque dictum ante. Suspendisse potenti. Cras viverra nunc tortor, vel scelerisque
            augue laoreet ut. Duis libero felis, mattis vel vestibulum nec, elementum id lorem.
            Aenean maximus vitae purus in aliquam. Donec elit dui, pharetra vel magna ut, tincidunt
            mattis augue. Vestibulum eu faucibus mauris, et feugiat mi. Cras mattis, neque sit amet
            vulputate sodales, mauris leo posuere nisl, in interdum risus orci vel nulla. Aenean
            pellentesque sapien purus, nec pharetra metus fringilla ut.
          </div>
          <button className='my-12 px-4 py-3'>공유</button>
        </article>

        <div>{/* 댓글 관련 */}</div>

        <div className='mb-12'>
          <div className='mt-12'>
            <h2 className='text-display-sm'>다른 글</h2>
            <div className='flex flex-col gap-4 mt-6'>
              <a className='group flex gap-4'>
                <div className='flex-shrink-0 w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800 rounded-lg'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm lg:text-display-md group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='text-default-lg mt-2'>2024년 12월 19일</div>
                </div>
              </a>
              <a className='group flex gap-4'>
                <div className='flex-shrink-0 w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800 rounded-lg'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm lg:text-display-md group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='text-default-lg mt-2'>2024년 12월 19일</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
