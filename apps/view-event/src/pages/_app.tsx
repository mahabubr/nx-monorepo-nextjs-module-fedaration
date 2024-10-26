/* eslint-disable @nx/enforce-module-boundaries */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { store } from '../../../../shared-state/src';
import { Provider } from 'react-redux';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to view-event!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
