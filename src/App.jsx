import { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import MovieCard from "./Components/MovieCard/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      Popüler Film Uygulaması
      <Categories />
      <MovieCard />
    </div>
  );
}

export default App;
