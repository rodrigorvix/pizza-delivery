import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  z-index: 100;

  background-color: var(--red);
  box-shadow: -4px -4px 4px var(--black-300);
  color: white;
  text-align: center;
  padding: 1rem;

  p {
    font-size: 1rem;
    text-shadow: 0px 2px 2px var(--black-500);
    font-weight: 700;

    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
