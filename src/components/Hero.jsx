const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
          Advocate & Legal Consultant
        </p>

        <h1 className="heading-font text-5xl md:text-7xl font-bold leading-tight text-[#1E3A5F]">
          Advocate Jay Patel
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-700 leading-relaxed">
          Practicing Advocate handling Civil, Criminal,
          Revenue, and Corporate matters.
        </p>

        <div className="mt-10 w-24 h-[2px] bg-[#1E3A5F]"></div>

      </div>
    </section>
  );
};

export default Hero;