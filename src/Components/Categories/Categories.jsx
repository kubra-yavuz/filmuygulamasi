import React, { useState } from "react";
import "./Categories.css";

function Categories({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="category">
      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "28" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("28")}
      >
        Aksiyon
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "16" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("16")}
      >
        Animasyon
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "878" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("878")}
      >
        Bilim Kurgu
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "10751" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("10751")}
      >
        Aile
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "35" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("35")}
      >
        Komedi
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "12" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("12")}
      >
        Macera
      </button>

      <button
        type="button"
        className={`btn btn-outline-warning ${
          activeCategory === "14" ? "active" : ""
        }`}
        onClick={() => handleCategorySelect("14")}
      >
        Fantastik
      </button>
    </div>
  );
}

export default Categories;
