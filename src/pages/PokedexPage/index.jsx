import { Link } from "react-router-dom"
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"

const PokedexPage = () => {
    const { pokemons } = useFetchAllPokemons()
    console.log("direto da pokedex", pokemons)
    return (
        <>
            <h1>Pokedex</h1>
            <Link to="/pokemon">Ir para Pokemon Page</Link>
            <ul>{pokemons?.map((pokemon, index) => (
                <li key={index}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={`Imagem de ${pokemon.name}`} />
                    <div>
                        <h3>{pokemon.name}</h3>
                        <ul>
                            {pokemon.types.map((type, index) => (
                                <li key={index}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}</ul>

        </>
    )
}

export default PokedexPage