import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";

const App = () => {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/movies" element={<Movies />} />
    //     <Route path="/series" element={<Series />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
