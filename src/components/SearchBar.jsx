import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Load saved query from localStorage on mount
  useEffect(() => {
    const savedQuery = localStorage.getItem("lastSearchQuery");
    if (savedQuery) {
      setQuery(savedQuery);
      onSearch(savedQuery); // auto search on reload
    }
  }, []);

  // Update localStorage whenever query changes
  useEffect(() => {
    if (query) {
      localStorage.setItem("lastSearchQuery", query);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex items-center bg-gray-800 rounded-full overflow-hidden shadow-lg"
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow bg-transparent text-white px-4 py-2 outline-none placeholder-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 font-semibold text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
