import { Card, CardContent } from "@mui/material";

import styled from "styled-components";

export const CardContainerStyle = styled(Card)`
  
  height: 285px;
  width: 160px;
  padding: 0.625rem;

 
  &.MuiPaper-root {
    /* box-shadow: 1px 1px 3px #c5c6c0, -1px 1px 3px #c5c6c0; */
    border-radius: 1rem;
    box-shadow: none;
   
  }
  img {
    height: 140px;
    box-shadow: 2px 2px 2px var(--gray),2px -2px 2px var(--gray),-2px -2px 2px var(--gray), -2px 2px 2px var(--gray);
    border-radius: 50%;
  }
`;

export const CardContentStyle = styled(CardContent)`
  margin-top: 0.5rem;

  &.MuiCardContent-root {
    padding: 0;
   
  }

  p[data-content="title"],
  p[data-content="description"],
  p[data-content="price"] {
    font-family: 'Open Sans', sans-serif;
  }


  p[data-content="title"] {
    color: var(--black-700);
    font-size: 1.125rem;
    font-weight: 500;
  }
  p[data-content="description"] {
    color:var(--gray);
    font-size: 0.875rem;
    font-weight: 400;
  }
  p[data-content="price"] {
    margin-top: 0.75rem;
    color:var(--black-700);
    font-size: 1.75rem;
    font-weight: 500;
  }
`;

