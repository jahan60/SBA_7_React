import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import MoodMaker from "./components/MoodMaker.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Weather App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <WeatherCard />
                <MoodMaker />
              </>
            }
          />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
