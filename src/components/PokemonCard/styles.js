import styled from "styled-components";
import { pokemonTypeColors } from "../../constants/colors";

export const Container = styled.li`
  height: 250px;
  margin-bottom: 1rem;
  border-bottom: 2px solid #8f8f8f;
  border-radius: 1rem;
`;

export const ImageBackground = styled.div`
  height: 170px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ type }) => pokemonTypeColors[type] || "gray"};
  border-radius: 1rem 1rem 0 0;
`;

export const Avatar = styled.img`
  height: 120px;
`;
export const PokemonName = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem;

  text-transform: capitalize;
  font-size: 1rem;
`;
