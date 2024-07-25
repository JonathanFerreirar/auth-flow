export type RegisterUser = {
  email: string
  password: string
  name: string
}

export type UserMetadata = {
  full_name: string
  display_name: string
  email_verified: boolean
  phone_verified: boolean
  sub: string
}
