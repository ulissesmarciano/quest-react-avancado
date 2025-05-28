import { useState } from "react"
import { Container, ListContainer } from "./styles"
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"

import PokemonCard from "../../components/PokemonCard"
import Button from "../../components/Button"

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