import {
  Box,
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react'
import { BoxStyle, ButtonStyled, ModalCardStyle } from './style'

export const ModalPizza = (props: any) => {
  const [numberPizzas, setNumberPizzas] = useState(1)
  const [orderNotes, setOrderNotes] = useState('')

  const addOrder = () => {
    console.log("Pedido add");
    props.closeModal();
  }

  const addNumberPizzas = () => {
    if(numberPizzas === 10) {
      setNumberPizzas(10)
      return
    }
    setNumberPizzas(numberPizzas + 1)
  }

  const removeNumberPizzas = () => {
    if(numberPizzas === 1) {
      setNumberPizzas(1)
      return
    }
    setNumberPizzas(numberPizzas - 1)
  }

  const handleChangeOrderNotes = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOrderNotes((event.target as HTMLInputElement).value)
  }

  return (
    <Modal
      open={props.openModal}
      onClose={props.closeModal}
      aria-labelledby="modal-pizza"
      aria-describedby="modal pizza informations"
    >
      <ModalCardStyle>
        <CardMedia component="img" image={props.img} alt={'Teste'} />
        <CardContent>
          <Typography component="p" data-content="title">
            Pizza Romana
          </Typography>
          <Typography component="p" data-content="description">
            Tommato, mozarella di bufala
          </Typography>

          <TextField
            variant="outlined"
            multiline
            maxRows={4}
            fullWidth
            id="orderNotes"
            label="Order notes"
            name="orderNotes"
            value={orderNotes}
            onChange={handleChangeOrderNotes}
          />
          <BoxStyle>
            <Box data-content="container-number-pizzas">
              <IconButton onClick={removeNumberPizzas} title='Remove number'>
                <RemoveCircleIcon />
              </IconButton>
              <div data-content="number-pizzas">{numberPizzas}</div>
              <IconButton onClick={addNumberPizzas} title='Add number'>
                <AddCircleIcon/>
              </IconButton>
            </Box>
            <ButtonStyled variant="contained" onClick={addOrder}>
              <span>ADD</span>
              <span> ${(numberPizzas * 7.5).toFixed(2).replace('.',',')}</span>  
            </ButtonStyled>
          </BoxStyle>
        </CardContent>
       
      </ModalCardStyle>
    </Modal>
  )
}
