import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map(movie => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
