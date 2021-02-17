// import styles from "../styles/Greeting.module.css";
import styles from "../styles/track_item.module.css";

type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};

export default function TrackItem({ imgSrc, title, artist }: Props) {
  return (
    <li className={styles.trackItem}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </li>
  );
}
