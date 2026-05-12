export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-500 dark:text-slate-500">
          © {year} Edwin Caceres. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/edwincaceres24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edwincaceres24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:edwin.caceressilva@gmail.com"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
