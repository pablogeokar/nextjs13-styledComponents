import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'

import { light, dark } from '../config/themes'
import { boxShadows, fontSizes } from './../config/layout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={{ ...light, boxShadows: boxShadows, fontSizes: fontSizes }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
