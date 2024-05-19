import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";

const KEY = "14cebb1";

export default function MovieDetail({
  selectedId,
  setSelectedId,
  watchedMovies,
  setWatchedMovies,
}) {
  const [movieDetail, setMovieDetail] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(
    function () {
      async function fetchMovies() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
        setMovieDetail(data);
      }

      fetchMovies();
    },
    [selectedId]
  );
  return (
    <>
      <div className="details">
        <header>
          <button className="btn-back" onClick={() => setSelectedId("")}>
            ←
          </button>
          <img
            alt={`${movieDetail.Title} poster`}
            src={movieDetail.Poster}
          ></img>
          <div className="details-overview">
            <h2>{movieDetail.Title}</h2>
            <p>
              {movieDetail.Released} &bull; {movieDetail.Runtime}
            </p>
            <p>{movieDetail.Genre}</p>
            <p>
              <span>⭐️</span>
              {movieDetail.imdbRating} IMDb rating
            </p>
          </div>
        </header>

        <section>
          {watchedMovies.map((movie) => movie.imdbID).includes(selectedId) ? (
            `You rated with movie ${
              watchedMovies.find((movie) => movie.imdbID === selectedId)
                .userRating
            } ⭐️`
          ) : (
            <StarRating maxRating={10} size={25} onSetRating={setRating} />
          )}

          {rating ? (
            <button
              className="btn-add"
              onClick={() => {
                setWatchedMovies((watchedMovies) => [
                  ...watchedMovies,
                  {
                    poster: movieDetail.Poster,
                    title: movieDetail.Title,
                    imdbRating: Number(movieDetail.imdbRating),
                    userRating: rating,
                    runtime: Number(movieDetail.Runtime.split(" ").at(0)),
                    imdbID: movieDetail.imdbID,
                  },
                ]);
                setSelectedId("");
              }}
            >
              + Add to list
            </button>
          ) : (
            ""
          )}

          <p>
            <em>{movieDetail.Plot}</em>
          </p>
          <p>Starring {movieDetail.Actors}</p>
          <p>Directed by {movieDetail.Director}</p>
        </section>
      </div>
    </>
  );
}

// Plot, Actors, Director
