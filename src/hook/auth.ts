'use client'

import { supabase } from '@/utils/supabase/client'

export const useAuth = () => {
  const handleLoginAndResgiterWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
      },
    })

    console.log(error)
  }

  const handleUserLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log(data)

    console.log(error)
  }

  const handleRegisterUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    console.log(data)

    console.log(error)
  }
  return {
    handleUserLogin,
    handleRegisterUser,
    handleLoginAndResgiterWithGithub,
  }
}
