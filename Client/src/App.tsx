import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import LogoDesignCompetitionSection from "./pages/LogoDesignCompetitionSection";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    // If you're loading actual resources, use:
    // window.addEventListener('load', () => setIsLoading(false));
    // return () => window.removeEventListener('load', () => setIsLoading(false));

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <LogoDesignCompetitionSection />
      </section>

      <Footer />
    </>
  );
}

export default App;
