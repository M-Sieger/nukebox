import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greetings"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nukebox</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Greeting name="Moritz" />

     
    </div>
  );
}
