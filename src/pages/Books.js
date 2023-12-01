import React, { useState, useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { Link } from 'react-router-dom'

const Books = () => {

  const { books } = useContext(BooksContext)
  const [search, setSearch] = useState('')

  const handleSeach = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex-col">
      <div>

        <input type='text' onChange={handleSeach} value={search} />
      </div>
      <div className="books">
        {books.map(book => (
          <Link key={book} to={'/books/' + book}>
            book : {book}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Books