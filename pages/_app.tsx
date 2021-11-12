import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { NextStrictCSP } from "next-strict-csp";
import theme from "../theme";
import Head from "next/head";

const HeadCSP = process.env.NODE_ENV === "production" ? NextStrictCSP : Head;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeadCSP>
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" />
        )}
        <title>KHOR MUSIC</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1"
        ></meta>
        <meta
          name="description"
          content="An official online resource containing everything we, Berlin based band KHOR, have ever done, more or less. Videos, music, images, websites, instagram, email and assorted ephemeral materials."
        ></meta>
      </HeadCSP>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
