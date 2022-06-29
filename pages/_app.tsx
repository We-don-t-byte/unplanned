import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
