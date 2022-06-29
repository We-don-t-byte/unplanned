import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
