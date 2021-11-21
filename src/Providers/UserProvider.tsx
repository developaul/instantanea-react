import { createContext, ReactElement } from "react"

import { useGetUser } from "../apollo/user/hooks"

import { User } from "../interfaces"

interface UserProviderProps {
  children: ReactElement | ReactElement[]
}


export const UserContext = createContext<User>({} as User)

const UserProvider = ({ children }: UserProviderProps) => {

  const { user, loading } = useGetUser()

  if (loading) return <p>loading</p>

  return (
    <UserContext.Provider
      value={user}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
