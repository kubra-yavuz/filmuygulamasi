import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="ui card">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="content">
          <div className="header">{movie.title}</div>
          <div className="meta">
            <span className="date">Yayın Tarihi: {movie.release_date}</span>
          </div>
          <div className="description">{movie.overview}</div>
        </div>
        <div className="extra content">
          <a>Filmi İzle</a>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
