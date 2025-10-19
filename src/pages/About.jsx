import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">About This App</h1>
      <p className="text-gray-400 text-center max-w-md">
        The Movie Database App allows users to search for movies using the OMDb API, 
        view movie details, and explore ratings and genres. Built with React and Tailwind CSS.
      </p>
    </div>
  )
}
