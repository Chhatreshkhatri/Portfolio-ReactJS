import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Portfolio | Chhatresh Khatri</title>
        <meta name="keywords" content="Portfolio, Chhatresh, Khatri, Chhatresh Khatri, Web Developer, Web Development, Website, Code, reactjs, front end"/>
        <meta name="description" content="Hi, I am Chhatresh Khatri B. Tech in CSE. Full stack Web-Developer and a self-motivated, initiative-taking, and an enthusiastic professional."/>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
