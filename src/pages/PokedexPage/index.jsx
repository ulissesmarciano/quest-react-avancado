import { Link } from "react-router-dom"
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"
import PokemonCard from "../../components/pokemon-card"

const PokedexPage = () => {
    const { pokemons } = useFetchAllPokemons()
    console.log("direto da pokedex", pokemons)
    return (
        <>
            <h1>Pokedex</h1>
            <Link to="/pokemon">Ir para Pokemon Page</Link>
            <ul>{pokemons?.map((pokemon, index) => (
                <PokemonCard 
                    key={index}
                    name={pokemon.name}
                    alt={pokemon.name}
                    src={pokemon.sprites.other.dream_world.front_default}
                    types={pokemon.types.map((type, index) => (
                        <li key={index}>{type.type.name}</li>
                    ))}
                />
            ))}</ul>

        </>
    )
}

export default PokedexPage