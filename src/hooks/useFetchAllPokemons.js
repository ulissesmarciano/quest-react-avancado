import { useEffect, useState } from "react";
import api from "../services/api";

const useFetchAllPokemons = (limit = 151) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await api.get(`/pokemon?limit=${limit}`);

        const { results } = response.data;

        const pokemonList = await Promise.all(
          results.map(async (pokemon) => {
            const { id, types, sprites } = await getPokemonInfo(pokemon.url);

            return {
              name: pokemon.name,
              id,
              types,
              sprites,
            };
          })
        );
        setPokemons(pokemonList);
      } catch (error) {
        console.error(`Unknown error ${error}`);
      } finally {
        setLoading(false)
      }
    };

    const getPokemonInfo = async (url) => {
      const response = await api.get(url);
      const { id, types, sprites } = response.data;
      return { id, types, sprites };
    };

    getAllPokemons();
  }, [limit]);

  return { pokemons, loading };
};

export default useFetchAllPokemons;
