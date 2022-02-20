import { CardActionArea, CardMedia, Typography } from "@mui/material";
import { BoxStyle, CardContainerStyle, CardContentStyle } from "./styles";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import pizzaTest from '../../assets/pizza-romana.jpg'
import { useState } from "react";
import { ModalPizza } from "../ModalPizza";

export const PizzaCard = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  return (
    <>
   
    
      <CardContainerStyle>
        <CardActionArea onClick={handleOpenModal}>
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
              <AddCircleIcon aria-label="Add order'"/>   
            </BoxStyle>  
            
          </CardContentStyle>
        </CardActionArea>
      </CardContainerStyle>

      <ModalPizza 
        openModal={openModal}
        closeModal={handleCloseModal}
        img={pizzaTest}
      />
      </>
  );
}
