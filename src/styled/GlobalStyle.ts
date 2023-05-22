import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #000;
    color: #57585a;
    font-family: 'Inter', sans-serif;
    line-height: 25px;
    font-size: calc(14px + 2 * (100vw / 1700));


  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

`;
