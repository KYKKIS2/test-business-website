export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background font-sans">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Test Headline
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
          We provide great value to our customers through excellent service and quality products that exceed expectations.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
