import { Link } from "react-router-dom"
import { Container, Avatar, ImageBackground, PokemonName } from "./styles"

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
