import { Link } from "react-router-dom"
import styled from "styled-components"
import { pokemonTypeColors } from "../../constants/colors"

const Container = styled.li`
    height: 250px;
    margin-bottom: 1rem;
    border-bottom: 2px solid #8f8f8f; 
    border-radius: 1rem;
`

const ImageBackground = styled.div`
    height: 170px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${({ type }) => pokemonTypeColors[type] || "gray"};    
    border-radius: 1rem 1rem 0 0;
`

const Avatar = styled.img`
    height: 120px;
`
const PokemonName = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 1rem;

    text-transform: capitalize;
    font-size: 1rem;

`

const PokemonCard = ({ name, src, alt, to, type }) => {
    return (
        <Link to={to}>
            <Container>
                <ImageBackground type={type} >
                    <Avatar src={src} alt={`Imagem de ${alt}`} />
                </ImageBackground>
                <PokemonName>
                    <h3>{name}</h3>
                </PokemonName>
            </Container>
        </Link>
    )
}

export default PokemonCard