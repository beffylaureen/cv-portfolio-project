import React from "react";
import User from "./components/User";
import ContactForm from "./components/ContactForm";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";




function App() {
  const imageStyle = {
    width: "300px",
    height: "300x",
  }
  

  return (
    <>
      <Header />
      <User name="Beth L. Haynes" />
      <img src="../src/assets/IMG_2048.jpg" alt="Me" style={imageStyle}/>
      <Footer />
    </>
  )
}

export default App

