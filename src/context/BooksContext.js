
import { useState } from "react"
import { createContext } from 'react'

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {

  const [books, setBooks] = useState([1, 2])

  const addNewBook = () => {
    const newBox = books[books.length - 1] + 1;
    setBooks(data => [...data, newBox])
  }

  return (
    <BooksContext.Provider value={{ books, addNewBook }} >
      {children}
    </BooksContext.Provider>
  )
}
