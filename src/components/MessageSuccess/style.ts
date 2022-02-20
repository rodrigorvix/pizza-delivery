import { Dialog } from '@mui/material'
import styled from 'styled-components'

export const MessageSuccessStyled = styled(Dialog)`
 
  .MuiPaper-root {
    width: 360px;
    

    h2 {
      font-family: 'Open Sans', sans-serif;
      font-size: 3rem;
      text-align: center;
      color: var(--green);
      text-transform: uppercase;
      text-shadow: 0px 2px 2px var(--black-300);
    }
  }

  .MuiDialogContent-root {
    
    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      color: var(--black-500);
    }
    span {
      font-size: 0.875rem;
      font-weight: 700;
    }
  }
  .MuiButton-root {
    font-family: 'Open Sans', sans-serif;
    color: var(--green);
    font-weight: 700;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
