"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    
    alert(`Thank you, ${name}! We'll contact you at ${email} soon.`);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-2 block w-full rounded-md border-0 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-2 block w-full rounded-md border-0 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-2 block w-full rounded-md border-0 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
