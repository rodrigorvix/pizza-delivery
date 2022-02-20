import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, IconButton } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

import { GlobalContext } from '../../contexts/GlobalSorage'
import { convertPrice } from '../../utils/convertPrice'
import { MessageSuccess } from '../MessageSuccess'
import { PizzaCardSummary } from '../PizzaCardSummary'

import { OrderSummaryStyled } from './style'

interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?: number
  orderNotes?: string
  price?: number
  id?: number
}

export const OrderSummary = () => {
  const [openMessageSuccess, setOpenMessageSuccess] = useState(false)
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  const summationPrices = context.orderInfo
    .map((order: OrderInfoPropsType) => {
      return order.price && order.numberPizza
        ? order.price * order.numberPizza
        : 0
    })
    .reduce((acc: number, cur: number) => {
      return acc + cur
    })

  const handleCloseMessage = () => {
    setOpenMessageSuccess(false)
  }

  const handleConfirmOrder = async () => {
    const response = await fetch('./server/order.json')
    const data = await response.json()

    if (data.success) {
      context.setDeliveryTime(data.deliveryTime)
      setOpenMessageSuccess(true)
      return
    }
  }

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <OrderSummaryStyled>
      <h2>Order Summary</h2>

      {context.orderInfo.map((order: OrderInfoPropsType, index: number) => {
        return (
          <PizzaCardSummary
            key={order.id}
            namePizza={order.namePizza}
            numberPizza={order.numberPizza}
            orderNotes={order.orderNotes}
            price={order.price}
            id={order.id}
          />
        )
      })}

      <div data-content="order-amount">
        <IconButton onClick={handleBackHome} title="Back to home page">
          <ArrowCircleLeftIcon />
        </IconButton>

        <div>
          <span>Order amount: </span>
          <span>{convertPrice(summationPrices)}</span>
        </div>
      </div>

      <div data-content="button">
        <Button variant="contained" onClick={handleConfirmOrder}>
          CONFIRM THE ORDER
        </Button>
      </div>

      <MessageSuccess open={openMessageSuccess} close={handleCloseMessage} />
    </OrderSummaryStyled>
  )
}
