import React, { useState } from "react";
import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";
import RouteDefinitions from "./Components/Routes/RouteDefinitions";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RouteDefinitions />
      <Footer />
    </div>
  );
}

export default App;
