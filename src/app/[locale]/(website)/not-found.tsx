import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-[800px] px-6 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Go Home
      </Link>
    </section>
  );
}


