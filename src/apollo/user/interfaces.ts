export interface AuthenticateUserArgs {
  email: string
  password: string
}

export interface CreateUserArgs {
  email: string
  password: string
  firstName: string
  lastName: string
  userName: string
}