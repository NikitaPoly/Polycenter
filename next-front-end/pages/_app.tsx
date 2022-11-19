import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, session }: any) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="manifest" href={"/manifest.json"} />
        <link rel={"apple-touch-icon"} href={".icons/apple-icon-180.png"}></link>
        <meta name={"theme-color"} content={"#FFF"} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {
        //only render google log in if on the sds page
        router.pathname.includes("sds") ? (
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  );
}
