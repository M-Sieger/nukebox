import { useRouter } from "next/router";

export function Navigatiion() {
  const router = useRouter();
  return <div onClick={() => router.back()}>Back to List</div>;
}
