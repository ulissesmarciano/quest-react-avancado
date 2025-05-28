import { useState } from "react"
import { Container, ListContainer, LoaderContainer } from "./styles"
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons"

import PokemonCard from "../../components/PokemonCard"
import Button from "../../components/Button"
import Loader from "../../components/Loader"

const PokedexPage = () => {
    const { pokemons, loading } = useFetchAllPokemons()
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(10);

    const verMais = () => {
        setQuantidadeVisivel((prev) => prev + 10)
    }

    return (
        <>
            {
                loading ? (
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                ) : (
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
                )
            }

        </>
    )
}

export default PokedexPage