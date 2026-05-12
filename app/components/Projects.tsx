const projects = [
  {
    title: "Fit Market Perú",
    description:
      "Complete ecommerce store for sports nutrition and fitness products. Built on Shopify with custom theme development and conversion optimization.",
    tags: ["Shopify", "Ecommerce", "CRO"],
    category: "Ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0544/0743/0319/files/fit_market_peru_1024x.png?v=1642393148",
    url: "https://fitmarketperu.com",
  },
  {
    title: "Entre Lanas",
    description:
      "Online boutique for artisanal yarn and knitting supplies. Custom Shopify store with a focus on product discovery and community.",
    tags: ["Shopify", "Theme Dev", "UX"],
    category: "Ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0544/0743/0319/files/entre_lanas_62ffef03-6a30-4ea5-8fb6-5b477b60e3e2_1024x.png?v=1642393139",
    url: "https://entrelanas.com",
  },
  {
    title: "Donna Cattiva",
    description:
      "Fashion ecommerce store with advanced filtering, lookbooks, and seamless checkout experience built on Shopify.",
    tags: ["Shopify", "HTML5", "CSS3", "JavaScript"],
    category: "Ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0544/0743/0319/files/image_404_1024x.png?v=1642393132",
    url: "https://donnacattiva.com",
  },
  {
    title: "VetPet Box",
    description:
      "Subscription box service for pet owners. Shopify subscription integration with recurring billing and customer portal.",
    tags: ["Shopify", "Javascript", "LIQUID"],
    category: "Ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0544/0743/0319/files/Screen_Shot_2022-01-16_at_23.18.12_1024x.png?v=1642393121",
    url: "https://vetpetbox.com",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Recent Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:-translate-y-1 block"
            >
              <div
                className={`h-48 ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                    : "bg-gradient-to-br from-violet-500 to-indigo-600"
                } flex items-center justify-center`}
              >
                <img className="h-48 w-full object-scale-down" src={project.image} alt={project.title} />

                {/* <span className="text-white/20 text-8xl font-bold select-none">
                  {project.title.charAt(0)}
                </span> */}
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
