import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRouter'
import { Home } from '../pages/Home'
import { OrderSummaryPage } from '../pages/OrderSummaryPage'

export const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/order" element={<OrderSummaryPage />} /> */}

          <Route path="/order" element={<PrivateRoute />}>
            <Route path="/order" element={<OrderSummaryPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
