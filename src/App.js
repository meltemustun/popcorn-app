import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import MoviesList from "./components/MoviesList";
import Main from "./components/Main";

import Box from "./components/Box";

import { useState } from "react";
import WatchedSummary from "./components/WatchedSummary";
import MovieDetail from "./components/MovieDetail";
import WatchedMoviesList from "./components/WatchedMoviesList";

const KEY = "f84fc31d";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  return (
    <>
      <NavBar>
        <Search setMovies={setMovies} />
        <NumResults length={movies.length} />
      </NavBar>
      <Main>
        <Box>
          <MoviesList
            movies={movies}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              watchedMovies={watchedMovies}
              setWatchedMovies={setWatchedMovies}
            />
          ) : (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMoviesList
                watchedMovies={watchedMovies}
                setWatchedMovies={setWatchedMovies}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
