import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyled";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
    background-color: #fff;
  }
  body {
    min-height: 100dvh;
    font-family: "Lexend Deca", sans-serif;
    button {
      font-family: "Lexend Deca", sans-serif;
    }
    input {
      font-family: "Lexend Deca", sans-serif;
      color: #9c9c9c;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &::placeholder {
        font-family: "Lexend Deca", sans-serif;
        color: #9c9c9c;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export default GlobalStyle;
