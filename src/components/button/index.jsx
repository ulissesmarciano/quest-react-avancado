import styled from "styled-components"

const ButtonContainer = styled.button`
    margin: 1rem;
    padding: 0.2rem 1rem;

    cursor: pointer;
    background-color: ${({ theme }) => theme.buttonBackground};
    border-radius: 0.4rem;
    border: none;

    font-size: 1rem;
    color: ${({ theme }) => theme.buttonColor};

    transition: 0.3s;

    &:hover {
        padding: 0.2rem 1.2rem;
        background-color: #2899F2;
        color: #fff;
    }

`
const Button = ({ onClick, textInButton }) => {
    return (
        <ButtonContainer onClick={onClick}>{textInButton}</ButtonContainer>
    )
}

export default Button