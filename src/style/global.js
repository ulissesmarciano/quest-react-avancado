import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        transition: all 0.3s ease-in-out;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color};
        cursor: pointer;
    }
`;
