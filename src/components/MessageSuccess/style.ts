import { Dialog } from '@mui/material'
import styled from 'styled-components'

export const MessageSuccessStyled = styled(Dialog)`
  .MuiPaper-root {
    width: 340px;

    h2 {
      font-size: 3rem;
      text-align: center;
      color: var(--green);
      text-transform: uppercase;
      text-shadow: 0px 2px 2px var(--black-300);
    }
  }

  .MuiDialogContent-root {
    p {
      font-size: 1rem;
      color: var(--black-500);
    }
  }
  .MuiButton-root {
    color: var(--green);

    &:hover {
      filter: brightness(0.8);
    }
  }
`
