import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].id,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function storeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "9d57b8dfa7c27b11f72c0eaad45b73c1";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3 form">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search a City..."
            autoFocus="on"
            autoComplete="off"
            onChange={storeCity}
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-outline-custom"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <hr />
        <h1>{weatherData.city}</h1>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#155263" height={100} width={100} />;
  }
}
