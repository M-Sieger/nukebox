import { useRouter } from "next/router";

export function HeadNavigation() {
  const router = useRouter();
  return <div onClick={() => router.back()}> back to List </div>;
}
