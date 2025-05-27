import { useEffect, useState } from "react";
import api from "../services/api";

const useFetchPokemonData = (id) => {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await api.get(`/pokemon/${id}/`);
        const pokemon = response.data;
        setPokemonData(pokemon)

      } catch (error) {
        console.error(`Error fetching pokemon profile: ${error}`);
      }
    };

    fetchPokemon();
  }, [id]);

  return pokemonData;
};

export default useFetchPokemonData;
