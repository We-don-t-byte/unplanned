import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionCache from '../lib/createEmotionCache'
import Layout from '../components/Layout'
import type { EmotionCache } from '@emotion/cache'
import lightTheme from '../styles/theme/lightTheme'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: AppProps & {emotionCache: typeof clientSideEmotionCache}) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
     <CacheProvider value={emotionCache}> 
     <ThemeProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
)
}

export default MyApp

