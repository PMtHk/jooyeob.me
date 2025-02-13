'use client'

import { useActionState } from 'react'
import { login } from '@/lib/actions/private/auth'
import { LoginState } from '@/lib/types/auth'
import { Button } from '@/components/ui'

interface LoginFormProps {
  callbackUrl: string
}

export function LoginForm({ callbackUrl }: Readonly<LoginFormProps>) {
  const initialState = {
    message: '',
    callbackUrl,
  }

  const [state, action, pending] = useActionState<LoginState, FormData>(login, initialState)

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form action={action}>
        <label htmlFor='password' className='mb-2 block'>
          패스워드 입력
          <input
            id='password'
            name='password'
            type='password'
            placeholder='패스워드'
            required
            className='mt-2 w-full border-b bg-transparent p-2 transition-colors focus:border-blue-500 focus:outline-none'
          />
        </label>
        <Button
          disabled={pending}
          type='submit'
          className='mt-4 w-full rounded-md bg-primary py-2 font-medium text-white transition-colors hover:opacity-80'
        >
          로그인
        </Button>
        <p className='mt-4 text-red-500'>{state?.message}</p>
      </form>
    </div>
  )
}
