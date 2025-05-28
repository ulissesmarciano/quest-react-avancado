import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin: 1rem;
  padding: 0.2rem 1rem;

  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 0.4rem;
  border: none;

  font-size: 1rem;
  color: ${({ theme }) => theme.buttonColor};

  transition: 0.3s;

  &:hover {
    padding: 0.2rem 1.2rem;
    background-color: #2899f2;
    color: #fff;
  }
`;
