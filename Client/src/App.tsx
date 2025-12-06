import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./pages/About";
import ConferenceThemes from "./pages/conferencetheme";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="schedule">
        <ConferenceThemes />
      </section>

      <Footer />
    </>
  );
}

export default App;
