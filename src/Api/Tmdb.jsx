// src/api/tmdb.js

import axios from "axios";

const apiKey = "YOUR_TMDB_API_KEY";
const baseURL = "https://api.themoviedb.org/3";

// Popüler filmleri çekmek için bir fonksiyon oluşturalım
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1, // İstediğiniz sayfa numarası
      },
    });
    return response.data.results; // API'den gelen filmler
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return []; // Hata durumunda boş bir dizi döndürmek
  }
};
