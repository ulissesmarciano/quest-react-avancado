import { Link } from "react-router-dom"

const PokedexPage = () => {
    return (
        <>
            <h1>Pokedex</h1>
            <Link to="/pokemon">Ir para Pokemon Page</Link>
        </>
    )
}

export default PokedexPage