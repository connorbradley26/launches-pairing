import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function SpaceXApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SpaceX App</title>
        <meta name="description" content="Displays the latest SpaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 min-h-screen py-4 md:py-10">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default SpaceXApp;
