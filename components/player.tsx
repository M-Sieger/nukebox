import styles from "../styles/audioplayer.module.css";

type AudioDingens = {
  fileUrl: string;
};

export function Player(props: AudioDingens) {
  return (
    <div className="player">
      <audio controls src={props.fileUrl}></audio>
    </div>
  );
}
