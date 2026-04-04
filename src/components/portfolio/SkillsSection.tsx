export default function SkillsSection() {
  const skills = [
    {
      title: "HTML Email Development",
      desc: "Build and troubleshoot responsive email templates across clients",
    },
    {
      title: "Campaign Tracking & Analytics",
      desc: "Implement and validate UTM tracking for marketing performance",
    },
    {
      title: "CRM & Automation Workflows",
      desc: "Debug segmentation logic and trigger-based campaign flows",
    },
    {
      title: "Cross-Functional Collaboration",
      desc: "Work between marketing, product, and engineering teams",
    },
    {
      title: "Data Debugging",
      desc: "Analyze campaign data, logs, and structured data (XML/JSON)",
    },
    {
      title: "API & Integration Awareness",
      desc: "Understand data flow between systems and marketing platforms",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Technical Skills & Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md hover:translate-y-1 transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {skill.title}
            </h3>
            <p className="text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
