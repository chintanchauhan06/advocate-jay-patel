const About = () => {
  return (
    <section
      id="about"
      className="py-24 border-b border-gray-200 bg-[#F8F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="mb-14">
          <h2 className="heading-font text-4xl md:text-5xl text-[#1E3A5F]">
            About
          </h2>

          <div className="mt-4 w-20 h-[2px] bg-[#1E3A5F]"></div>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Name
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              Advocate Jay Patel
            </h3>
          </div>

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Enrolment Number
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              G/1234/2020
            </h3>
          </div>

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Enrolment Date
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              12 January 2020
            </h3>
          </div>

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              State Bar Council
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              Bar Council of Gujarat
            </h3>
          </div>

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Bar Association
            </p>

            <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
              Ahmedabad District Court Association
            </h3>
          </div>

          
          <div className="bg-white border border-gray-300 p-7 hover:border-[#1E3A5F] transition duration-300">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Qualification
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              LL.B, LL.M
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;