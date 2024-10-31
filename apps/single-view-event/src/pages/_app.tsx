/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { useEffect, useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    // @ts-ignore
    import('create/store')
      .then((module) => module.store)
      .then((loadedStore) => {
        setStore(loadedStore);
      })
      .catch((error) => {
        console.error('Failed to load remote store:', error);
      });
  }, []);

  if (!store) return null;

  return (
    <>
      <Head>
        <title>Welcome to single-view-event!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
