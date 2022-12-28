import { createGlobalStyle } from 'styled-components'
import { font } from '../config/font'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  body {    
    padding: 0;
    margin: 0;
    font-family:  ${font.style.fontFamily}, sans-serif;
    font-size: 1.6rem;
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
    background-color: #1c1c1c;    
    color: #E4E9F7;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    overflow-x: auto;
    border-radius: .8rem;
  }

  * {
    box-sizing: border-box;
  }

  hr{
    border: 0;
    //opacity: .7;
    height: 1px;
    margin: 1.6rem 0;
    background: #333;
    background-image: -webkit-linear-gradient(left, #ccc, #333, #ccc);
    background-image: -moz-linear-gradient(left, #ccc, #333, #ccc);
    background-image: -ms-linear-gradient(left, #ccc, #333, #ccc);
    background-image: -o-linear-gradient(left, #ccc, #333, #ccc);
  }
`

export default GlobalStyle
