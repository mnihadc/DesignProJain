import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
import AboutSection from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Accommodations from "./pages/Accommodations";
import Directions from "./pages/Directions";
import Workshop from "./pages/Workshop";
import Schedule from "./pages/Schedule";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const HomePage = () => (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </>
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
