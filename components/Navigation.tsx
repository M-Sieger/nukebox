import { useRouter } from "next/router";

export function Navigatiion() {
  const router = useRouter();
  return (
    <div className="Nav" onClick={() => router.back()}>
      back to List
    </div>
  );
}
