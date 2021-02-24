import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { APITrack, getTrack } from "../../utils/api";
import AudioPlayer from "../../components/player";
import TrackDetails from "../../components/trackDetails";
import { HeadNavigation } from "../../components/HeadNavigation";

export default function Track() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [track, setTrack] = useState<APITrack>(null);
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    //todo get track by `id`
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <HeadNavigation />
      </header>
      <main>
        <TrackDetails
          title={track.title}
          artist={track.artist}
          imgSrc={track.imgSrc}
        />
      </main>
      <button onClick={handleFavoriteClick}>{favorite ? "💘" : "🖤"}</button>
      <footer>
        <AudioPlayer src={track.audioSrc} />
      </footer>
    </>
  );
}
