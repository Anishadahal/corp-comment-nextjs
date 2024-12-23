import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Corp comment | Give Feedback, Publicly</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
