import React, { useState, useEffect } from "react";
import ComponentList from "./Component/list";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      {loading ? (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
          <div className="loader"></div>
          <div className="loader-text">VIT Amenities</div>
        </div>
      ) : (
        <div>
          <header className="header" onClick={reloadPage}>
            <h1>VIT Amenities</h1>
          </header>
          <div className="content">
            <ComponentList />
          </div>
          {showScroll && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <i className="fas fa-arrow-up"></i>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;