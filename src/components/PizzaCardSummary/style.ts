import { Card, CardContent } from '@mui/material'
import styled from 'styled-components'

export const PizzaCardSummaryStyled = styled(Card)`
  min-height: 160px;
  width: 100%;
  border-bottom: 1px solid var(--black-300);

  & .MuiCardContent-root:last-child {
    padding-bottom: 0.5rem;
  }
`

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  p[data-content='title'] {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
  }

  div[data-content='container-summary-pizza'] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    textarea {
      width: 320px;
    }
  }

  div[data-content='container-summary-number-pizza'] {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    div[data-content='container-number-pizzas'] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      button {
        padding: 0;
      }

      span {
        font-size: 1rem;
        font-weight: 700;
      }

      div[data-content='number-pizzas'] {
        font-size: 1rem;
      }
    }

    div[data-content='container-price'] {
      span {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }

  div[data-content='remove-order'] {
    svg {
      color: var(--red);
    }
  }
`
