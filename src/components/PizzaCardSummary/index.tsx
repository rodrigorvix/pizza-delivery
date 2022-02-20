import { Box, Card, CardContent, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import {CardContentStyled, PizzaCardSummaryStyled } from "./style";

export const PizzaCardSummary = () => {
  return(
    <PizzaCardSummaryStyled>
        <CardContentStyled>
         <Box data-content="container-summary-pizza">
         <Typography component="p" data-content="title">
            Pizza Romana
          </Typography>

          <TextField
            variant="standard"
            multiline
            maxRows={4}
            id="orderNotes"
            label="Order notes"
            name="orderNotes"
            // value={orderNotes}
            // onChange={handleChangeOrderNotes}
          />
         </Box>

          <Box data-content="container-summary-number-pizza">
            <Box data-content="container-number-pizzas">
              <IconButton  title='Remove number'>
                <RemoveCircleIcon />
              </IconButton>
              <Box data-content="number-pizzas">1</Box>
              <IconButton  title='Add number'>
                <AddCircleIcon/>
              </IconButton>
            </Box>
            <Box data-content="container-price">
              <span>$7,50</span>
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