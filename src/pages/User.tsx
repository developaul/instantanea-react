import ProfileProvider from "../Providers/ProfileProvider"

import Header from "../containers/Header"
import Profile from "../containers/Profile"
import Table from '../containers/Table'


const User = () => {


  return (
    <ProfileProvider>
      <Header />
      <Profile />
      <Table />
      </ProfileProvider>
  )
}

export default User
