import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">404 - Page Not Found </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 pb-5">
        Sorry, the page you’re looking for doesn’t exist. :(
      </p>
      <Link
        href="/"
        className="inline-block text-sm rounded bg-foreground px-3 py-1 text-background hover:opacity-90 transition"
      >
        Go Back
      </Link>
    </div>
  );
}
