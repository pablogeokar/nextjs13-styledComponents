import { createGlobalStyle } from 'styled-components'
import { Poppins } from '@next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '400'],
  variable: '--font'
})

const GlobalStyle = createGlobalStyle`
  html,
  body {    
    padding: 0;
    margin: 0;
    font-family:  ${font.style.fontFamily}, 'Trebuchet MS', sans-serif;    
    font-size: 16px;
    background:  ${({ theme }) => theme.colors.body};  
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

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
