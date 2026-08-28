export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900">
        Privacy Policy
      </h1>

      <p className="mt-3 text-sm text-gray-500">
        Last updated: August 28, 2026
      </p>

      <div className="mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Information we collect
          </h2>
          <p className="mt-3 leading-7">
            The Quran application is designed to provide Quran reading,
            translations, audio recitations, explanations, and AI-assisted
            answers. We do not intentionally collect sensitive personal
            information from users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Local files
          </h2>
          <p className="mt-3 leading-7">
            The application may allow users to select audio files from their
            own device for personal use. Selected local files are not
            automatically uploaded to our servers unless a future feature
            explicitly says otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Cookies and local storage
          </h2>
          <p className="mt-3 leading-7">
            The application may use browser storage to remember settings such
            as language, theme, bookmarks, or other application preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Third-party services
          </h2>
          <p className="mt-3 leading-7">
            The application may use third-party services to provide Quran
            content, translations, audio, or AI functionality. These services
            may have their own privacy policies and terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            5. Children&apos;s privacy
          </h2>
          <p className="mt-3 leading-7">
            The application is intended to provide educational and religious
            information. We do not intentionally collect personal information
            from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            6. Changes to this Privacy Policy
          </h2>
          <p className="mt-3 leading-7">
            This Privacy Policy may be updated as the application develops or
            new features are added.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            7. Contact
          </h2>
          <p className="mt-3 leading-7">
            If you have questions about this Privacy Policy, please contact
            the application developer through the contact information
            provided on the application website.
          </p>
        </section>
      </div>
    </main>
  );
}