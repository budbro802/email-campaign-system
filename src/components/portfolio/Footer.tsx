export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center text-sm text-gray-600">
        <p className="font-medium text-gray-900 mb-2">Andrew Anderson</p>

        <p className="mb-4">Email Developer • Front-End Developer</p>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="mailto:andrewanderson01pro@outlook.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/andrewanderson3/"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Andrew Anderson
        </p>
      </div>
    </footer>
  );
}
