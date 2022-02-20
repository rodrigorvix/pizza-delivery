import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { MessageSuccess } from '../MessageSuccess'
import { PizzaCardSummary } from '../PizzaCardSummary'
import { OrderSummaryStyled } from './style'

export const OrderSummary = () => {
  const [openMessageSuccess, setOpenMessageSuccess] = useState(false);

  const handleCloseMessage = () => {
    setOpenMessageSuccess(false);
  }

  const confirmOrder = () => {
    setOpenMessageSuccess(true);
  }


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
        <Button variant="contained" onClick={confirmOrder}>CONFIRM THE ORDER</Button>
      </div>

    <MessageSuccess
      open={openMessageSuccess}
      close={handleCloseMessage}
    />

    </OrderSummaryStyled>
  )
}
