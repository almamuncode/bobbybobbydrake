import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dogs N Buns",
  robots: { index: false },
};
// A static redirect works even on a plain file host with JavaScript disabled.
export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <p>
        <Link href="/en/">Continue to Dogs N Buns →</Link>
      </p>
    </>
  );
}
