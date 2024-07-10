import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { Input, InputProps } from '@/primitive/ui/input'

type InputWithTypeOmitted = Omit<InputProps, 'type'>

const PasswordInput: React.FC<InputWithTypeOmitted> = ({ ...props }) => {
  const [isPassword, setIsPassword] = React.useState(true)

  const changeBlockState = () => {
    setIsPassword((prevState) => !prevState)
  }

  return (
    <div className="relative size-auto">
      <Input type={isPassword ? 'password' : 'text'} {...props} />
      {isPassword && (
        <FaEye
          onClick={changeBlockState}
          className="absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer"
        />
      )}
      {!isPassword && (
        <FaEyeSlash
          onClick={changeBlockState}
          className="absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  )
}

export default PasswordInput
