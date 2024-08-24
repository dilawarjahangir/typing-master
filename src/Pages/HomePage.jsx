import React from "react";
import TypingBox from "../compnents/TypingBox";
import Footer from "../compnents/Footer";
import Header from "../compnents/Header";

const HomePage = () => {
  return (
    <div className="canvas">
      <Header />
      <TypingBox />
      <Footer />
    </div>
  );
};

export default HomePage;
