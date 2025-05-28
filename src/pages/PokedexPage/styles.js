import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  margin: 1rem;
  padding: 0.4rem;
  text-align: center;

  border-radius: 1rem;

  @media (min-width: 640px) {
    margin: 2rem;
  }
  @media (min-width: 1357px) {
    margin: 2rem auto;
  }
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
