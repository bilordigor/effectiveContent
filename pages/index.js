import { Grid } from '@material-ui/core'
import Head from 'next/head'
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css'
import ReactPage from '../components/ReactPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>effectiveEditor</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <div className={styles.root}>
        <ReactPage />
      </div>
    </div>
  )
}
