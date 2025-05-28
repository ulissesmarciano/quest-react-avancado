import { useEffect, useState } from "react";
import api from "../services/api";

const useFetchPokemonData = (id) => {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonResponse = await api.get(`/pokemon/${id}/`);
        const pokemon = pokemonResponse.data;

        const abilitiesData = await Promise.all(
          pokemon.abilities.map(async (abilityObj) => {
            const abilityResponse = await api.get(abilityObj.ability.url);
            const abilityDetails = abilityResponse.data;

            const effectEntryEn = abilityDetails.effect_entries.find(
              (entry) => entry.language.name === "en"
            );

            return {
              name: abilityDetails.name,
              description: effectEntryEn
                ? effectEntryEn.effect
                : "No description in English.",
            };
          })
        );

        setPokemonData({
          ...pokemon,
          abilities: abilitiesData,
        });
      } catch (error) {
        console.error(`Error fetching pokemon profile: ${error}`);
      }
    };

    fetchPokemon();
  }, [id]);

  return pokemonData;
};

export default useFetchPokemonData;
