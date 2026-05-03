import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Contact from "./components/Contact";
import Declaration from "./components/Declaration";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Declaration />
    </div>
  );
};

export default App;