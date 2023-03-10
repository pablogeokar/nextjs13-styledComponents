import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'
import Head from 'next/head'

import { light, dark } from '../config/themes'
import { boxShadows, fontSizes } from './../config/layout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={{ ...light, boxShadows: boxShadows, fontSizes: fontSizes }}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}