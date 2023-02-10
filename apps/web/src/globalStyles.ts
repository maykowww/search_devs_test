import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #171923;
    --primary: #8C19D2;
    --gray: #4A5568;
    --gray-light: #A0AEC0;
    --gray-dark: #0000005C;
    --border-gray-color: #E2E8F0;
    --background-light: #FCFCFC;
    --danger: #feb8bb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Inter', sans-serif;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  
`;
