import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import useFetch from "./useFetch";
import TodayWeather from "./components/TodayWeather";

const API_KEY = 'f5ff5b535c98d130d96d2c64555d295d';

function App() {
  const [city, setCity] = useState('Coimbatore');

  const { data, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  useEffect(() => {
    document.body.className ='bg-secondary-subtle text-light';
  }, []);
  console.log(data);

  return (
    <>
     <div className="container mt-4">
      <div className="card bg-info-subtle border-1 shadow-lg">
      <Navbar onSearch={handleSearch} />
      
        {data && data.cod === 200 ? (
          <TodayWeather
          data = {data}/>
          
        ) : (
        <p className="text-danger text-center fw-bold mt-4">
          {error ? `${city} - ${error}` : "Loading weather data..."}
        </p>

        )}
        </div>
        </div>
    </>
  );
}

export default App;
