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
import { useContext, useState } from 'react'
import { BoxStyle, ButtonStyled, ModalCardStyle } from './style'
import { GlobalContext } from '../../contexts/GlobalSorage';
import { convertPrice } from '../../utils/convertPrice';

interface ModalPizzaPropsType {
  openModal: boolean,
  closeModal:() => void,
  img:string,
  name:string,
  price:number,
  ingredients: Array<string>,
}


export const ModalPizza = (props: ModalPizzaPropsType) => {
  const [numberPizzas, setNumberPizzas] = useState(1)
  const [orderNotes, setOrderNotes] = useState('')

  const context = useContext(GlobalContext);

  const addOrder = () => {
    const order = {
      namePizza: props.name,
      numberPizza: numberPizzas,
      orderNotes: orderNotes,
      price: props.price,
    }
    context.setOrderInfo([...context.orderInfo, order]);
    
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
        <CardMedia component="img" image={props.img} alt={`Pizza ` + props.name} />
        <CardContent>
          <Typography component="p" data-content="title">
          {`Pizza ` + props.name}
          </Typography>
          <Typography component="p" data-content="description">
           {
             props.ingredients
             .map((item:string, index: number) => {
               if(index === 0) {
                 item = item[0].toUpperCase() + item.substring(1);
               }
               return item;
             })
             .toString()
           }
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
              <span>{convertPrice((numberPizzas * props.price))}</span>  
            </ButtonStyled>
          </BoxStyle>
        </CardContent>
       
      </ModalCardStyle>
    </Modal>
  )
}
