import styled from "styled-components"
import PokedexLogo from "../../assets/header-logo.png"
import { ThemeTogglerButton } from "../theme-toggler-button"

const Container = styled.header`

  padding: 1rem;

  background-color: #2899F2;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  
`
const Logo = styled.img`
  width: 120px;
  height: 100%;

  @media (min-width: 640px) {
    width: 140px;
  }
`
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