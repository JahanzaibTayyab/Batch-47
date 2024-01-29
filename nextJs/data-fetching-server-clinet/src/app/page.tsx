import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24 flex flex-col gap-5">
      <Link href="/server-data">Server Data</Link>
      <Link href="/client-side">Client Data</Link>
      <Link href="/react-query">React Query</Link>
    </main>
  );
}
