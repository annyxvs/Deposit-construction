import styled, { createGlobalStyle } from 'styled-components'
import { styles } from './styles';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    background-color: ${styles.colors.primary[100]};
  }
  a{
    text-decoration: none;
  }
  input{
    outline: none;
  }
`

export default GlobalStyle;