import Link from 'next/link'

import FormLogin from './client/formLogin'

const Login = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-8">
      <div className="mx-auto w-full max-w-[380px]">
        <h1 className="text-center text-3xl font-normal leading-10 text-text">
          Bem vindo de volta a Comunidade
        </h1>
      </div>
      <FormLogin />

      <span className="text-sm text-label">
        Ainda não possui conta?{' '}
        <Link href="/register" className="font-semibold text-text">
          Resgitre-se
        </Link>
      </span>
    </div>
  )
}

export default Login
