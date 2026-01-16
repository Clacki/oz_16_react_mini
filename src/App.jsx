/** @format */

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MovieDetail from "./pages/MovieDetail";
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

function App() {
  const [movies] = useState(movieListData.results ?? []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <main>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </main>
          }
        />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
