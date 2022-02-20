import { Box, Card, CardContent } from '@mui/material'

import styled from 'styled-components'

export const CardContainerStyle = styled(Card)`
  height: 400px;
  width: 170px;
  padding: 0.625rem;
  text-align: center;

  &.MuiPaper-root {
    border-radius: 1rem;
    box-shadow: none;

    .MuiButtonBase-root {
      height: 100%;
    }
  }
  img {
    height: 140px;
    box-shadow: 2px 2px 2px var(--gray), 2px -2px 2px var(--gray),
      -2px -2px 2px var(--gray), -2px 2px 2px var(--gray);
    border-radius: 50%;
  }
`

export const CardContentStyle = styled(CardContent)`
  margin-top: 0.5rem;

  &.MuiCardContent-root {
    padding: 0;
  }

  p[data-content='title'],
  p[data-content='description'],
  p[data-content='price'] {
    font-family: 'Open Sans', sans-serif;
  }

  p[data-content='title'] {
    color: var(--black-700);
    font-size: 1.125rem;
    font-weight: 500;
  }
  p[data-content='description'] {
    display: flex;
    flex-direction: column;

    height: 150px;

    color: var(--gray);
    font-size: 0.875rem;
    font-weight: 400;

    span[data-content='title-description'] {
      margin: 0.5rem 0;
      font-weight: 500;
    }
  }
  p[data-content='price'] {
    color: var(--black-700);
    font-size: 1.75rem;
    font-weight: 700;
  }
`

export const BoxStyle = styled(Box)`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.75rem;
    color: var(--green);
  }
`
