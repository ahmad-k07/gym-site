import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="lead">We couldn&apos;t find that muscle or page.</p>
      <p>
        <Link href="/">Back to search</Link>
      </p>
    </>
  );
}
