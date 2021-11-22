import { useParams } from "react-router-dom"

import { useGetUserByUserName } from "../apollo/user/hooks"

import Header from "../containers/Header"
import Profile from "../containers/Profile"
import Table from '../containers/Table'

interface UserParams {
  userName: string
}

const User = () => {

  const { userName } = useParams() as UserParams

  const { user, loading } = useGetUserByUserName({ userName })

  if (loading) return <p>loading.... skeleton</p>

  console.log("🚀 ~ User ~ user", user)
  return (
    <>
      <Header />
      <Profile
        _id={user._id}
      />
      <Table />
    </>
  )
}

export default User
