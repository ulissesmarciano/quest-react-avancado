import { Link, useParams } from "react-router-dom"
import useFetchPokemonData from "../../hooks/useFetchPokemon"
import InfoTabScreen from "../../components/info-tab-screen"
import { pokemonTypeColors } from "../../constants/colors"
import styled from "styled-components"

const Container = styled.main`
    height: calc(100vh - 84.97px);

    padding: 1rem 2rem;

    @media(min-width: 640px){
        height: calc(100vh - 116.96px);
    }
`

const NavLink = styled.div`
    display: flex;
    justify-content: end;
`

const BackLink = styled(Link)`
    transition: 0.3s;
    &:hover{
        text-shadow: 1px 1px 5px ${({ theme }) => theme.color};

    }
`

const PokemonIdentitySection = styled.div`
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PokemonName = styled.h2`
    text-transform: capitalize;
    font-weight: bold;
`

const Id = styled.p`
    font-weight: 600;
`
const Img = styled.img`
    height: 200px;
    width: auto;
`
const PokemonImgSection = styled.div`
    max-width: 640px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
    background-color: ${({ type }) => pokemonTypeColors[type] || "gray"}; 

`

const TypesListSection = styled.ul`
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 6rem;
`

const Types = styled.li`
    padding: 0.2rem 1rem;
    
    text-transform: capitalize;
    color: #fff;
    background-color: ${({ type }) => pokemonTypeColors[type] || "gray"};
    border-radius: 1rem;
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
            <InfoTabScreen />
        </Container>
    )
}


export default PokemonPage