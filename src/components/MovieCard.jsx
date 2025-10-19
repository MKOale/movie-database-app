import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 w-60 text-center">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="rounded-xl w-full h-80 object-cover mb-3"
        />
        <h3 className="text-lg font-semibold text-white truncate">{movie.Title}</h3>
        <p className="text-gray-400 text-sm">{movie.Year}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
