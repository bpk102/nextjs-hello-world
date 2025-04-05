import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Brandon.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
