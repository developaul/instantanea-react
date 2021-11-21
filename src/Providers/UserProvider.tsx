import { createContext, ReactElement } from "react"

import { useGetUser } from "../apollo/user/hooks"

interface UserProviderProps {
  children: ReactElement | ReactElement[]
}

const UserContext = createContext({} as {})

const UserProvider = ({ children }: UserProviderProps) => {

  const { data, loading } = useGetUser()

  if (loading) return <p>loading</p>

  return (
    <UserContext.Provider
      value={{
        user: data?.getUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
