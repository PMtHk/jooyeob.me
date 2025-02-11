'use client'

import { useSearchParams } from 'next/navigation'
import { useActionState } from 'react'
import { login, LoginState } from '@/lib/actions/auth'
import { Button } from '@/components/ui'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('cb') || '/'

  console.log(callbackUrl)

  const initialState = {
    message: '',
    callbackUrl: decodeURIComponent(callbackUrl),
  }

  const [state, action, pending] = useActionState<LoginState, FormData>(login, initialState)

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form action={action}>
        <label htmlFor='password' className='block mb-2'>
          패스워드 입력
          <input
            id='password'
            name='password'
            type='password'
            placeholder='패스워드'
            required
            className='mt-2 bg-transparent w-full p-2 border-b focus:outline-none focus:border-blue-500 transition-colors'
          />
        </label>
        <Button
          disabled={pending}
          type='submit'
          className='w-full py-2 mt-4 bg-primary text-white font-medium rounded-md hover:opacity-80 transition-colors'
        >
          로그인
        </Button>
        <p className='mt-4 text-red-500'>{state?.message}</p>
      </form>
    </div>
  )
}
