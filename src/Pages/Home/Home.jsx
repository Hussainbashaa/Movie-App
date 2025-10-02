import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Cards from "../../Components/Cards/Cards";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { useState } from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../../Components/Movies/Movies";
import Series from "../../Components/Series/Series";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="main-div">
      <div className="nav-div">
        <NavBar search={search} setSearch={setSearch} />
      </div>
      <div className="hero-div">
        <HeroSection />
      </div>
      <div className="cards-div">
        <Cards
          search={search}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default Home;
