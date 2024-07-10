'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import PasswordInput from '@/components/passwordInput'
import { Button } from '@/primitive/ui/button'
import ErrorMessager from '@/primitive/ui/error'
import { Input } from '@/primitive/ui/input'
import { formWithNameSchema } from '@/types/form'

type FormResgiterSchema = z.infer<typeof formWithNameSchema>

const FormResgiter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormResgiterSchema>({
    resolver: zodResolver(formWithNameSchema),
  })

  const onSubmit: SubmitHandler<FormResgiterSchema> = (data) => {
    console.log(data)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-[380px] flex-col gap-y-10"
    >
      <Button variant="ghost" className="my-10 flex items-center gap-x-2 py-4">
        <FaGithub size={20} />
        Login com Github
      </Button>
      <div>
        <label className="text-left text-xs text-label">Nome</label>
        <Input
          {...register('name')}
          className="rounded-none border-x-0 border-b border-t-0 border-line"
          placeholder="Jonathan Rodrigo"
        />
        {errors?.name && <ErrorMessager>{errors.name.message}</ErrorMessager>}
      </div>
      <div>
        <label className="text-left text-xs text-label">Email</label>
        <Input
          {...register('email')}
          className="rounded-none border-x-0 border-b border-t-0 border-line"
          placeholder="exemple@gmail.com "
        />
        {errors?.email && <ErrorMessager>{errors.email.message}</ErrorMessager>}
      </div>
      <div>
        <label className="text-left text-xs text-label">Senha</label>
        <PasswordInput
          {...register('senha')}
          className="rounded-none border-x-0 border-b border-t-0 border-line"
          placeholder="*********"
        />
        {errors?.senha && <ErrorMessager>{errors.senha.message}</ErrorMessager>}
      </div>

      <Button className="self-end px-14 py-7">Entrar</Button>
    </form>
  )
}

export default FormResgiter
