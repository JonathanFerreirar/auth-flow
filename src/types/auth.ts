export type RegisterUser = {
  email: string
  password: string
  name: string
}

export type UserMetadata = {
  display_name: string
  email_verified: boolean
  phone_verified: boolean
  sub: string
}
