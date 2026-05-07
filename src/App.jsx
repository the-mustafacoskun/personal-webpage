import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeContextProvider from "./contexts/ThemeContext";
import LanguageContextProvider from "./contexts/LanguageContext";
import { Anot } from "./components/icons/Anot";
import { Rect } from "./components/icons/Rect";
import ProjectContextProvider from "./contexts/ProjectContext";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className=" flex flex-col w-full overflow-x-hidden min-h-screen">
      {/* Her bölüm için aynı yapı: Arka plan rengi dışta, içerik sınırlayıcı içte */}
      <LanguageContextProvider>
        <ThemeContextProvider>
          <ProjectContextProvider>
            {/* SECTION 1: Hero & Header */}
            <div className="bg-[#F4F4F4]  px-8 md:px-14 dark:bg-darkMain dark:text-white  pt-8">
              {/* Bu iç div, tüm sayfanın genişliğini aynı noktada durdurur */}
              <div className="max-w-274  mx-auto">
                <Header />
                <Hero />
              </div>
            </div>
            {/* SECTION 2: Skills */}

            <div className=" relative bg-white px-8 md:px-14 lg:px-20 py-10  dark:bg-darkMid dark:text-[#D9D9D9] ">
              <div className="relative">
                <Rect className="absolute bottom-50 -right-20 w-32 h-auto text-pink-600" />
              </div>
              <Anot className="absolute z-10 w-30.25 h-30.25 -top-16 right-82 text-[#D9D9D9] dark:text-[#525252]" />
              <div className=" max-w-6xl mx-auto">
                <Skills />
              </div>
              <Rect className="absolute xs:bottom-10 xs:-left-10 w-45.25 h-12.25 text-[#525252] scale-x-[-1] -z-1 sm:z-1" />
            </div>

            {/* SECTION 3: Profile */}
            <div className="relative bg-[#F4F4F4] px-8 md:px-14 lg:px-20 py-20  dark:bg-darkMain dark:text-white">
              <Anot className="absolute w-30.25 h-30.25 text-pink-600 -right-15 z-10 -top-8 " />
              <div className="  max-w-5xl mx-auto">
                <Profile />
              </div>
            </div>

            {/* SECTION 4: Projects */}
            <div className="bg-white dark:bg-darkMid dark:text-white px-8 md:px-14 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto">
                <Projects />
              </div>
            </div>
            <div className="bg-white  dark:bg-darkMid dark:text-white px-8 md:px-14 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto">
                <Footer />
              </div>
            </div>
          </ProjectContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}

export default App;
