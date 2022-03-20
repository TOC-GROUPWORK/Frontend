import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import Head from 'next/head';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Create Next App</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default MyApp
