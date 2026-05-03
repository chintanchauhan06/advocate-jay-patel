import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Contact from "./components/Contact";
import Declaration from "./components/Declaration";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <PracticeAreas />

      <Contact />

      <Declaration />

      
      <footer className="border-t border-gray-200 bg-[#F8F6F2]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          
          <p className="text-sm text-gray-500">
            © 2026 Advocate Jay Patel. All rights reserved.
          </p>

        </div>
      </footer>
    </main>
  );
};

export default App;