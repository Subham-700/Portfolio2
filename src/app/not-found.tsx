import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-5xl">This page isn&apos;t on air.</h1>
        <Link href="/" className="mt-6 inline-block text-signal underline-offset-4 hover:underline">Back to home</Link>
      </div>
    </main>
  );
}
