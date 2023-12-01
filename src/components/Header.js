import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const { isAuth ,logout} = useContext( AuthContext );
  return (

 <header>
      <div className="container">
        <div className="brand">
          <Link to="/"> LOGO </Link>
        </div>

        <nav>
          <ul>
            <li> <NavLink to="/" end state="header"  > home </NavLink></li>
            {isAuth?(
            <>
              <li> <NavLink to="/books" end > books </NavLink></li>
              <li> <NavLink to="/books/new" end > new </NavLink></li>
              <li> <button className="btn btn-sm" onClick={()=>logout()} > logout </button></li>
            </>
            ) :
            <li> <NavLink to="/login"> login </NavLink></li>
            }


          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header