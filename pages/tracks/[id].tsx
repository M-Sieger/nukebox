import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import { Player } from "../../components/player";
import TrackDetails from "../../components/trackDetails";
import { HeadNavigation } from "../../components/HeadNavigation";

export default function Track() {
  const [track, setTrack] = useState<APITrack>(null);
  const router = useRouter();
  const { id } = router.query;

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
    <>
      <HeadNavigation />
      <TrackDetails
        title={track.title}
        artist={track.artist}
        imgSrc={track.imgSrc}
      />
      <Player fileUrl={track.fileUrl} />
    </>
  );
}
