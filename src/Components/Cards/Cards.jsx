import React, { useEffect } from "react";
import "./Cards.css";

const Cards = ({ search, filteredData, setFilteredData, setSearch }) => {
  useEffect(() => {
    if (!search) return;
    const fetchMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=fd54515f`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setFilteredData(
          data.Search.filter((item) =>
            item.Title.toLowerCase().includes(search.toLowerCase())
          )
        );
      } else {
        setFilteredData([]);
      }
     
    };
    fetchMovies();
  }, [search, setFilteredData]);

  return (
    <div className="cards-container">
      <div className="cards-header">
        <h2>Search Results for "{search}"</h2>
        <p>{filteredData.length} results found.</p>
      </div>
      <div className="cards-grid">
        {filteredData.map((item) => (
          <div key={item.imdbID} className="movie-card">
            <img src={item.Poster} alt={item.Title} />
            <h3>{item.Title}</h3>
            <p>{item.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
