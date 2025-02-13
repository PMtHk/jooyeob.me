'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import { jwtVerify, SignJWT } from 'jose'
import { getServerEnv } from '@/lib/env/server'
import { cookieName, tokenPayload, tokenExpiresIn } from '@/lib/constants/auth'
import { LoginState } from '@/lib/types/auth'

const cookieOptions = {
  secure: process.env.NODE_ENV === 'production',
  maxAge: tokenExpiresIn,
}

export async function login(prevState: LoginState, formData: FormData) {
  const cookieStore = await cookies()
  const { PASSWORD_HASH, JWT_SECRET } = await getServerEnv()
  const { callbackUrl } = prevState

  const password = formData.get('password') as string
  if (!password) {
    return { ...prevState, message: '패스워드를 입력해주세요.' }
  }

  const isValid = await bcrypt.compare(password, PASSWORD_HASH)
  if (!isValid) {
    return { ...prevState, message: '패스워드가 올바르지 않습니다.' }
  }

  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + tokenExpiresIn
  const token = await new SignJWT(tokenPayload)
    .setProtectedHeader({ alg: 'HS256', type: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .sign(new TextEncoder().encode(JWT_SECRET))

  cookieStore.set(cookieName, token, cookieOptions)
  redirect(callbackUrl)
}

export async function authenticate() {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName)?.value
  if (!token) {
    return false
  }

  const { JWT_SECRET } = await getServerEnv()
  const secret = new TextEncoder().encode(JWT_SECRET)

  try {
    await jwtVerify(token, secret)
    return true
  } catch {
    return false
  }
}

export async function logout() {
  if (!(await authenticate())) {
    redirect('/')
  }

  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
  redirect('/')
}
