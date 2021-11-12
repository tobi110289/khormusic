import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>KHOR MUSIC</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1"
        ></meta>
        <meta
          name="description"
          content="An official online resource containing everything we, Berlin based band KHOR, have ever done, more or less. Videos, music, images, websites, instagram, email and assorted ephemeral materials."
        ></meta>
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self';
          script-src 'report-sample' 'self';
          style-src 'unsafe-inline;
          object-src 'none';
          base-uri 'self';
          connect-src 'self';
          font-src 'self';
          frame-src 'self' https://player.vimeo.com https://w.soundcloud.com;
          img-src 'self' data: https://i.vimeocdn.com;
          manifest-src 'self';
          media-src 'self';
          worker-src 'none';"
        ></meta> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
