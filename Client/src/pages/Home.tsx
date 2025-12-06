import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutSection from "./About";
import ConferenceThemes from "./conferencetheme";
import Footer from "../components/Footer";



function App() {
  // Optional: For mobile menu state if Header needs it
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optional: For responsive behavior like showing/hiding elements based on screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Optional: Add responsive padding/margin to control overall spacing */}
      <div className={`${isMobileMenuOpen ? "overflow-hidden" : ""}`}>
        {/* Pass mobile state to Header if needed */}
        <Header
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main content with optional max-width container for large screens */}
        <main className="flex-grow">
          <div className="w-full">
            <Hero />
            <AboutSection />
            <ConferenceThemes />
          </div>
        </main>

        <Footer />
      </div>

      {/* Optional: Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
