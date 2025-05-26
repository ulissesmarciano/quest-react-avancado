import { Link } from "react-router-dom"

const PokemonCard = ({ name, src, types, alt, to }) => {
    return (
        <Link to={to}>
            <img src={src} alt={`Imagem de ${alt}`} />
            <div>
                <h3>{name}</h3>
                <ul>
                    {types}
                </ul>
            </div>
        </Link>
    )
}

export default PokemonCard