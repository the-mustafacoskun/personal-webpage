import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";



function App() {
  return (
    <>
      <section className="flex flex-col w-full overflow-x-hidden">
        <div className=" bg-[#F4F4F4] pt-15 px-8 md:px-14 lg:px-40 ">
          <Header />
          <Hero />
        </div>
        <div className="bg-white max-h-124 mb-54 md:mb-32.5 lg:mb-20 ">
          <Skills/>
        </div>
        <div className="bg-[#F4F4F4] py-20 px-8 md:px-14 lg:px-40">
          <Profile/>
        </div>
        <div>
          <Projects/>
        </div>
      </section>
    </>
  );
}

export default App;
