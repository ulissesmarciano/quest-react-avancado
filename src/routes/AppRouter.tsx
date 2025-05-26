import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PokedexPage from "../pages/PokedexPage"
import PokemonPage from "../pages/PokemonPage"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/pokemon" element={<PokemonPage />} />
            </Routes>
        </Router>
    )
}

export { AppRouter }