'use client'

import React from 'react'

import { RegisterUser } from '@/types/auth'
import { supabase } from '@/utils/supabase/client'

export const useAuth = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLoginAndResgiterWithGithub = async () => {
    setIsLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
      },
    })

    console.log(error)
    setIsLoading(false)
  }

  const handleUserLogin = async (email: string, password: string) => {
    setIsLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log(data)

    console.log(error)
    setIsLoading(false)
  }

  const handleRegisterUser = async ({
    name,
    email,
    password,
  }: RegisterUser) => {
    setIsLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    })
    console.log(data)

    console.log(error)
    setIsLoading(false)
  }
  return {
    isLoading,
    handleUserLogin,
    handleRegisterUser,
    handleLoginAndResgiterWithGithub,
  }
}
