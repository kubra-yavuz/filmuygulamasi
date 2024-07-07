import React, { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import Movie from "./Components/Movie/Movie";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("28");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Navbar />
      <Categories onCategorySelect={handleCategorySelect} />
      <Movie selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
