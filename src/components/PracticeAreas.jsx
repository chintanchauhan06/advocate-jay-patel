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
    <section
      id="practice"
      className="py-24 border-b border-gray-200 bg-[#F8F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="mb-14">
          <h2 className="heading-font text-4xl md:text-5xl text-[#1E3A5F]">
            Areas of Practice
          </h2>

          <div className="mt-4 w-20 h-[2px] bg-[#1E3A5F]"></div>
        </div>

        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {practiceData.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-8 hover:border-[#1E3A5F] transition duration-300"
            >

              
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">
                {section.title}
              </h3>

              
              <ul className="space-y-4 text-gray-700 leading-relaxed">

                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#1E3A5F] mt-[2px]">
                      •
                    </span>

                    <span>{item}</span>
                  </li>
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