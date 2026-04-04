export default function EmailProjects() {
  const emails = [
    {
      src: "/images/lids-porfolio-template-image.png",
      link: "/projects/lids-email",
    },
    {
      src: "/images/global-align-porfolio-template-image.png",
      link: "/projects/onboarding-email",
    },
    {
      src: "/images/explore-opportunities-porfolio-template-image.png",
      link: "/projects/newsletter-email",
    },
    {
      src: "/images/amazon-mock-porfolio-template-image.png",
      link: "/projects/amazon-email",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Email Campaigns
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {emails.map((email, index) => (
            <a
              key={index}
              href={email.link}
              rel="noopener noreferrer"
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-[500px] bg-gray-50"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={email.src}
                  alt={`Email ${index + 1}`}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-sm font-semibold tracking-wide bg-black/60 px-4 py-2 rounded">
                    View Email
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
