import { Box, Button } from '@mui/material'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalSorage'
import { MessageSuccess } from '../MessageSuccess'
import { PizzaCardSummary } from '../PizzaCardSummary'
import { OrderSummaryStyled } from './style'

interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?:number,
  orderNotes?: string,
  price?: number,
  
}

export const OrderSummary = () => {
  const [openMessageSuccess, setOpenMessageSuccess] = useState(false);
  const context = useContext(GlobalContext);

  const handleCloseMessage = () => {
    setOpenMessageSuccess(false);
  }

  const confirmOrder = () => {
    setOpenMessageSuccess(true);
  }

  return (
    <OrderSummaryStyled>
      <h2>Order Summary</h2>

      {context.orderInfo.map((order: OrderInfoPropsType, index:number ) => {
        return(
          <PizzaCardSummary 
          key={index} 
          namePizza={order.namePizza}
          numberPizza={order.numberPizza}
          orderNotes={order.orderNotes}
          price={order.price}
          />
        );
      })}
     
      
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
