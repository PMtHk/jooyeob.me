'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import { SignJWT } from 'jose'
import { getServerEnv } from '@/lib/env/server'

const tokenPayload = {
  name: 'jooyeob',
  role: 'blog_owner',
}

const expiresIn = 60 * 60 // 1 hour

export type LoginState = {
  message: string
  callbackUrl: string
}

export async function login(prevState: LoginState, formData: FormData) {
  const cookieStore = await cookies()

  const { PASSWORD_HASH, JWT_SECRET } = await getServerEnv()

  const { callbackUrl } = prevState

  console.log(callbackUrl)

  const password = formData.get('password') as string

  if (!password) {
    return { ...prevState, message: '패스워드를 입력해주세요.' }
  }

  const isValid = await bcrypt.compare(password, PASSWORD_HASH)
  if (!isValid) {
    return { ...prevState, message: '패스워드가 올바르지 않습니다.' }
  }

  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + expiresIn
  const token = await new SignJWT({ ...tokenPayload })
    .setProtectedHeader({
      alg: 'HS256',
      type: 'JWT',
    })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .sign(new TextEncoder().encode(JWT_SECRET))

  cookieStore.set('yeob_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: expiresIn,
  })

  redirect(callbackUrl)
}
