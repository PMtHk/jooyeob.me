import { LoginForm } from '@/app/login/LoginForm'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ cb?: string }>
}) {
  const { cb } = await searchParams
  const callbackUrl = cb ? decodeURIComponent(cb) : '/'

  return <LoginForm callbackUrl={callbackUrl} />
}
