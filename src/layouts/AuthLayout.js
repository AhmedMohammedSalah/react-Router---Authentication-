import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {
  const nav = useNavigate();

  const goHome = () => {
    nav('/',{replace:true})  
  }
  return (
    <div>
      <Outlet/>
      <button onClick={goHome} className="btn"> GO HOME</button>
    </div>
  )
}
 
export default AuthLayout