import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";

import Layout from "../components/Layout";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(
  props: AppProps & { emotionCache: typeof clientSideEmotionCache }
) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
