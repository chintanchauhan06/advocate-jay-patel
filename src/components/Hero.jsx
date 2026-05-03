const Hero = () => {
  return (
    <section className="min-h-screen flex items-center border-b border-gray-200 bg-[#F8F6F2]">

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-5">
            Advocate & Legal Consultant
          </p>

          <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1E3A5F]">
            Advocate Jay Patel
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
            Practicing Advocate handling Civil, Criminal,
            Revenue, and Corporate matters.
          </p>

          <div className="mt-10 w-24 h-[2px] bg-[#1E3A5F]"></div>

        </div>

      </div>

    </section>
  );
};

export default Hero;