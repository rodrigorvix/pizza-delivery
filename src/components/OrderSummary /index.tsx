import { Box, Button } from '@mui/material'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalSorage'
import { convertPrice } from '../../utils/convertPrice'
import { MessageSuccess } from '../MessageSuccess'
import { PizzaCardSummary } from '../PizzaCardSummary'
import { OrderSummaryStyled } from './style'

interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?:number,
  orderNotes?: string,
  price?: number,
  id?:number,
  
}

export const OrderSummary = () => {
  const [openMessageSuccess, setOpenMessageSuccess] = useState(false);
  const context = useContext(GlobalContext);

  const summationPrices = context.orderInfo
    .map((order:OrderInfoPropsType) => {
    return order.price && order.numberPizza ? order.price * order.numberPizza : 0;
  }).reduce((acc:number, cur:number) => {
    return acc + cur
  })
  
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
          key={order.id} 
          namePizza={order.namePizza}
          numberPizza={order.numberPizza}
          orderNotes={order.orderNotes}
          price={order.price}
          id={order.id}
          />
        );
      })}
     
      
      <div data-content="order-amount">
        <span>Order amount: </span>
        <span>{convertPrice(summationPrices)}</span>
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
