import styled from "styled-components";
import { Link } from "react-router-dom";
import { pokemonTypeColors } from "../../constants/colors";

export const LoaderContainer = styled.div`
  min-height: calc(100vh - 59.38px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.main`
  height: calc(100vh - 84.97px);

  padding: 0.4rem 2rem;

  @media (min-width: 640px) {
    height: calc(100vh - 116.96px);
  }
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: end;
`;

export const BackLink = styled(Link)`
  transition: 0.3s;
  &:hover {
    text-shadow: 1px 1px 5px ${({ theme }) => theme.color};
  }
`;

export const PokemonIdentitySection = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
`;

export const Id = styled.p`
  font-weight: 600;
`;
export const Img = styled.img`
  height: 200px;
  width: auto;
`;
export const PokemonImgSection = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  background-color: ${({ type }) => pokemonTypeColors[type] || "gray"};
`;

export const TypesListSection = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
`;

export const Types = styled.li`
  padding: 0.2rem 1rem;

  text-transform: capitalize;
  color: #fff;
  background-color: ${({ type }) => pokemonTypeColors[type] || "gray"};
  border-radius: 1rem;
`;

export const Move = styled.li`
  padding: 0.2rem;
  transition: 0.3s;
  text-align: center;

  text-transform: capitalize;
  font-weight: 400;

  &:hover {
    box-shadow: 1px 1px 1px 1px #888888;
  }
`;

export const Ability = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h4 {
    text-transform: capitalize;
  }

  p {
    line-height: 1.6rem;
  }
`;
