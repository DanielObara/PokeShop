import { createGlobalStyle } from 'styled-components';
import pokemonBackground from '../assets/pokemonBackground.png';

export default createGlobalStyle`
/* Zeramos algumas propriedades pois algumas já vem por padrão preenchidas
ex: o body ja tem por padrão uma margin de 10px */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${pokemonBackground}) ;

  }
    -webkit-font-smoothing: antialiased
  body, input, button {
    font: 16px "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
