import React, { useEffect, useState } from "react";

const KEY = "14cebb1";

export default function Search({ setMovies }) {
  const [inputText, setInputText] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${inputText}`
        );
        const data = await res.json();
        if (res.ok) {
          if (data.Response === "True") {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        }
      }

      fetchMovies();
    },
    [inputText]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    ></input>
  );
}
