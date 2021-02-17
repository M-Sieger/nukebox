import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greetings";
import TrackItem from "../components/track-list";

export default function Home() {
  const tracks = [
    {
      imgSrc:
        "https://64.media.tumblr.com/e86501a20d8309b6b35661831b77fd3c/tumblr_os6iectNbo1wpmw2uo1_540.jpg",
      title: "2Pac",
      artist: "Test",
    },

    {
      imgSrc:
        "https://s-media-cache-ak0.pinimg.com/564x/b6/14/76/b6147642f9745ca943ef0788df2264cc.jpg",
      title: "Drake",
      artist: "Test",
    },

    {
      imgSrc:
        "https://th.bing.com/th/id/R9e80e8faa069012e799acdd9da743972?rik=dTpatUa%2fzowEqQ&riu=http%3a%2f%2fwallpapers-best.com%2fuploads%2fposts%2f2015-11%2f15_notorious_big.jpg&ehk=4g8hKIyk8atUbnP8o3vXfvBSw1po5ee7pFSfpkVyWDY%3d&risl=&pid=ImgRaw",
      title: "B.I.G.",
      artist: "Test",
    },
  ];

  const trackItems = tracks.map((track) => {
    const key = `${track.artist}-${track.title}`;
    return (
      <TrackItem
        key={key}
        imgSrc={track.imgSrc}
        artist={track.artist}
        title={track.title}
      />
    );
  });

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
