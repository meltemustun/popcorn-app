import React from "react";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watchedMovies, setWatchedMovies }) {
  return (
    <ul className="list list-watched">
      {watchedMovies.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          id={movie.imdbID}
          setWatchedMovies={setWatchedMovies}
        />
      ))}
    </ul>
  );
}
