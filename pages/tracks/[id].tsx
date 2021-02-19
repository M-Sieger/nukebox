import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    //todo get track by `id`
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="track-page">
      <div>
        Title: {track.title}
        Artist: {track.artist}
      </div>
      <img src={track.imgSrc} />
    </ul>
  );
}
