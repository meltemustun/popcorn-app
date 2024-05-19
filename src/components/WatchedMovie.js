import React from "react";

export default function WatchedMovie({ movie, id, setWatchedMovies }) {
  return (
    <li>
      <img alt={`${movie.Title} poster`} src={movie.poster}></img>
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime}</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() =>
          setWatchedMovies((watchedMovies) =>
            watchedMovies.filter((movie) => movie.imdbID !== id)
          )
        }
      >
        X
      </button>
    </li>
  );
}
