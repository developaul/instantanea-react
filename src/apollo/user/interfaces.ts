import { Profile } from "../../interfaces";

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

export interface GetProfileByUserNameArgs {
  userName: string
}

export interface GetProfileByUserNameResult {
  profile: Profile
  loading: boolean
}