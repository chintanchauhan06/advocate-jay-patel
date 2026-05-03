const Contact = () => {
  return (
    <section id="contact" className="py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-font text-4xl text-[#1E3A5F] mb-12">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border border-gray-300 p-6">
            <p className="text-sm text-gray-500 mb-2">Address</p>

            <p className="leading-relaxed">
              Office Address Here,
              <br />
              Ahmedabad, Gujarat
            </p>
          </div>

          <div className="bg-white border border-gray-300 p-6">
            <p className="text-sm text-gray-500 mb-2">Phone</p>

            <p>+91 98765 43210</p>
          </div>

          <div className="bg-white border border-gray-300 p-6">
            <p className="text-sm text-gray-500 mb-2">Email</p>

            <p>advocatejaypatel@email.com</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;