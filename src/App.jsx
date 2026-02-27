import { useReducer, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import MoodMaker from "./components/MoodMaker.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import weatherReducer, { initialState, actions } from "./reducers/weatherReducer.js";
import { Link } from "react-router-dom";


function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [city, setCity] = useState("");

const fetchWeather = async () => {
  if (!city) return;

  dispatch({ type: actions.Fetch_Start });

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cd70609b3fd50a6706cd9c9d5c78941&units=metric`
    );

    const data = await res.json();

    if (data.cod === 404) {
      dispatch({ type: actions.Fetch_Error, payload: "City not found" });
      return;
    }

    dispatch({ type: actions.Fetch_Success, payload: data });
    setCity("");
  } catch (err) {
    dispatch({ type: actions.Fetch_Error, payload: "Network Error" });
  }
};


  return (
    <BrowserRouter>
      <div className="app">
        <h1>Weather App</h1>
        <nav>
  <Link to="/">Weather</Link>
  <Link to="/mood">Mood Maker</Link>
</nav>


        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                city={city}
                setCity={setCity}
                dispatch={dispatch} 
                fetchWeather={fetchWeather}
                />
                <WeatherCard
                loading={state.loading}
                error={state.error} 
                weather ={state.weather}
                />
                <MoodMaker />
              </>
            }
          />

         <Route path="/mood" element={<MoodMaker />} />

 
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
