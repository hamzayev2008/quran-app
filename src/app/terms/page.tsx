export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900">
        Terms of Service
      </h1>

      <p className="mt-3 text-sm text-gray-500">
        Last updated: August 28, 2026
      </p>

      <div className="mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Purpose of the application
          </h2>
          <p className="mt-3 leading-7">
            The application is designed to provide access to Quran text,
            translations, recitations, explanations, educational materials,
            and related tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Quran content
          </h2>
          <p className="mt-3 leading-7">
            Quran text, translations, recitations, and other content may come
            from different sources. Each third-party source remains subject
            to its own copyright, license, and usage requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            3. User-provided files
          </h2>
          <p className="mt-3 leading-7">
            The application may allow users to select their own audio files
            from their devices. Users are responsible for ensuring that they
            have the necessary rights to use any files they provide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            4. AI-generated information
          </h2>
          <p className="mt-3 leading-7">
            Some features may use artificial intelligence to answer questions
            or explain Quran-related topics. AI-generated responses may
            contain mistakes and should not be treated as a replacement for
            qualified religious scholarship or authoritative sources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            5. Acceptable use
          </h2>
          <p className="mt-3 leading-7">
            Users should use the application lawfully and respectfully. Users
            must not use the application to distribute content that they do
            not have permission to distribute or to interfere with the
            operation of the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            6. Third-party services
          </h2>
          <p className="mt-3 leading-7">
            The application may use third-party services for Quran content,
            translations, audio, authentication, hosting, or AI functionality.
            Those services may have separate terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            7. Changes to the application
          </h2>
          <p className="mt-3 leading-7">
            Features, content sources, and functionality may change as the
            application develops. These Terms may also be updated when
            necessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            8. Contact
          </h2>
          <p className="mt-3 leading-7">
            For questions about these Terms of Service, please contact the
            application developer through the contact information provided on
            the application website.
          </p>
        </section>
      </div>
    </main>
  );
}