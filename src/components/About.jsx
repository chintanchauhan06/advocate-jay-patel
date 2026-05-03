const About = () => {
  return (
    <section id="about" className="py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-font text-4xl text-[#1E3A5F] mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">Name</p>
            <h3 className="text-lg font-medium">Advocate Jay Patel</h3>
          </div>

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">Enrolment Number</p>
            <h3 className="text-lg font-medium">G/1234/2020</h3>
          </div>

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">Enrolment Date</p>
            <h3 className="text-lg font-medium">12 January 2020</h3>
          </div>

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">State Bar Council</p>
            <h3 className="text-lg font-medium">Bar Council of Gujarat</h3>
          </div>

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">Bar Association</p>
            <h3 className="text-lg font-medium">
              Ahmedabad District Court Association
            </h3>
          </div>

          <div className="border border-gray-300 p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">Qualification</p>
            <h3 className="text-lg font-medium">LL.B, LL.M</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;