import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greetings";
import TrackItem from "../components/track-list";
import { useEffect, useState } from "react";
import { APITrack, getTracks } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);
  useEffect(() => {
    console.log("Mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  const trackItems = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TrackItem
          imgSrc={track.imgSrc}
          artist={track.artist}
          title={track.title}
        />
      </a>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Jan" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
