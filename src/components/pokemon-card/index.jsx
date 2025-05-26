const PokemonCard = ({name, src, types, alt}) => {
    return (
        <li>
            <img src={src} alt={`Imagem de ${alt}`} />
            <div>
                <h3>{name}</h3>
                <ul>
                    {types}
                </ul>
            </div>
        </li>
    )
}

export default PokemonCard