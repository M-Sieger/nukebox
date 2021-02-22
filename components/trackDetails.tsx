import styles from "../styles/trackDetails.module.css";

type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};
export default function TrackDetails({ imgSrc, title, artist }: Props) {
  return (
    <div className={styles.trackDetails}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </div>
  );
}
