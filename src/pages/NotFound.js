import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()
  useEffect( () => {
    const timeout = setTimeout( () => {
      navigate('/')
    },2000)
  },[])
  return (
    <div>NotFound</div>
  )
}

export default NotFound