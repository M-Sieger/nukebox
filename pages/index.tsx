import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Greeting from "../components/greetings"
import TrackItem from "../components/track-list";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Greeting name="Moritz" /> */}

      <TrackItem
        imgSrc="https://unsplash.com/photos/__U6tHlaapI"
        title="Test"
        artist="Test"
      />
    </div>
  );
}
