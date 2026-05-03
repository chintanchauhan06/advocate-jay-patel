const practiceData = [
  {
    title: "Civil & Financial Matters",
    items: [
      "Cheque Return Matters",
      "Money Recovery Suits",
      "Co-operative Society Disputes",
      "Corporate Matters",
    ],
  },

  {
    title: "Family & Personal Matters",
    items: [
      "Family Matters",
      "Domestic Violence Matters",
      "Juvenile Cases",
    ],
  },

  {
    title: "Criminal Litigation",
    items: [
      "Bail Matters",
      "Criminal Cases",
      "Sessions Court Cases",
      "CBI Cases",
      "ED / Money Laundering Cases",
      "Police Station Related Work",
    ],
  },

  {
    title: "Land & Revenue Matters",
    items: [
      "Land Revenue Cases",
      "Land Disputes",
    ],
  },

  {
    title: "Court & Procedural Matters",
    items: [
      "Miscellaneous Court Applications",
    ],
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-font text-4xl text-[#1E3A5F] mb-12">
          Areas of Practice
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {practiceData.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-8"
            >
              <h3 className="text-xl font-semibold mb-5 text-[#1E3A5F]">
                {section.title}
              </h3>

              <ul className="space-y-3 text-gray-700">
                {section.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;