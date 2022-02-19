import { CardActionArea, CardMedia, Typography } from "@mui/material";
import { CardContainerStyle, CardContentStyle } from "./styles";

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
            <Typography component="p" data-content="price">
            $7,50
            </Typography>
          </CardContentStyle>
        </CardActionArea>
      </CardContainerStyle>
  
  );
}
