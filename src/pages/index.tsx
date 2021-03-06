import Head from 'next/head';
import Image from 'next/image';
import { Counter } from '../components/Counter/Counter';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Counter defaultCount={0} description="My Counter"></Counter>
      </main>
    </div>
  );
}
