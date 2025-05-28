import { useParams } from "react-router-dom"
import { LoaderContainer, Container, Ability, BackLink, Id, Img, Move, NavLink, PokemonIdentitySection, PokemonImgSection, PokemonName, Types, TypesListSection } from "./styles"
import useFetchPokemonData from "../../hooks/useFetchPokemon"
import InfoTabScreen from "../../components/InfoTabScreen"
import Loader from "../../components/Loader"

const PokemonPage = () => {
    const { id } = useParams()
    const { pokemonData, loading } = useFetchPokemonData(id)

    return (
        <>
            {
                loading ? (
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                ) : (
                    <Container>
                        <NavLink>
                            <BackLink to="/">Voltar</BackLink>
                        </NavLink>

                        <PokemonIdentitySection>
                            <PokemonName>{pokemonData.name}</PokemonName>
                            <Id>{pokemonData.id}</Id>
                        </PokemonIdentitySection>
                        <PokemonImgSection type={pokemonData.types?.[0].type.name}>
                            <Img src={pokemonData.sprites?.other.dream_world.front_default} />
                        </PokemonImgSection>
                        <TypesListSection>
                            {pokemonData.types?.map((type, index) => (
                                <Types type={type.type.name} key={index}>{type.type.name}</Types>
                            ))}
                        </TypesListSection>
                        <InfoTabScreen
                            moves={pokemonData.moves?.map((move, index) => (
                                <Move key={index}>{move.move.name}</Move>
                            ))}
                            abilities={pokemonData.abilities?.map((ability, index) => (
                                <li key={index}>
                                    <Ability>
                                        <h4>{ability.name}</h4>
                                        <p>{ability.description}</p>
                                    </Ability>
                                </li>
                            ))}
                        />
                    </Container>
                )
            }
        </>
    )
}


export default PokemonPage