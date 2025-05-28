import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabHeaderContainer = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.li`
  padding: 0.6rem;
  width: 100%;
  border-radius: 0.2rem;
  text-align: center;

  font-weight: 500;
  font-size: 1.2rem;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2899f2;
  }
`;

export const TabContentContainer = styled.div`
  padding: 1rem;
`;

export const FistTabContent = styled.ul`
  display: grid;
  gap: 0.2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
