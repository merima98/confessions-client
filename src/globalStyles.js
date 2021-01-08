import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    }
`;
export default GlobalStyle;
