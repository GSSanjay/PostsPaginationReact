import React from "react";
import Menubar from "./components/Menubar";
import "./App.css";
import LandingSection from "./components/LandingSection";
import PostsSection from "./components/PostsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <h1>Hello App</h1> */}
      <Menubar />
      <LandingSection />
      <PostsSection />
      <Footer />
    </>
  );
};

export default App;
