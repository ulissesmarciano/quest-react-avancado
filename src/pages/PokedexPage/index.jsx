import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"
import PokemonCard from "../../components/pokemon-card"
import styled from "styled-components"
import { useState } from "react"
import Button from "../../components/button"

const Container = styled.main`
    max-width: 1280px;
    margin: 1rem;
    padding: .4rem;
    text-align: center;

    border-radius: 1rem;

    @media(min-width: 640px){
        margin: 2rem;
    }
    @media(min-width: 1357px){
        margin: 2rem auto;
    }

`

const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;

    @media(min-width: 480px){
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    @media(min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }
`


const PokedexPage = () => {
    const { pokemons } = useFetchAllPokemons()
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(10);

    const verMais = () => {
        setQuantidadeVisivel((prev) => prev + 10)
    }

    return (
        <>
            <Container>
                <ListContainer>{pokemons.slice(0, quantidadeVisivel).map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        alt={pokemon.name}
                        src={pokemon?.sprites?.other?.dream_world?.front_default}
                        to={`/pokemon/${pokemon.id}`}
                        type={pokemon.types[0].type.name}
                    />
                ))}</ListContainer>
                {quantidadeVisivel < pokemons.length && (
                    <Button onClick={verMais} textInButton="Ver Mais" />
                )}
            </Container>
        </>
    )
}

export default PokedexPage