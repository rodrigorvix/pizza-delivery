import { useContext } from 'react'

import { Box, IconButton, TextField, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { convertPrice } from '../../utils/convertPrice'
import { GlobalContext } from '../../contexts/GlobalSorage'

import { CardContentStyled, PizzaCardSummaryStyled } from './style'

interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?: number
  orderNotes?: string
  price?: number
  id?: number
}

export const PizzaCardSummary = (props: OrderInfoPropsType) => {
  const context = useContext(GlobalContext)

  const handleRemoveOrder = (id?: number) => {
    context.setOrderInfo(context.orderInfo.filter((order) => order.id !== id))
  }

  return (
    <PizzaCardSummaryStyled>
      <CardContentStyled>
        <Box data-content="container-summary-pizza">
          <Typography component="p" data-content="title">
            {`Pizza ` + props.namePizza}
          </Typography>

          <TextField
            variant="standard"
            multiline
            maxRows={4}
            id="orderNotes"
            label="Order notes"
            name="orderNotes"
            value={props.orderNotes}
            disabled
          />
        </Box>

        <Box data-content="container-summary-number-pizza">
          <Box data-content="container-number-pizzas">
            <span>Number of pizzas:</span>
            <Box data-content="number-pizzas">{props.numberPizza}</Box>
          </Box>
          <Box data-content="container-price">
            {props.price && convertPrice(props.price)}
          </Box>
        </Box>

        <Box data-content="remove-order">
          <IconButton
            title="Remove order"
            onClick={() => handleRemoveOrder(props.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </CardContentStyled>
    </PizzaCardSummaryStyled>
  )
}
