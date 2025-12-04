import { Route } from "next";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/about" as Route}>About</Link>
    </div>
  );
}
