import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import AudioPlayer from "../../components/player";
import TrackDetails from "../../components/trackDetails";
import { HeadNavigation } from "../../components/HeadNavigation";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);

  useEffect(() => {
    //todo get track by `id`
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadNavigation />
      <TrackDetails
        title={track.title}
        artist={track.artist}
        imgSrc={track.imgSrc}
      />
      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "💘" : "🖤"}
      </button>
      <AudioPlayer src={track.audioSrc} />
    </>
  );
}
