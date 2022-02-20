import { Box, CardActionArea, CardMedia, IconButton, Typography } from "@mui/material";
import { BoxStyle, CardContainerStyle, CardContentStyle } from "./styles";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import pizzaTest from '../../assets/pizza-romana.jpg'

export const PizzaCard = () => {

  function handleOpen() {
    console.log("Cliquei")
  }

  return (
    
      <CardContainerStyle>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" image={pizzaTest} alt="Teste" />
          <CardContentStyle>
            <Typography component="p" data-content="title">
              Pizza Romana
            </Typography>
            <Typography component="p" data-content="description">
            Tommato, mozarella di bufala
            </Typography>

            <BoxStyle>
            <Typography component="p" data-content="price">
            $7,50
            </Typography>
              <AddCircleIcon/>   
            </BoxStyle>  
            
          </CardContentStyle>
        </CardActionArea>
      </CardContainerStyle>
  
  );
}
