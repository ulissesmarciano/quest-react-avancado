import { Link, useParams } from "react-router-dom"
import useFetchPokemonData from "../../hooks/useFetchPokemon"
import InfoTabScreen from "../../components/info-tab-screen"
import styled from "styled-components"

const Container = styled.main`
    padding: 1rem 2rem;
    background-color: aquamarine;
`

const NavLink = styled.div`
    display: flex;
    justify-content: end;
`

const BackLink = styled(Link)`
    transition: 0.3s;
    &:hover{
        text-shadow: 1px 1px 5px ${({theme}) => theme.color};

    }
`

const PokemonPage = () => {
    const { id } = useParams()
    const pokemon = useFetchPokemonData(id)
    console.log(pokemon);


    return (
        <Container>
            <NavLink>
                <BackLink to="/">Voltar</BackLink>
            </NavLink>

            <div>
                <h2>{pokemon.name}</h2>
                <p>{pokemon.id}</p>
            </div>

            <img src={pokemon.sprites?.other.dream_world.front_default} />

            <ul>
                {pokemon.types?.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
            <InfoTabScreen />
        </Container>
    )
}


export default PokemonPage