import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <div className="category">
      <button type="button" className="btn btn-outline-warning">
        Aksiyon
      </button>

      <button type="button" className="btn btn-outline-warning">
        Animasyon
      </button>
      <button type="button" className="btn btn-outline-warning">
        Bilim Kurgu
      </button>
      <button type="button" className="btn btn-outline-warning">
        Aile
      </button>

      <button type="button" className="btn btn-outline-warning">
        Komedi
      </button>

      <button type="button" className="btn btn-outline-warning">
        Macera
      </button>

      <button type="button" className="btn btn-outline-warning">
        Fantastik
      </button>
    </div>
  );
}

export default Categories;
