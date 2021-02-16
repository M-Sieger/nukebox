// import styles from "../styles/Greeting.module.css";
import styles from "../styles/track_item.module.css";

type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};

export default function TrackItem(props: Props) {
  return (
    <div>
      <img className={styles.cover}>{props.imgSrc}</img>
      <h4 className={styles.artist}>{props.artist}</h4>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
}
