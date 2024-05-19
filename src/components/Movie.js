import React from "react";

export default function Movie({ movie, id, setSelectedId, selectedId }) {
  return (
    <li
      onClick={() => {
        selectedId === id ? setSelectedId("") : setSelectedId(id);
      }}
    >
      <img alt={`${movie.Title} poster`} src={movie.Poster}></img>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
