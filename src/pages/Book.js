import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import NotFound from './NotFound'
const Book = () => {
  const {books}= useContext(BooksContext)
  const params = useParams()
  return (
    <>
      { +params.id <books.length+1?(<div>Book  { params.id}</div>):( <NotFound/>)}
    </>
    
  )
}

export default Book