import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"
import PokemonCard from "../../components/pokemon-card"
import styled from "styled-components"
import { useState } from "react"

const PokedexPage = () => {
    const { pokemons } = useFetchAllPokemons()
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(10);

    const verMais = () => {
        setQuantidadeVisivel((prev) => prev + 10)
    }

    console.log("direto da pokedex", pokemons)
    return (
        <Container>
            <TitleContainer>
                <h1>Pokedex</h1>
            </TitleContainer>
            <ul>{pokemons.slice(0, quantidadeVisivel).map((pokemon, index) => (
                <li>
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        alt={pokemon.name}
                        src={pokemon.sprites.other.dream_world.front_default}
                        to={`/pokemon/${pokemon.id}`}
                    />
                </li>
            ))}</ul>
            {quantidadeVisivel < pokemons.length && (
                <button onClick={verMais}>Ver mais</button> // CRIAR UM COMPONENTE GENÉRICO
            )}
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