const companies = ["PVEA", "Entel", "Globant", "SDC"];

export default function Companies() {
  return (
    <section id="clients" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-10">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companies.map((company) => (
            <span
              key={company}
              className="text-2xl font-bold text-slate-300 dark:text-slate-700 hover:text-slate-500 dark:hover:text-slate-500 transition-colors select-none tracking-tight"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
