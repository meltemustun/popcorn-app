import React from "react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watchedMovies }) {
  return (
    <div className="summary">
      <h2>MOVIES YOU WATCHED</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {average(watchedMovies.map((movie) => movie.imdbRating)).toFixed(2)}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>
            {average(watchedMovies.map((movie) => movie.userRating)).toFixed(2)}
          </span>
        </p>
        <p>
          <span>⏳</span>
          <span>{average(watchedMovies.map((movie) => movie.runtime))}</span>
        </p>
      </div>
    </div>
  );
}
