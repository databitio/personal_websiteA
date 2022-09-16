import React from "react";
import "./App.css";
import IntroSection from "./pages/intro/IntroSection";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <IntroSection />

      <section className="w-screen h-screen bg-rainbow relative">
        <div className="intro-cover-reverse w-full h-full absolute"></div>
        Hello world
      </section>
    </main>
  );
}

export default App;

// transition-colors bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
