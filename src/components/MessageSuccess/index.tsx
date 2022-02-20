import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import { GlobalContext } from '../../contexts/GlobalSorage'

import { MessageSuccessStyled } from './style'

interface MessageSuccessPropsType {
  open: boolean
  close: () => void
}

export const MessageSuccess = (props: MessageSuccessPropsType) => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  const goHomePage = () => {
    props.close()
    context.setOrderInfo([])
    context.setDeliveryTime(0)
    navigate('/')
  }

  return (
    <MessageSuccessStyled
      open={props.open}
      aria-labelledby="message-successs"
      aria-describedby="Message success order"
    >
      <DialogTitle id="message-success-title">Success !!!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your order will be delivered in{' '}
          <span>{context.deliveryTime / 60000} minutes</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={goHomePage}>Back to home page</Button>
      </DialogActions>
    </MessageSuccessStyled>
  )
}
