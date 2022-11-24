import { createGlobalStyle } from 'styled-components' ;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 16px;
  }
  img {
    user-select: none;
  }
  .transitionin {
    animation: exit 0.25s ease-in;
  }
`;
