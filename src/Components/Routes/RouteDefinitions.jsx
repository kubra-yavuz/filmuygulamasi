import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "../Categories/Categories";
import Movie from "../Movie/Movie";
import MovieDetail from "../../Pages/MovieDetail/MovieDetail";

const RouteDefinitions = () => {
  const [selectedCategory, setSelectedCategory] = useState("28");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Categories onCategorySelect={handleCategorySelect} />
            <Movie selectedCategory={selectedCategory} />
          </>
        }
      />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default RouteDefinitions;
