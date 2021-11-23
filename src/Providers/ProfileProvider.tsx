import { createContext, ReactElement } from "react"
import { useParams } from "react-router-dom"

import { useGetProfileByUserName } from "../apollo/user/hooks"

import { Profile } from "../interfaces"

export const ProfileContext = createContext({} as Profile)

interface ProfileProviderProps {
  children: ReactElement | ReactElement[]
}

interface ProfileParams {
  userName: string
}

const ProfileProvider = ({children}: ProfileProviderProps) => {

  const { userName } = useParams() as ProfileParams

  const { profile, loading } = useGetProfileByUserName({ userName })

  if (loading) return <p>loading.... skeleton</p>

  return (
    <ProfileContext.Provider
      value={{...profile}}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
