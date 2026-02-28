export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-primary hover:text-blue-600 transition-colors">
            Test Business
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
