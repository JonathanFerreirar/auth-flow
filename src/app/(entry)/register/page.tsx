import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/primitive/ui/button'
import { Input } from '@/primitive/ui/input'

const Resgiter = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-8">
      <div className="mx-auto w-full max-w-[380px]">
        <h1 className="text-center text-3xl font-normal leading-10 text-text">
          Junte-se á nossa Comunidade
        </h1>
      </div>
      <div className="mx-auto flex w-full max-w-[380px] flex-col gap-y-10">
        <Button
          variant="ghost"
          className="my-10 flex items-center gap-x-2 py-4"
        >
          <FaGithub size={20} />
          Login com Github
        </Button>
        <div>
          <label className="text-left text-xs text-label">Nome</label>
          <Input
            className="rounded-none border-x-0 border-b border-t-0 border-line"
            placeholder="Jonathan Rodrigo"
          />
        </div>
        <div>
          <label className="text-left text-xs text-label">Email</label>
          <Input
            className="rounded-none border-x-0 border-b border-t-0 border-line"
            placeholder="exemple@gmail.com "
          />
        </div>
        <div>
          <label className="text-left text-xs text-label">Senha</label>
          <Input
            className="rounded-none border-x-0 border-b border-t-0 border-line"
            placeholder="*********"
          />
        </div>

        <Button className="self-end px-14 py-7">Entrar</Button>
      </div>

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
