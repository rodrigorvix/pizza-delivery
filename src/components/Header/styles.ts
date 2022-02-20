import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 7rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  box-shadow: 4px 4px 4px var(--black-300);
  background-color: var(--red);
  color: white;

  h1 {
    font-size: 2.75rem;
    text-transform: uppercase;
    color: white;
    text-shadow: 0px 2px 2px var(--black-500);
  }

  h2 {
    font-weight: normal;
    font-size: 1.25rem;
  }
`
