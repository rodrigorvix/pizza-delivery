import { IconButton } from '@mui/material'
import styled from 'styled-components'

export const OrderCartStyled = styled(IconButton)`
  &.MuiButtonBase-root {
    background-color: var(--green);
    border-radius: 1rem;
    color: white;
    width: 140px;
    box-shadow: 4px 4px 4px var(--black-300), box-shadow: -4px -4px 4px var(--black-300);;

    position: fixed;
    bottom: 58px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 200;

    &:hover{
      background-color: var(--green);
      filter: brightness(0.8);
    }
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
  svg {
    margin-right: 1rem;
    font-size: 1.75rem;
  }
`
