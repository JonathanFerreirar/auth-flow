'use client'

import React from 'react'

import { useAuth } from '@/hook/useAuth'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/primitive/ui/button'

type LogoutButton = React.PropsWithChildren & ButtonProps

export const LogoutButton = ({ children, ...props }: LogoutButton) => {
  const { handleLogout } = useAuth()

  return (
    <Button
      {...props}
      onClick={handleLogout}
      className={cn(' text-white', props.className)}
    >
      {children}
    </Button>
  )
}
