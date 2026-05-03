import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeContextProvider from "./contexts/ThemeContext";
import LanguageContextProvider from "./contexts/LanguageContext";

function App() {
  return (
    <section className="flex flex-col w-full overflow-x-hidden min-h-screen">
      {/* Her bölüm için aynı yapı: Arka plan rengi dışta, içerik sınırlayıcı içte */}
      <LanguageContextProvider>
        <ThemeContextProvider>
          {/* SECTION 1: Hero & Header */}
          <div className="bg-[#F4F4F4] px-8 md:px-14 dark:bg-darkMain dark:text-white  pt-5">
            {/* Bu iç div, tüm sayfanın genişliğini aynı noktada durdurur */}
            <div className="max-w-274 mx-auto">
              <Header />
              <Hero />
            </div>
          </div>
          {/* SECTION 2: Skills */}
          <div className="bg-white px-8 md:px-14 lg:px-20 py-10  dark:bg-darkMid dark:text-[#D9D9D9] ">
            <div className="max-w-6xl mx-auto">
              <Skills />
            </div>
          </div>

          {/* SECTION 3: Profile */}
          <div className="bg-[#F4F4F4] px-8 md:px-14 lg:px-20 py-20  dark:bg-darkMain dark:text-white">
            <div className="max-w-5xl mx-auto">
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
        </ThemeContextProvider>
      </LanguageContextProvider>
    </section>
  );
}

export default App;
