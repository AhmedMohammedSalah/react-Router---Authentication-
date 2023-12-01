import React from 'react'

import BooksHeader from "../components/BooksHeader"
import { Outlet } from 'react-router-dom'

const BooksLayout = () => {
  return (
    < >
      <BooksHeader />
      <Outlet/>
    </>
  )
}

export default BooksLayout