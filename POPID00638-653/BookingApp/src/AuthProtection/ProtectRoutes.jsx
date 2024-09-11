import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router'
import { useCookies } from 'react-cookie'

const ProtectRoutes = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['role']);
const location =  useLocation()
  return (
    cookies?.role === 'user' ? <Outlet/> :<Navigate to = 'login'  state={{from:location}}/>
  )
}

export default ProtectRoutes