import { ButtonContainer } from './styles'

const Button = ({ onClick, textInButton }) => {
    return (
        <ButtonContainer onClick={onClick}>{textInButton}</ButtonContainer>
    )
}

export default Button
