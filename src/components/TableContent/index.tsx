import { useParams } from "react-router"
import Gallery from "../Gallery"

import { ProfileParams } from "../../interfaces"
import { useGetShortPublications } from "../../apollo/publication/hooks"

const TableContent = () => {
  const { userName } = useParams<ProfileParams>()

  const { data: { getShortPublications: shortPublications = [] } = {} } = useGetShortPublications({ variables: { limit: 15, page: 1, userName } })

  return (
    <Gallery
      publications={shortPublications}
    />
  )
}

export default TableContent
