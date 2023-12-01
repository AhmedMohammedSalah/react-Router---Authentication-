import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { useNavigate } from 'react-router-dom'


const NewBook = () => {
  const {addNewBook}=useContext(BooksContext)
  const nav =useNavigate()
  const hadleAddBook = () => {
    addNewBook()
    nav('/books')
  }

  return (
    <>
      <div>NewBook</div>
      <div>
        <button className='btn' onClick={hadleAddBook}> Add NewBook </button>
      </div>
    </>
  )
}

export default NewBook