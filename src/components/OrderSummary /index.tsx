import { Box, Button } from '@mui/material'
import { PizzaCardSummary } from '../PizzaCardSummary'
import { OrderSummaryStyled } from './style'

export const OrderSummary = () => {
  return (
    <OrderSummaryStyled>
      <h2>Order Summary</h2>
      <div>
        <PizzaCardSummary />
        <PizzaCardSummary />
        <PizzaCardSummary />
      </div>

      <div data-content="order-amount">
        <span>Order amount: </span>
        <span>$7,50</span>
      </div>

      <div data-content="button">
        <Button variant="contained">CONFIRM THE ORDER</Button>
      </div>
    </OrderSummaryStyled>
  )
}
