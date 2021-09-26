import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({})

  const updatePage = (data) => {
    setPage(data)
  }

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data })
  }

  return (
    <Component
      {...pageProps}
      page={page}
      updatePage={updatePage}
      formData={formData}
      updateFormData={updateFormData}
    />
  )
}

export default MyApp
