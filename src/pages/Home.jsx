import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState("");

  const handleSearch = async (query) => {
    if (!query) return;
    setError("");
    setLoading(true);
    setLastQuery(query); // 🧠 remember the query

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=6666af3d&s=${query}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("No movies found. Try a different title.");
      }
    } catch {
      setError("Error fetching data. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold mb-2">🎬 Welcome to Movie Database</h1>
        <p className="text-gray-400 mb-8">Search for your favorite movies here!</p>
      </div>

      <SearchBar onSearch={handleSearch} lastQuery={lastQuery} />

      {loading && <p className="text-gray-400 mt-4">Loading...</p>}
      {error && <p className="text-red-400 mt-4">{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
