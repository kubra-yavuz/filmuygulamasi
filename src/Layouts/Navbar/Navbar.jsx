import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Seçilen kategori:", category);
  };

  const handleAlertClick = () => {
    setIsAlertVisible(true);
  };

  const handleLoginClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 100000); // 2 seconds
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="nav-left">
          <div className="navbar-icon" onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-film nav-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
            </svg>
          </div>

          <h1 className="navbar-title">POPÜLER FİLM UYGULAMASI</h1>
        </div>

        <div className="nav-form">
          <form action="">
            <input
              type="text"
              className="nav-input"
              placeholder="Film İsmi Giriniz"
            />
            <button className="nav-search" type="submit">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>

            <button
              type="button"
              className="nav-login"
              id="liveAlertBtn"
              onClick={handleLoginClick}
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
