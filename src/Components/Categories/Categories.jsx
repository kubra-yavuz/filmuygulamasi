import React from "react";
import "./Categories.css";

function Categories({ onCategorySelect }) {
  return (
    <div className="category">
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("28")}
      >
        Aksiyon
      </button>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("16")}
      >
        Animasyon
      </button>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("878")}
      >
        Bilim Kurgu
      </button>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("10751")}
      >
        Aile
      </button>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("35")}
      >
        Komedi
      </button>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("12")}
      >
        Macera
      </button>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => onCategorySelect("14")}
      >
        Fantastik
      </button>
    </div>
  );
}

export default Categories;
