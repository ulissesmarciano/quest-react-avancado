import styled from "styled-components";

export const Container = styled.header`
  padding: 0.2rem 1rem;

  background-color: #2899f2;
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 120px;
  height: 100%;

  @media (min-width: 640px) {
    width: 140px;
  }
`;
