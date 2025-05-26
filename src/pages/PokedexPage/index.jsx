import { Link } from "react-router-dom"
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"
import PokemonCard from "../../components/pokemon-card"
import styled from "styled-components"

const PokedexPage = () => {
    const { pokemons } = useFetchAllPokemons()
    console.log("direto da pokedex", pokemons)
    return (
        <Container>
            <TitleContainer>
                <h1>Pokedex</h1>
            </TitleContainer>
            <Link to="/pokemon">Ir para Pokemon Page</Link>
            <ul>{pokemons?.map((pokemon, index) => (
                <li>
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        alt={pokemon.name}
                        src={pokemon.sprites.other.dream_world.front_default}
                        types={pokemon.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                        to={`/pokemon/${pokemon.id}`}
                    />
                </li>
            ))}</ul>

        </Container>
    )
}

const Container = styled.main`
    width: 100%;
`

const TitleContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default PokedexPage