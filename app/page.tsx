import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 font-sans pt-16">
          <div className="flex flex-col items-center justify-center px-6 py-24 text-center sm:px-8 animate-fade-in w-full max-w-7xl mx-auto">
            <div className="space-y-8 max-w-4xl mx-auto relative z-10">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Test Headline
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
                We provide great value to our customers through excellent service and quality products that exceed expectations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                  aria-label="Get started with Test Business"
                >
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative">Get Started</span>
                </a>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Have questions? We&apos;d love to hear from you.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
