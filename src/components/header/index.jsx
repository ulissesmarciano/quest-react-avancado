import PokedexLogo from "../../assets/header-logo.png"
import { ThemeTogglerButton } from "../ThemeTogglerButton"
import { Container, HeaderWrapper, Logo } from "./styles"


const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={PokedexLogo} />
        <ThemeTogglerButton toggleTheme={toggleTheme} currentTheme={currentTheme} />
      </HeaderWrapper>
    </Container>
  )
}

export default Header