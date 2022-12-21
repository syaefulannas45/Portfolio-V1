import Hero from "./components/Hero";
import Language from "./components/Language";
import Navbar from "./components/Navbar";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Skill />
        <Project1 />
        <Project2 />
        <Language/>
      </div>
    </>
  );
}

export default App;
