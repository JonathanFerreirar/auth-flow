import * as z from 'zod'

export const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email é obrigatorio',
    })
    .email({
      message: 'Digite um e-mail válido por favor',
    })
    .min(3, { message: 'Email é obrigatorio' }),
  senha: z
    .string({
      required_error: 'Senha é obrigatorio',
    })
    .min(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    .max(25, {
      message: 'A senha pode ter no maximo 25 caracteres',
    }),
})

export const formWithNameSchema = formSchema.extend({
  name: z.string().min(3, { message: 'Nome é obrigatorio' }),
})
