import Gallery from "../Gallery"

import { shortPublications } from "../../mocks"

const TableContent = () => {
  return (
    <Gallery
      publications={shortPublications}
    />
  )
}

export default TableContent
