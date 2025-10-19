import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=6666af3d&i=${id}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
          setError("");
        } else {
          setError("Movie not found.");
        }
      } catch (err) {
        setError("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-gray-400 mt-4">Loading...</p>;
  if (error) return <p className="text-red-400 mt-4">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={movie.Title}
            className="w-64 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
            <p className="text-gray-400 mb-2">{movie.Year} • {movie.Genre}</p>
            <p className="text-gray-300 mb-4 italic">Directed by {movie.Director}</p>
            <p className="text-gray-200 mb-4">{movie.Plot}</p>
            <p className="text-yellow-400 font-semibold">⭐ {movie.imdbRating}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
