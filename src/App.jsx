import { useReducer, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import MoodMaker from "./components/MoodMaker.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import weatherReducer, { initialState } from "./reducers/weatherReducer.js";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [city, setCity] = useState("");

  const fetchWeather =async()=> {
    if(!city) return;

    dispatch ({ type: actions.Fetch_Start })
    try{
      const res=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY&units=metric`
        );
        const data = await res.json();
        if (data.cod === "404"){
         dispatch({ type: actions.Fetch_Error, paylaod: "City not found"}) 
       return;
        }
   dispatch ({ type: actions.Fetch_success, payload: data});
   setCity("");
      }catch(err) {
        dispatch({ type: actions.Fetch_Error, payload: "Network Error"});
      }
    };


  return (
    <BrowserRouter>
      <div className="app">
        <h1>Weather App</h1>
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
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
