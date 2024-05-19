import React from "react";
import Movie from "./Movie";

export default function MoviesList({ movies, setSelectedId, selectedId }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          id={movie.imdbID}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
}
