import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "../Movie/Movie";
import MovieDetail from "../../Pages/MovieDetail/MovieDetail";

function RouteDefinitions() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default RouteDefinitions;
