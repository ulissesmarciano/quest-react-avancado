import { Link, useParams } from "react-router-dom"

const PokemonPage = () => {
    const {id} = useParams()
    console.log(id);
    
    return (
        <>
            <h2>PokemonPage</h2>
            <Link to="/">Voltar</Link>
        </>
    )
}


export default PokemonPage