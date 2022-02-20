import styled from 'styled-components'

export const OrderSummaryStyled = styled.main`
  h2 {
    margin: 1rem 0;
    text-align: center;
    font-size: 2rem;
    height: 4rem;
    border-bottom: 1px solid var(--black-300);
  }

  div[data-content='order-amount'] {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.25rem;

      &:last-child {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }

  div[data-content='button'] {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    .MuiButton-root {
      background-color: var(--green);

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
