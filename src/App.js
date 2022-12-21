import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project1 from "./components/Project1";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero/>
        <Skill/>
        <Project1/>
      </div>
    </>
  );
}

export default App;
