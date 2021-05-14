import React from "react";
import Menubar from "./components/Menubar";
import "./App.css";
import LandingSection from "./components/LandingSection";
import PostsSection from "./components/PostsSection";

const App = () => {
  return (
    <>
      {/* <h1>Hello App</h1> */}
      <Menubar />
      <LandingSection />
      <PostsSection />
    </>
  );
};

export default App;
