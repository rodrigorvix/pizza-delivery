import styled from "styled-components";

export const HeaderStyled = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
  font-size: 3.25rem;
  text-transform: uppercase;
  color: var(--red);
  text-shadow: 0px 2px 2px var(--black-500);
  }

  h2 {
    font-weight: normal;
    font-size: 1.5rem;
  }

`;