const companies = [
  { name: "PVEA",
    image: "https://edwinwebsite.s3.amazonaws.com/pvea_logo.svg"},
  { name: "Disney",
    image: "https://edwinwebsite.s3.us-east-1.amazonaws.com/Walt_Disney_Studios_Logo.svg.png"},
  { name: "Globant",
    image: "https://edwinwebsite.s3.amazonaws.com/Globant_Logo.webp"},
  { name: "Smile Direct Club",
    image: "https://edwinwebsite.s3.amazonaws.com/sdc_logo.svg"}, 
  { name: "Entel",
    image: "https://edwinwebsite.s3.amazonaws.com/entel_logo.svg"}
]

export default function Companies() {
  return (
    <section id="clients" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-10">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center items-center ">
          {companies.map((company) => (
            <img
              src={company.image}
              alt={company.name}
              className="h-12 mx-6 my-4 object-contain  hover:grayscale-0 hover:opacity-100 transition-all"
            >
            </img>
          ))}
        </div>
      </div>
    </section>
  );
}
