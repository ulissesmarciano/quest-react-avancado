import { Link, useParams } from "react-router-dom"
import useFetchPokemonData from "../../hooks/useFetchPokemon"

const PokemonPage = () => {
    const {id} = useParams()
    const pokemon = useFetchPokemonData(id)
    console.log(pokemon);
    
    
    return (
        <>
            <h2>PokemonPage</h2>
            <Link to="/">Voltar</Link>
        </>
    )
}


export default PokemonPage