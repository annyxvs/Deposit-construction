import styled, { createGlobalStyle } from 'styled-components'
import { styles } from './styles';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  input{
    outline: none;
  }
`

export default GlobalStyle;