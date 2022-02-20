import styled from 'styled-components';

export const ContainerStyle = styled.div`
  margin: 7rem auto 3rem;
  max-width: 1280px;
  padding: 0 1.25rem; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media(max-width:720px){
    padding: 0rem; 
  }
`;