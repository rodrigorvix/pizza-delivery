import { Box, Button, Card } from "@mui/material";
import styled from "styled-components";

export const ModalCardStyle = styled(Card)`
  width: 500px;
  max-height: 700px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500;
  background: var(--black-500);
  box-shadow: 2px 2px 2px var(--gray),2px -2px 2px var(--gray),-2px -2px 2px var(--gray), -2px 2px 2px var(--gray);

  p[data-content="title"],
  p[data-content="description"]{
    font-family: 'Open Sans', sans-serif;
  }


  p[data-content="title"] {
    color: var(--black-700);
    font-size: 1.125rem;
    font-weight: 700;
  }
  p[data-content="description"] {
    color:var(--gray);
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
 
  img {
    box-shadow: 2px 2px 2px var(--gray);
  }

  @media(max-width:768px) {
    width: 80%;
    max-height: 650px;
  }
  
`;

export const BoxStyle = styled(Box)`
margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  div[data-content="container-number-pizzas"] {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    button {
      padding: 0;
    }

    div[data-content="number-pizzas"] {
      font-size: 1rem;
    }

    svg {
      font-size: 1.75rem;
      color: var(--green);
    }
  }
  .MuiButton-root {
    width: 150px;
    background-color: var(--red);
    color: white;
    flex-direction: column;
    
    span{
      font-size: 1.25rem;
      font-weight: 500;
    }


    &:hover {
      background-color: var(--red);
      filter: brightness(0.8);
    }
  }

 
`;

export const ButtonStyled = styled(Button)`
  background-color: var(--red);
  color: white;
`;