import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const categories = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
    "Reality",
    "Talk Show",
    "News",
    "Game Show",
    "Kids",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${selectedCategory}&apikey=fd54515f`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchCategories();
  }, [selectedCategory]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="hero-div">
      <div className="hero-content">
        <h1>Welcome to Xpolre</h1>
        <p>Find your next favorite movie or series.</p>
      </div>

      <div className="categories">
        <div className="category">
          <h2>Movies</h2>
          <p>Discover a vast collection of movies.</p>

          {categories.map((cat, index) => (
            <div key={index} className="category-item">
              <button
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="line">
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie, idx) => (
              <div key={idx} className="movie-card">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.Title}
                />
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
