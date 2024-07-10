import Link from 'next/link'

import FormResgiter from './client/FormResgiter'

const Resgiter = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-8">
      <div className="mx-auto w-full max-w-[380px]">
        <h1 className="text-center text-3xl font-normal leading-10 text-text">
          Junte-se á nossa Comunidade
        </h1>
      </div>
      <FormResgiter />
      <span className="text-sm text-label">
        Já possui conta?{' '}
        <Link href="/login" className="font-semibold text-text">
          Faça Login
        </Link>
      </span>
    </div>
  )
}

export default Resgiter
