import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform"
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
            alt={movie.Title}
            className="rounded-md mb-2 w-full h-80 object-cover"
          />
          <h2 className="text-xl font-semibold">{movie.Title}</h2>
          <p className="text-gray-400">{movie.Year}</p>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
