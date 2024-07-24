'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import PasswordInput from '@/components/passwordInput'
import { useAuth } from '@/hook/useAuth'
import { Button } from '@/primitive/ui/button'
import ErrorMessager from '@/primitive/ui/error'
import { Input } from '@/primitive/ui/input'
import { formSchema } from '@/types/form'

type FormLoginSchema = z.infer<typeof formSchema>

const FormLogin = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginSchema>({
    resolver: zodResolver(formSchema),
  })

  const { handleLoginAndResgiterWithGithub, handleUserLogin, isLoading } =
    useAuth()

  const onSubmit: SubmitHandler<FormLoginSchema> = async (data) => {
    await handleUserLogin(data.email, data.senha)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-[380px] flex-col gap-y-10"
    >
      <Button
        type="button"
        variant="ghost"
        onClick={handleLoginAndResgiterWithGithub}
        className="my-10 flex items-center gap-x-2 py-4"
      >
        <FaGithub size={20} />
        Login com Github
      </Button>
      <div>
        <label className="text-left text-xs text-label">Email</label>
        <Input
          {...register('email')}
          className="rounded-none border-x-0 border-b border-t-0 border-line"
          placeholder="exemple@gmail.com"
        />
        {errors?.email && <ErrorMessager>{errors.email.message}</ErrorMessager>}
      </div>
      <div>
        <label className="text-left text-xs text-label">Senha</label>

        <Controller
          name="senha"
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <PasswordInput
              onBlur={onBlur}
              onChange={onChange}
              placeholder="*********"
              className="rounded-none border-x-0 border-b border-t-0 border-line"
            />
          )}
        />

        {errors?.senha && <ErrorMessager>{errors.senha.message}</ErrorMessager>}
      </div>
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-[140px] self-end px-14 py-7"
      >
        Entrar
      </Button>
    </form>
  )
}

export default FormLogin
