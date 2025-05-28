import { useParams } from "react-router-dom"
import useFetchPokemonData from "../../hooks/useFetchPokemon"
import InfoTabScreen from "../../components/InfoTabScreen"


const PokemonPage = () => {
    const { id } = useParams()
    const pokemon = useFetchPokemonData(id)
    console.log(pokemon);


    return (
        <Container>
            <NavLink>
                <BackLink to="/">Voltar</BackLink>
            </NavLink>

            <PokemonIdentitySection>
                <PokemonName>{pokemon.name}</PokemonName>
                <Id>{pokemon.id}</Id>
            </PokemonIdentitySection>
            <PokemonImgSection type={pokemon.types?.[0].type.name}>
                <Img src={pokemon.sprites?.other.dream_world.front_default} />
            </PokemonImgSection>
            <TypesListSection>
                {pokemon.types?.map((type, index) => (
                    <Types type={type.type.name} key={index}>{type.type.name}</Types>
                ))}
            </TypesListSection>
            <InfoTabScreen
                moves={pokemon.moves?.map((move, index) => (
                    <Move key={index}>{move.move.name}</Move>
                ))}
                abilities={pokemon.abilities?.map((ability, index) => (
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


export default PokemonPage