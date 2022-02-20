import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'

import { GlobalContext } from '../../contexts/GlobalSorage'

export const PrivateRoute = () => {
  const context = useContext(GlobalContext)

  return context.orderInfo.length > 0 ? <Outlet /> : <Navigate to="/" />
}
