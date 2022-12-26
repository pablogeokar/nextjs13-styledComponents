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
    color: ${({ theme }) => theme.colors.gray};    
  }

  body::-webkit-scrollbar {
    width: .8em;
  }
 
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: #979696;
    outline: 1px solid slategray;
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
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  * {
    box-sizing: border-box;
  }

  hr{
    opacity: .9;
  }
`

export default GlobalStyle
