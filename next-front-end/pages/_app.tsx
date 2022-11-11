import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href={"/manifest.json"} />
        <link rel={"apple-touch-icon"} href={".icons/apple-icon-180.png"}></link>
        <meta name={"theme-color"} content={"#FFF"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
