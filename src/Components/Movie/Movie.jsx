import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ selectedCategory }) {
  const [movieList, setMovieList] = useState([]);

  const getMoviesByCategory = (category) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5fe1d52db666c8818ea9aa4908835a6c&sort_by=popularity.desc&with_genres=${category}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMoviesByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="movie-content">
      {movieList.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      ))}
    </div>
  );
}

export default Movie;
