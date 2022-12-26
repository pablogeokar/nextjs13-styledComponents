import { createGlobalStyle } from 'styled-components'
import { font } from '../config/font'

const GlobalStyle = createGlobalStyle`
  html,
  body {    
    padding: 0;
    margin: 0;
    font-family:  ${font.style.fontFamily}, sans-serif;
    font-size: 16px;
    background:  ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};    
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;     
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  pre{
    margin: 0;
    padding: 16px;
    background-color: #fff;
    width: 800px;
    color: #4e4e4e;
    border: solid 1px #ccc;
  }

  * {
    box-sizing: border-box;
  }

  hr{
    opacity: .9;
  }
`

export default GlobalStyle
