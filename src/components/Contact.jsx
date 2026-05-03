const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 border-b border-gray-200 bg-[#F8F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="mb-14">
          <h2 className="heading-font text-4xl md:text-5xl text-[#1E3A5F]">
            Contact Information
          </h2>

          <div className="mt-4 w-20 h-[2px] bg-[#1E3A5F]"></div>
        </div>

        
        <div className="grid md:grid-cols-3 gap-6">

          
          <div className="bg-white border border-gray-300 p-8 hover:border-[#1E3A5F] transition duration-300">

            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Address
            </p>

            <p className="text-gray-700 leading-relaxed">
              Office Address Here,
              <br />
              Ahmedabad, Gujarat
            </p>

          </div>

          
          <div className="bg-white border border-gray-300 p-8 hover:border-[#1E3A5F] transition duration-300">

            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Phone
            </p>

            <p className="text-gray-700 leading-relaxed">
              +91 98765 43210
            </p>

          </div>

          
          <div className="bg-white border border-gray-300 p-8 hover:border-[#1E3A5F] transition duration-300">

            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Email
            </p>

            <p className="text-gray-700 break-all leading-relaxed">
              advocatejaypatel@email.com
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;