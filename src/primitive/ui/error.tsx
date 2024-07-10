import React from 'react'

import { cn } from '@/lib/utils'

type ErrorMessagerProps = React.PropsWithChildren & React.ComponentProps<'span'>

const ErrorMessager = ({ children, ...props }: ErrorMessagerProps) => {
  return (
    <span
      {...props}
      aria-label="Error no formulario"
      className={cn('text-xs font-medium text-red-600', props.className)}
    >
      {children}
    </span>
  )
}

export default ErrorMessager
