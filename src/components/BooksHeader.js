import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const BooksHeader = () => {
  const nav =useNavigate()
  return (

    <header>
      <div className="container">
        <div onClick={()=>{nav(-1)}} className="brand">
          <span > ← </span>
        </div>

        <nav>
          <ul>
            <li> <NavLink to="/" end> home </NavLink></li>
            <li> <NavLink to="/books" end  >   books   </NavLink></li>
            <li>  <NavLink to="/books/new"  end> new  </NavLink> </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default BooksHeader