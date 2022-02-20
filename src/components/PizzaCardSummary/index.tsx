import { Box, Card, CardContent, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import {CardContentStyled, PizzaCardSummaryStyled } from "./style";
import { convertPrice } from "../../utils/convertPrice";


interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?:number,
  orderNotes?: string,
  price?: number,
  
}

export const PizzaCardSummary = (props:OrderInfoPropsType) => {
  return(
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
            // value={orderNotes}
            // onChange={handleChangeOrderNotes}
          />
         </Box>

          <Box data-content="container-summary-number-pizza">
            <Box data-content="container-number-pizzas">
              <IconButton  title='Remove number'>
                <RemoveCircleIcon />
              </IconButton>
              <Box data-content="number-pizzas">{props.numberPizza}</Box>
              <IconButton  title='Add number'>
                <AddCircleIcon/>
              </IconButton>
            </Box>
            <Box data-content="container-price">
             {props.price && props.numberPizza ? convertPrice((props.price * props.numberPizza)) : ''}
            </Box>
          </Box>

          <Box data-content="remove-order">
           <IconButton title="Remove order">
            <DeleteOutlineIcon/>
           </IconButton>
          </Box>

        </CardContentStyled>
       
      </PizzaCardSummaryStyled>

  );
}