import { useState, useReducer } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import MoodMaker from "./components/MoodMaker.jsx";
import weatherReducer, { initialState, actions } from "./reducers/weatherReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const fetchWeather = async () => {
    if (!city) return;

    dispatch({ type: actions.Fetch_Start });

    try {
      

const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY
&units=metric`
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
                weather={state.weather}
              />
            </>
          }
        />

        <Route path="/mood" element={<MoodMaker />} />
      </Routes>
    </div>
  );
}

export default App;